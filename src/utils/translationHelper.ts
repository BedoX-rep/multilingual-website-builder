
import { useTranslation } from "react-i18next";

// This helper ensures proper usage of the t function
export const useFormattedTranslation = () => {
  const { t, i18n } = useTranslation();
  
  // Return a wrapped version of the t function that handles string params correctly
  const formattedT = (key: string) => {
    // Call t function with the string parameter
    return t(key);
  };
  
  return { formattedT, i18n };
};
