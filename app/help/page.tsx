"use client";

import { useState } from "react";
import HelpHero from "@/components/help/HelpHero";
import HelpTopics from "@/components/help/HelpTopics";
import HelpFAQ from "@/components/help/HelpFAQ";

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState("");

  return (
    <>
      <HelpHero onSelectFaq={setOpenFaq} />
      <HelpTopics />
      <HelpFAQ openValue={openFaq} onValueChange={setOpenFaq} />
    </>
  );
}
