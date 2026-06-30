import { VeloraSite } from "@/components/velora-site";
import { getDictionary } from "@/lib/i18n";

export default function EnglishPage() {
  return <VeloraSite locale="en" content={getDictionary("en")} />;
}
