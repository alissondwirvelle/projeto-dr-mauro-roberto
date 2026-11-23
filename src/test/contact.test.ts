import { describe, expect, it } from "vitest";
import { whatsappUrl } from "@/lib/contact";

describe("Official WhatsApp contact", () => {
  it("addresses the supplied 81991481410 number with the Brazilian country code", () => {
    const url = new URL(whatsappUrl);
    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/5581991481410");
  });
});
