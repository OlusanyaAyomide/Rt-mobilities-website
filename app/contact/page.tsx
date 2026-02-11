import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />

      <section className="relative py-20 -mt-16 z-20">
        <div className="absolute inset-0 z-0 opacity-[0.5] bg-pattern-plus" />

        <div className="container relative z-10 mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

