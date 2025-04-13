
import { useTranslation } from "react-i18next";

// This helper ensures proper usage of the t function
export const useFormattedTranslation = () => {
  const { t, i18n } = useTranslation();
  
  // Return a wrapped version of the t function that handles string params correctly
  const formattedT = (key: string) => {
    // Call t function directly without wrapping the key in an array
    return t(key);
  };
  
  return { formattedT, i18n };
};
