import { VeloraSite } from "@/components/velora-site";
import { getDictionary } from "@/lib/i18n";

export default function SpanishPage() {
  return <VeloraSite locale="es" content={getDictionary("es")} />;
}
