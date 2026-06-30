import { VeloraSite } from "@/components/velora-site";
import { getDictionary } from "@/lib/i18n";

export default function HomePage() {
  return <VeloraSite locale="fr" content={getDictionary("fr")} />;
}
