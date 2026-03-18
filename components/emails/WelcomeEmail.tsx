import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Hr,
  Img,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
  email: string;
}

export const WelcomeEmail = ({ email }: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to the Bucket Baddie Secret Menu!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoSection}>
          <Heading style={h1}>BUCKET BADDIE</Heading>
        </Section>
        <Heading style={h2}>You're In.</Heading>
        <Text style={text}>
          Welcome to the cult. You've just unlocked access to the underground drops, secret sauces, and crazy combo deals that nobody else knows about.
        </Text>
        <Section style={buttonContainer}>
          <Link href="https://bucketbaddie.com/menu" style={button}>
            View Secret Menu
          </Link>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This email was sent to {email}. If you didn't sign up for this, you can safely ignore it.
        </Text>
        <Text style={footer}>
          Bucket Baddie • Secure the bag.
        </Text>
        <Text style={footer}>
          <Link href="https://bucketbaddie.com/unsubscribe" style={unsubscribeLink}>
            Unsubscribe
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const main = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const unsubscribeLink = {
  color: "rgba(255, 255, 255, 0.4)",
  textDecoration: "underline",
  fontSize: "12px",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "580px",
};

const logoSection = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const h1 = {
  color: "#f472b6", // pink-400
  fontSize: "32px",
  fontWeight: "900",
  letterSpacing: "0.1em",
  margin: "0",
  textTransform: "uppercase" as const,
};

const h2 = {
  fontSize: "24px",
  fontWeight: "800",
  lineHeight: "1.3",
  margin: "40px 0 20px",
};

const text = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "rgba(255, 255, 255, 0.7)",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#ffffff",
  borderRadius: "9999px",
  color: "#000000",
  fontSize: "14px",
  fontWeight: "700",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 32px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};

const hr = {
  borderColor: "rgba(255, 255, 255, 0.1)",
  margin: "40px 0",
};

const footer = {
  color: "rgba(255, 255, 255, 0.4)",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
};
