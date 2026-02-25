"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-8 text-center">
        <p className="font-heading text-xl text-charcoal">Takk for meldingen!</p>
        <p className="mt-2 text-sm text-warm-gray">
          Vi svarer deg så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal">
          Navn *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 block w-full rounded-lg border border-ash/40 bg-white px-4 py-3 text-charcoal placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-ember/20 focus:outline-none"
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal">
          E-post *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full rounded-lg border border-ash/40 bg-white px-4 py-3 text-charcoal placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-ember/20 focus:outline-none"
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-charcoal">
          Selskap
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="mt-1 block w-full rounded-lg border border-ash/40 bg-white px-4 py-3 text-charcoal placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-ember/20 focus:outline-none"
          placeholder="Ditt selskap (valgfritt)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal">
          Melding *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 block w-full rounded-lg border border-ash/40 bg-white px-4 py-3 text-charcoal placeholder:text-ash focus:border-ember focus:ring-2 focus:ring-ember/20 focus:outline-none resize-none"
          placeholder="Fortell oss litt om hva dere trenger hjelp med..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">
          Noe gikk galt. Prøv igjen eller send e-post direkte til post@gnist.as.
        </p>
      )}

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sender..." : "Send melding"}
      </Button>
    </form>
  );
}
