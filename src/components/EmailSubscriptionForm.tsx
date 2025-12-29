"use client";

import { useState } from "react";

export default function EmailSubscriptionForm({ className = "max-w-full w-2xl mx-auto" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setError("");
    setIsSubmitting(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwMGfnI7gKMk7nF6NiQSeN8rouSQguFb_tyzg8vCnX5Foh9PgCqZ5o6Ouup2qTCZTS5/exec", {
        method: "POST",
        body: JSON.stringify({ 
          action: 'subscribe',
          email 
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setError("");
    } catch (error: any) {
      clearTimeout(timeoutId);
      setEmail("");
      if (error.name === 'AbortError') {
        setError("La requête a expiré. Veuillez réessayer.");
      } else {
        setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <div className={`opacity-0 animate-fade-in-up animate-delay-400 p-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl ${isSubmitted || isSubmitting ? 'cursor-not-allowed' : ''}`}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitted}
            className={`flex-1 px-5 py-4 bg-transparent border-none rounded-xl text-foreground placeholder:text-white/50 text-base focus:ring-0 focus:outline-none ${isSubmitted || isSubmitting ? 'disabled:text-slate-300 cursor-not-allowed' : ''}`}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="px-8 py-4 bg-accent hover:bg-accent-light text-black font-bold rounded-xl disabled:bg-transparent disabled:shadow-none disabled:scale-100 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-95 flex items-center justify-center disabled:text-slate-300"
          >
            {isSubmitted ? "Merci !" : isSubmitting ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Accès anticipé"}
          </button>
        </form>
      </div>

      {isSubmitted && (
        <p className="text-white mt-4 text-center px-5">
          Vous serez notifié dès l'ouverture de l'accès anticipé !
        </p>
      )}

      {error && (
        <p className="text-red-500 mt-4 text-center px-5">
          {error}
        </p>
      )}
    </div>
  );
}