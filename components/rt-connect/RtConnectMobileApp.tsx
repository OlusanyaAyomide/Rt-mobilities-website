"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function RtConnectMobileApp() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div
          ref={ref}
          className={cn(
            "bg-primary rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl overflow-hidden relative transition-all duration-1000 ease-out transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          )}
        >
          <div className="absolute -top-1 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-white/30 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
            {/* Left: Content */}
            <div className="w-full lg:w-[65%] text-center lg:text-left space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  Manage everything <br />
                  from your phone
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
                  Track your earnings, monitor your fleet, and reinvest your returns anywhere in the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 pt-2">
                <button className="transition-transform hover:scale-105 active:scale-95 bg-black rounded-lg border border-white/10">
                  <Image src="/apple.svg" alt="Download on the App Store" width={140} height={42} className="h-[42px] w-auto" />
                </button>
                <button className="transition-transform hover:scale-105 active:scale-95 bg-black rounded-lg border border-white/10">
                  <Image src="/playstore.svg" alt="Get it on Google Play" width={140} height={42} className="h-[42px] w-auto" />
                </button>
              </div>
            </div>

            {/* Right: Phone Image */}
            <div className="w-full lg:w-[35%] flex justify-center lg:justify-end order-1 lg:order-2 relative">
              <div className="relative w-[220px] scale-[90%] hover:scale-[95%] transition-all duration-500 ease-in-out md:w-[240px] aspect-9/19 bg-white/10 backdrop-blur-md rounded-[2.5rem] border-[6px] border-white/20 shadow-2xl p-1.5">
                {/* Inner Frame */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden lg:mr-6">
                  <Image
                    src="/mobile.png"
                    alt="RT Connect Mobile App"
                    fill
                    className="object-cover"
                  />
                  {/* Screen Glare */}
                  <div className="absolute top-0 right-0 w-full h-full bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
