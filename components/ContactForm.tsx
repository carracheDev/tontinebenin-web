"use client";

import { useState } from "react";

// Endpoint Formspree du projet (reçoit les messages par email).
const FORM_ENDPOINT = "https://formspree.io/f/xeewlrya";

type State = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const j = await res.json().catch(() => null);
        setError(j?.errors?.[0]?.message || "Une erreur est survenue. Réessayez.");
        setState("error");
      }
    } catch {
      setError("Connexion impossible. Vérifiez votre réseau et réessayez.");
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-primary-light border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✅</div>
        <h3 className="text-xl font-bold text-primary-dark mb-2">Message envoyé !</h3>
        <p className="text-soft">Merci, nous vous répondrons très rapidement.</p>
        <button
          onClick={() => setState("idle")}
          className="btn btn-ghost mt-5"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-[15px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot anti-spam */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Nom complet *</label>
          <input name="nom" required placeholder="Votre nom" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Email *</label>
          <input type="email" name="email" required placeholder="vous@exemple.com" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1.5">Organisation / Téléphone</label>
          <input name="organisation" placeholder="Optionnel" className={inputCls} />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1.5">Sujet</label>
          <select name="sujet" defaultValue="" required className={`${inputCls} bg-white`}>
            <option value="" disabled>Choisir…</option>
            <option>Demande de démonstration</option>
            <option>Investissement / financement</option>
            <option>Partenariat</option>
            <option>Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1.5">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Parlez-nous de votre demande…"
          className={`${inputCls} resize-none`}
        />
      </div>

      {state === "error" && (
        <p className="text-red-600 text-sm font-medium">{error}</p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="btn btn-primary w-full justify-center text-[16px] py-3.5 disabled:opacity-60"
      >
        {state === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>

      <p className="text-soft text-xs text-center">
        Vos informations restent confidentielles et ne sont utilisées que pour vous répondre.
      </p>
    </form>
  );
}
