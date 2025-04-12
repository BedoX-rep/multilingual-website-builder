
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "./ui/button";
import { GlobeIcon } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1"
      onClick={toggleLanguage}
      aria-label={`Switch to ${language === "en" ? "French" : "English"}`}
    >
      <GlobeIcon size={16} />
      <span>{language === "en" ? "FR" : "EN"}</span>
    </Button>
  );
};

export default LanguageSelector;
