"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { V3Button } from "@/components/v3/ui/v3-button";

const inputClasses = cn(
  "mt-2 block w-full border-0 border-b border-v3-stone bg-transparent",
  "px-0 py-3 text-base text-v3-heading",
  "placeholder:text-v3-stone",
  "focus:border-v3-heading focus:outline-none focus:ring-0",
  "transition-colors duration-200"
);

const labelClasses =
  "block text-xs font-medium uppercase tracking-widest text-v3-drift";

export function V3ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const message = data.get("message");

    const subject = encodeURIComponent(
      `Henvendelse fra ${name}${company ? ` (${company})` : ""}`
    );
    const body = encodeURIComponent(
      `Fra: ${name}\nE-post: ${email}\nSelskap: ${company || "\u2013"}\n\n${message}`
    );
    window.location.href = `mailto:post@gnist.as?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div className="border border-v3-moss bg-v3-moss-light p-10 text-center">
        <p className="v3-serif text-2xl text-v3-heading">Takk!</p>
        <p className="mt-2 text-sm text-v3-drift">
          Vi svarer deg så snart vi kan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <div>
        <label htmlFor="v3-name" className={labelClasses}>
          Navn *
        </label>
        <input
          type="text"
          id="v3-name"
          name="name"
          required
          className={inputClasses}
          placeholder="Ditt fulle navn"
        />
      </div>

      <div>
        <label htmlFor="v3-email" className={labelClasses}>
          E-post *
        </label>
        <input
          type="email"
          id="v3-email"
          name="email"
          required
          className={inputClasses}
          placeholder="din@epost.no"
        />
      </div>

      <div>
        <label htmlFor="v3-company" className={labelClasses}>
          Selskap
        </label>
        <input
          type="text"
          id="v3-company"
          name="company"
          className={inputClasses}
          placeholder="Valgfritt"
        />
      </div>

      <div>
        <label htmlFor="v3-message" className={labelClasses}>
          Melding *
        </label>
        <textarea
          id="v3-message"
          name="message"
          required
          rows={4}
          className={cn(inputClasses, "resize-none")}
          placeholder="Fortell oss litt om hva dere trenger..."
        />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-v3-clay">
          Noe gikk galt. Send e-post direkte til post@gnist.as.
        </p>
      )}

      <V3Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sender..." : "Send melding"}
      </V3Button>
    </form>
  );
}
