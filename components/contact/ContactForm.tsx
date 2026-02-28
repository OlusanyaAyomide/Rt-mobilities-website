"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-border/50 transition-all duration-1000 ease-out transform h-full flex flex-col",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className="space-y-8 flex-1">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-deep mb-3">Send us a Message</h2>
          <p className="text-muted-foreground text-lg">
            Have a question, partnership inquiry, or need support? Reach out we’ll respond promptly.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2.5">
              <label className="text-sm font-bold text-primary-deep">Full Name</label>
              <Input placeholder="John Doe" className="h-14 rounded-2xl border-border/60 focus-visible:ring-primary/20 bg-slate-50/30" />
            </div>
            <div className="space-y-2.5">
              <label className="text-sm font-bold text-primary-deep">Email Address</label>
              <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl border-border/60 focus-visible:ring-primary/20 bg-slate-50/30" />
            </div>
          </div>

          <div className="space-y-2.5">
            <label className="text-sm font-bold text-primary-deep">Subject</label>
            <Input placeholder="How can we help you?" className="h-14 rounded-2xl border-border/60 focus-visible:ring-primary/20 bg-slate-50/30" />
          </div>

          <div className="space-y-2.5">
            <label className="text-sm font-bold text-primary-deep">Message</label>
            <Textarea
              placeholder="Tell us more about your needs..."
              className="min-h-[180px] rounded-2xl border-border/60 focus-visible:ring-primary/20 bg-slate-50/30 resize-none p-4"
            />
          </div>

          <Button className="w-full md:w-auto px-12 h-14 rounded-full text-base font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 border-none">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
