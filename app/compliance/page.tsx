import ComplianceHero from "@/components/compliance/ComplianceHero";
import AffiliationSection from "@/components/compliance/AffiliationSection";
import GovernancePillars from "@/components/compliance/GovernancePillars";
import GovernanceDocuments from "@/components/compliance/GovernanceDocuments";

export default function CompliancePage() {
  return (
    <>
      <ComplianceHero />
      <AffiliationSection />
      <GovernancePillars />
      <GovernanceDocuments />
    </>
  );
}
