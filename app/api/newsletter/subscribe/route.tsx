import { NextResponse } from 'next/server';
import { resend } from '@/lib/resend';
import WelcomeEmail from '@/components/emails/WelcomeEmail';
import { render } from '@react-email/render';
import dns from 'node:dns';

// Fix for ECONNRESET in Node.js on some Windows networks
dns.setDefaultResultOrder('ipv4first');

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // 1. Send Welcome Email
    console.log('Rendering welcome email for:', email);
    try {
      const html = await render(<WelcomeEmail email={email} />);
      
      console.log('Sending email via Resend SDK...');
      const { data, error } = await resend.emails.send({
        from: 'Bucket Baddie <onboarding@resend.dev>',
        to: [email],
        subject: "You're In. Welcome to the Cult.",
        html: html,
      });

      if (error) {
        console.error('Resend API Error:', error);
        return NextResponse.json(
          { error: 'Failed to send welcome email' },
          { status: 500 }
        );
      }
      
      console.log('Email sent successfully:', data);
    } catch (renderError) {
      console.error('Email rendering error:', renderError);
      return NextResponse.json(
        { error: 'Failed to prepare email' },
        { status: 500 }
      );
    }

    // 2. Add to Resend Audience (Contact List)
    if (process.env.RESEND_AUDIENCE_ID) {
      try {
        await resend.contacts.create({
          email: email,
          audienceId: process.env.RESEND_AUDIENCE_ID,
          unsubscribed: false,
        });
        console.log('Contact added to audience.');
      } catch (contactError) {
        console.warn('Resend contact creation warning:', contactError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('General API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
