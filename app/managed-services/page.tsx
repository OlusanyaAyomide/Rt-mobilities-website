import ManagedServicesHero from "@/components/managed-services/ManagedServicesHero";
import ManagedComparison from "@/components/managed-services/ManagedComparison";
import RemittanceStructure from "@/components/managed-services/RemittanceStructure";
import InstitutionalCommitment from "@/components/managed-services/InstitutionalCommitment";
import OnboardingJourney from "@/components/managed-services/OnboardingJourney";
import ManagedCTA from "@/components/managed-services/ManagedCTA";

export default function ManagedServicesPage() {
  return (
    <>
      <ManagedServicesHero />
      <ManagedComparison />
      <RemittanceStructure />
      <InstitutionalCommitment />
      <OnboardingJourney />
      <ManagedCTA />
    </>
  );
}
