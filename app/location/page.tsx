import type { Metadata } from "next";
import LocationCard from "@/components/location/LocationCard";
import MapSection from "@/components/location/MapSection";

export const metadata: Metadata = {
    title: "Locations & Contact | Bucket Baddie",
    description: "Find the Bucket Baddie food truck or visit our Houston kitchen.",
};

export default function LocationPage() {
    return (
        <div className="min-h-screen bg-neutral-950 pb-24">
            {/* Hero Header */}
            <div className="relative w-full h-80 flex flex-col items-center justify-center text-center px-4 overflow-hidden mb-12 sm:mb-20">
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-neutral-950 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* Animated Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

                <div className="relative z-20 space-y-6 max-w-3xl mx-auto pt-16">
                    <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-bold uppercase tracking-widest backdrop-blur-md shadow-2xl">
                        Where to Find Us
                    </span>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
                        Find Your <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-blue-600">Bucket.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto font-medium">
                        Catch the food truck roaming Houston or pull up to our kitchen. Double-fried, zero missing.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Location Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <LocationCard
                            type="restaurant"
                            name="Bucket Baddie"
                            subtitle="Houston Food Truck"
                            address="10410 S Main St, Houston, TX 77025"
                            phone="+1 (281) 809-5730"
                            hours={[
                                { days: "Sun-Thu", time: "11am - 2am" },
                                { days: "Fri-Sat", time: "11am - 3am" }
                            ]}
                            isOpen={true} // Hardcoded for demo; could be dynamic based on Date()
                            accentColor="pink-500"
                        />

                        {/* <LocationCard
                            type="food-truck"
                            name="Bucket Express"
                            subtitle="Mobile Food Truck"
                            address="9610 Louetta Rd, Spring, TX 77379"
                            phone="+1 (347) 820-4701"
                            hours={[
                                { days: "Sun, Wed, Thu", time: "6pm - 2am" },
                                { days: "Fri-Sat", time: "6pm - 3am" },
                                { days: "Mon-Tue", time: "Closed" }
                            ]}
                            isOpen={false}
                            accentColor="pink-500"
                        /> */}
                    </div>

                    {/* Right Column: Embedded Map */}
                    <div className="lg:col-span-7 h-full">
                        {/* Google Maps Embed using place IDs or coordinates. 
                This query centers roughly around the Houston area with a pin. 
            */}
                        <MapSection mapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110903.01185386008!2d-95.67923307567882!3d29.700870908871337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cde4f738096f%3A0x600b91d300025fa8!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" />

                        {/* Service Areas */}
                        {/* <div className="mt-8 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#6bbdec] mb-6">Houston Coverage Areas</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Sugar Land", "Katy", "Richmond", "Rosenberg", "Stafford", "Missouri City", "Pearland", "Energy Corridor", "Westchase", "Alief"].map(area => (
                                    <span key={area} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-sm text-white/60 font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    );
}
