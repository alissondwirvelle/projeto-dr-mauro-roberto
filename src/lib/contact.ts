export const whatsappNumber = "5581991481410";
export const whatsappDisplay = "(81) 99148-1410";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá, Mauro! Gostaria de agendar uma avaliação fisioterapêutica.")}`;
export const clinicPostalAddress = {
  streetAddress: "Rua E, nº 40 — Vila da Cohab",
  addressLocality: "Bonito",
  addressRegion: "PE",
  addressCountry: "BR",
} as const;
export const clinicAddress = `${clinicPostalAddress.streetAddress}, ${clinicPostalAddress.addressLocality} – ${clinicPostalAddress.addressRegion}.`;
export const clinicMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinicAddress)}`;
