import RtConnectHero from "@/components/rt-connect/RtConnectHero";
import WhatIsRtConnect from "@/components/rt-connect/WhatIsRtConnect";
import RtConnectProcess from "@/components/rt-connect/RtConnectProcess";
import InvestmentOpportunities from "@/components/rt-connect/InvestmentOpportunities";
import RtConnectFeatures from "@/components/rt-connect/RtConnectFeatures";
import RtConnectMobileApp from "@/components/rt-connect/RtConnectMobileApp";

export default function RtConnectPage() {
  return (
    <>
      <RtConnectHero />
      <WhatIsRtConnect />
      <RtConnectProcess />
      <InvestmentOpportunities />
      <RtConnectFeatures />
      <RtConnectMobileApp />
    </>
  );
}
