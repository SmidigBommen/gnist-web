"use client";

import { useState } from "react";
import { V2Button } from "@/components/v2/ui/v2-button";

export function V2ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const message = data.get("message");

    const subject = encodeURIComponent(`Henvendelse fra ${name}${company ? ` (${company})` : ""}`);
    const body = encodeURIComponent(`Fra: ${name}\nE-post: ${email}\nSelskap: ${company || "–"}\n\n${message}`);
    window.location.href = `mailto:post@gnist.as?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="border border-v2-success/30 bg-v2-success/5 p-8 text-center">
        <p className="font-body text-xl font-semibold text-v2-heading">Takk for meldingen!</p>
        <p className="mt-2 text-sm text-v2-muted">
          Vi svarer deg så snart vi kan.
        </p>
      </div>
    );
  }

  const inputClasses =
    "mt-1 block w-full border border-v2-border bg-v2-surface px-4 py-3 text-v2-text placeholder:text-v2-muted focus:border-v2-cyan focus:ring-2 focus:ring-v2-cyan/20 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="v2-name" className="block text-sm font-medium text-v2-text">
          Navn *
        </label>
        <input
          type="text"
          id="v2-name"
          name="name"
          required
          className={inputClasses}
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label htmlFor="v2-email" className="block text-sm font-medium text-v2-text">
          E-post *
        </label>
        <input
          type="email"
          id="v2-email"
          name="email"
          required
          className={inputClasses}
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label htmlFor="v2-company" className="block text-sm font-medium text-v2-text">
          Selskap
        </label>
        <input
          type="text"
          id="v2-company"
          name="company"
          className={inputClasses}
          placeholder="Ditt selskap (valgfritt)"
        />
      </div>

      <div>
        <label htmlFor="v2-message" className="block text-sm font-medium text-v2-text">
          Melding *
        </label>
        <textarea
          id="v2-message"
          name="message"
          required
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Fortell oss litt om hva dere trenger hjelp med..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">
          Noe gikk galt. Prøv igjen eller send e-post direkte til post@gnist.as.
        </p>
      )}

      <V2Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender..." : "Send melding"}
      </V2Button>
    </form>
  );
}
