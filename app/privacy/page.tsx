import PrivacyHero from "@/components/privacy/PrivacyHero";
import PrivacyContent from "@/components/privacy/PrivacyContent";
import PrivacyCTA from "@/components/privacy/PrivacyCTA";

export const metadata = {
  title: "Privacy Policy | RT Mobility",
  description:
    "Learn how RT Mobility collects, uses, and protects your personal information with the highest security standards.",
};

export default function PrivacyPage() {
  return (
    <>
      <PrivacyHero />
      <PrivacyContent />
      <PrivacyCTA />
    </>
  );
}
