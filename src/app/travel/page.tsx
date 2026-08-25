import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plane, Train, Hotel, Car, MapPin, Info, Navigation, Compass } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { EVENT } from "@/config/event";

export const metadata: Metadata = {
  title: `Travel & Accommodation — ${EVENT.name}`,
  description: `Plan your trip to ${EVENT.fullName} ${EVENT.year} at ${EVENT.venue.name}, ${EVENT.venue.city}. Transport, hotels, and travel tips.`,
};

export default function TravelPage() {
  return (
    <div className="bg-[#0b1329] text-white min-h-screen relative overflow-hidden">
      
      {/* Dynamic Animated Background SVG Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 z-0 overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
          <defs>
            <pattern id="travel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
            </pattern>
            <linearGradient id="redGradientTravel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="blueGradientTravel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.1" />
            </linearGradient>
            
            {/* Subtle glow filter */}
            <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="url(#travel-grid)" />
          
          {/* Animated Flight Path Line 1 */}
          <path 
            d="M-100,100 C400,500 900,-50 1600,300" 
            stroke="url(#blueGradientTravel)" 
            strokeWidth="2.5" 
            strokeDasharray="10 8"
            className="animate-[dash_35s_linear_infinite]"
            filter="url(#svgGlow)"
          />

          {/* Animated Flight Path Line 2 */}
          <path 
            d="M-50,700 C350,300 850,850 1550,200" 
            stroke="url(#redGradientTravel)" 
            strokeWidth="2" 
            strokeDasharray="8 6" 
            className="animate-[dash_28s_linear_infinite_reverse]"
            filter="url(#svgGlow)"
          />
        </svg>
      </div>

      {/* Page Hero */}
      <PageHero
        title="Travel & Accommodation"
        subtitle={`Everything you need to plan your visit to ${EVENT.venue.name}, ${EVENT.venue.city}.`}
        breadcrumbs={[{ label: "Travel & Stay" }]}
        backgroundImage="/images/venue/exhibition-floor.jpg"
      />

      {/* Section 1: Reaching the City */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329]">
        {/* Animated Glow Elements */}
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-red-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4 backdrop-blur-sm shadow-sm transition-all hover:scale-105">
            <Plane className="w-3.5 h-3.5 text-red-400 animate-bounce" />
            Getting There
          </span>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Reaching <span className="text-red-500">{EVENT.venue.city}</span>
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {/* By Air */}
            <div className="bg-[#111c38]/70 hover:bg-[#111c38] rounded-2xl p-8 border border-slate-800 hover:border-red-500/40 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-red-600/10 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125 group-hover:bg-red-600/20" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/20 transition-transform duration-300">
                  <Plane className="w-6 h-6 text-red-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white">By Air</h3>
              </div>
              
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white">Indira Gandhi International Airport (DEL)</strong> is the nearest airport, located approximately 15 km from the venue.
                </p>
                <p>
                  New Delhi is well-connected to major Indian hubs and international destinations with direct domestic flights from Mumbai, Bengaluru, Chennai, Kolkata, and Hyderabad.
                </p>
                <p>
                  From the airport, the venue is directly accessible via the Airport Express Line Metro, pre-paid airport taxis, or app cabs.
                </p>
              </div>
            </div>

            {/* By Rail */}
            <div className="bg-[#111c38]/70 hover:bg-[#111c38] rounded-2xl p-8 border border-slate-800 hover:border-blue-500/40 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-600/10 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125 group-hover:bg-blue-600/20" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600/20 transition-transform duration-300">
                  <Train className="w-6 h-6 text-blue-400 group-hover:-rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white">By Rail</h3>
              </div>
              
              <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-white">New Delhi Railway Station (NDLS)</strong> and <strong className="text-white">Hazrat Nizamuddin (NZM)</strong> are the primary rail hubs connected to all nationwide express lines.
                </p>
                <p>
                  Visitors can easily take the Delhi Metro network or book direct cabs from stations straight to Dwarka.
                </p>
                <p>
                  The high-speed metro system provides quick, traffic-free transfer directly to the venue gates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Local Transport */}
      <section className="relative py-20 bg-[#070d1d] border-y border-slate-800/80">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3 backdrop-blur-sm transition-all hover:scale-105">
            <Navigation className="w-3.5 h-3.5 text-blue-400" />
            Local Transport
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Getting to the Venue
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            {EVENT.venue.name} is situated in {EVENT.venue.area}, {EVENT.venue.city} and accessible via well-connected transit options.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {/* Metro */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group shadow-lg">
              <Train className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Metro Connectivity</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nearest Station: <strong className="text-white">Dwarka Sector 25</strong> on the Airport Express Line. Venue entrance is within short walking distance.
              </p>
            </div>

            {/* Cab */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group shadow-lg">
              <Car className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Taxi / App Cabs</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cab services (Uber, Ola) operate 24/7. Simply enter &ldquo;{EVENT.venue.name}&rdquo; as your target destination.
              </p>
            </div>

            {/* Address */}
            <div className="bg-[#111c38]/60 hover:bg-[#111c38] rounded-2xl p-6 border border-slate-800 hover:border-red-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm group shadow-lg">
              <MapPin className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold text-white mb-2">Venue Address</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {EVENT.venue.fullDisplay}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Accommodation */}
      <section className="relative py-20 lg:py-24 bg-[#0b1329]">
        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full mb-4 backdrop-blur-sm transition-all hover:scale-105">
            <Hotel className="w-3.5 h-3.5 text-red-400" />
            Where to Stay
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accommodation &amp; Hotels
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg max-w-2xl">
            Dwarka and Aerocity offer diverse accommodation ranges, from budget stays to 5-star luxury hotels close to the venue.
          </p>

          <div className="mt-8 bg-[#111c38]/70 border border-slate-800 hover:border-blue-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl shrink-0 mt-1 border border-blue-500/20">
                <Info className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Recommended Hotel List Coming Soon</h3>
                <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
                  We are finalizing special discounted tariff arrangements with partner hotels near {EVENT.venue.name}. Recommended options across budget, business, and premium categories will be updated here shortly.
                </p>  
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action */}
      <section className="relative py-20 bg-[#070d1d] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-red-600/15 to-blue-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />

        <div className="max-w-[var(--max-width)] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Visit?
            </h2>
            <p className="mt-3 text-slate-400 text-base sm:text-lg">
              Register now to get fast-track visitor entry badges for {EVENT.dates.display}.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/visitors/register" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-xl shadow-red-600/20 hover:shadow-red-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Register as Visitor
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#111c38] hover:bg-[#18264b] text-white font-semibold rounded-xl border border-slate-700/80 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}