import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/contact";

interface AppointmentButtonProps {
  label?: string;
  quiet?: boolean;
  headerButton?: boolean;
}

export function AppointmentButton({
  label = "Agendar avaliação",
  quiet = false,
  headerButton = false,
}: AppointmentButtonProps) {
  return (
    <Button
      variant={quiet ? "quiet" : "appointment"}
      asChild
      style={headerButton ? { animationDelay: "980ms" } : undefined}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        {label}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}
