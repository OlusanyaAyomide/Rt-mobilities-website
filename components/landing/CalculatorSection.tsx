"use client";

import { useState, useMemo, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calculator, Calendar, Wallet } from "lucide-react";

interface MobilityType {
  id: string;
  name: string;
  baseRate: number; // Percentage
}

const MOBILITY_TYPES: MobilityType[] = [
  { id: "tricycle", name: "Tricycle (Keke)", baseRate: 18 },
  { id: "car", name: "Car", baseRate: 22 },
  { id: "bus", name: "Bus", baseRate: 25 },
];

interface CalculatorSectionProps {
  embedded?: boolean;
}

export default function CalculatorSection({ embedded = false }: CalculatorSectionProps) {
  const [selectedType, setSelectedType] = useState<string>("car");
  const [duration, setDuration] = useState<number>(12); // Months
  const [amount, setAmount] = useState<string>("100000");
  const [bubbles, setBubbles] = useState<Array<{
    id: number;
    size: number;
    left: number;
    top: number;
    color: string;
    delay: number;
    duration: number;
  }>>([]);

  // Generate Bubbles on mount
  useEffect(() => {
    if (embedded) return;

    const colors = [
      "bg-amber-400", "bg-cyan-400", "bg-emerald-400",
      "bg-primary", "bg-purple-400", "bg-pink-400", "bg-blue-400"
    ];

    // Create 30 bubbles with varying properties
    const newBubbles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 20) + 10, // 10px to 50px
      left: Math.floor(Math.random() * 100), // 0% to 100%
      top: Math.floor(Math.random() * 100), // 0% to 100%
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10, // 0s to 10s delay
      duration: Math.floor(Math.random() * 15) + 20, // 20s to 35s duration (slower)
    }));

    setBubbles(newBubbles);
  }, [embedded]);

  /* Safe Parsing for Amount */
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (val === "") {
      setAmount("0");
    } else {
      setAmount(parseInt(val).toString());
    }
  };

  const currentType = MOBILITY_TYPES.find((t) => t.id === selectedType) || MOBILITY_TYPES[1];

  const { totalRate, dailyReturn, totalReturn, yearlyReturn } = useMemo(() => {
    const principal = parseFloat(amount.replace(/,/g, "")) || 0;

    // Bonus: +1% for every 6 months
    const bonusRate = Math.floor(duration / 6);
    const calculatedRate = currentType.baseRate + bonusRate;

    // Yearly Return = Amount * Total Rate
    const yearly = principal * (calculatedRate / 100);

    // Daily Return = Yearly / 365
    const daily = yearly / 365;

    // Total Return over the duration = Daily * Days (approx 30 days/month)
    const days = duration * 30;
    const total = daily * days;

    return {
      totalRate: calculatedRate,
      dailyReturn: daily,
      yearlyReturn: yearly,
      totalReturn: total
    };
  }, [amount, duration, currentType]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const Container = embedded ? "div" : "section";

  return (
    <Container className={cn(
      "relative overflow-hidden",
      embedded ? "py-0 bg-transparent" : "py-24 bg-primary-deep text-white"
    )}>
      {/* Visible Moving Circles - Only show if not embedded */}
      {!embedded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className={cn(
                "absolute rounded-full blur-xl animate-float opacity-50",
                bubble.color
              )}
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container relative z-10 mx-auto md:px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-white/80 tracking-wider uppercase mb-3">
            ROI Calculator
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Estimate Your Potential Returns
          </h3>
          <p className="text-white/70 text-lg">
            See how your participation can grow over time with our asset-backed model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Inputs - Glassy */}
          <div className="h-full flex flex-col justify-center space-y-8 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl relative overflow-hidden group transition-all duration-300">
            {/* Bottom-to-Top Fill Hover Effect */}
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/5 rounded-full blur-2xl scale-0 group-hover:scale-[10] transition-transform duration-700 ease-in-out pointer-events-none z-0" />

            {/* Investment Amount */}
            <div className="space-y-4 relative z-10">
              <label className="text-sm font-medium text-white/90 flex items-center gap-2">
                <Wallet className="w-4 h-4" />
                Investment Amount (₦)
              </label>
              <Input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                className="bg-black/20 border-white/20 text-white placeholder:text-white/40 h-14 text-lg focus-visible:ring-offset-0 focus-visible:ring-white/30"
              />
            </div>

            {/* Mobility Type Select */}
            <div className="space-y-4 relative z-10">
              <label className="text-sm font-medium text-white/90 flex items-center gap-2">
                <Calculator className="w-4 h-4" />
                Mobility Asset Type
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="bg-black/20 border-white/20 text-white h-14 text-lg focus:ring-offset-0 focus:ring-white/30">
                  <SelectValue placeholder="Select asset type" />
                </SelectTrigger>
                <SelectContent className="bg-primary-deep/95 backdrop-blur-xl border-white/20 text-white">
                  {MOBILITY_TYPES.map((type) => (
                    <SelectItem key={type.id} value={type.id} className="focus:bg-white/20 focus:text-white cursor-pointer">
                      {type.name} - {type.baseRate}% Base Rate
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Duration Slider */}
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-white/90 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Duration
                </label>
                <span className="text-xl font-bold text-white bg-white/10 px-4 py-1 rounded-lg border border-white/10">
                  {duration} Months
                </span>
              </div>
              <Slider
                value={[duration]}
                onValueChange={(vals) => setDuration(vals[0])}
                max={36}
                step={1}
                className="py-4"
              />
              <div className="flex justify-between text-xs text-white/50 px-1">
                <span>0 Months</span>
                <span>1.5 Years</span>
                <span>3 Years</span>
              </div>
              <p className="text-xs text-white/60 italic border-t border-white/10 pt-4 mt-2">
                * Bonus: +1% interest added for every 6 months duration.
              </p>
            </div>
          </div>

          {/* Right Column: Breakdown - Custom Div Glassy */}
          <div className="relative h-full flex flex-col group/right">
            {/* Floating Badge - Removed Pulsing */}
            <div className="absolute -top-4 -right-0 lg:-top-6 lg:-right-6 bg-white text-primary-deep font-bold px-6 py-2 rounded-full shadow-lg transform rotate-3 z-20 border-4 border-primary/20">
              {totalRate}% Total APY
            </div>

            <div className="h-full flex flex-col bg-white/10 backdrop-blur-2xl text-white p-8 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden group transition-all duration-300">
              {/* Bottom-to-Top Fill Hover Effect */}
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-2xl scale-0 group-hover:scale-[10] transition-transform duration-700 ease-in-out pointer-events-none z-0" />

              <div className="space-y-8 relative z-10 my-auto">
                <div>
                  <h4 className="text-white/70 font-medium mb-1 uppercase tracking-widest text-xs">Estimated Daily Return</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white tracking-tight">
                      {formatCurrency(dailyReturn)}
                    </span>
                    <span className="text-sm text-white/60">/ day</span>
                  </div>
                </div>

                <div className="p-6 bg-black/20 rounded-2xl space-y-4 border border-white/5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Base Rate ({currentType.name})</span>
                    <span className="font-bold text-white">{currentType.baseRate}%</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/70">Duration Bonus</span>
                    <span className="font-bold text-emerald-400">+{Math.floor(duration / 6)}%</span>
                  </div>
                  <div className="h-px bg-white/10 my-2" />
                  <div className="flex justify-between items-center text-base">
                    <span className="font-medium text-white">Total Interest Rate</span>
                    <span className="font-bold text-white text-xl">{totalRate}%</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-black/20 border border-white/5">
                    <p className="text-xs text-white/60 mb-2 uppercase tracking-wide">Yearly Estimate</p>
                    <p className="text-xl font-bold text-white">{formatCurrency(yearlyReturn)}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-black/20 border border-white/5">
                    <p className="text-xs text-white/60 mb-2 uppercase tracking-wide">Total Period Return</p>
                    <p className="text-xl font-bold text-white">{formatCurrency(totalReturn)}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-center text-white/40 leading-relaxed">
                    *Estimates are based on historical performance. Actual returns may vary based on operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
