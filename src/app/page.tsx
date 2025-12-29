"use client";

import FloatingLines from '../components/FloatingLines';
import EmailSubscriptionForm from '../components/EmailSubscriptionForm';

// Feature data
const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    title: "Éditeur puissant",
    description: "Un éditeur de texte pensé pour l'écriture de paroles, avec mise en forme et navigation fluide.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    title: "Dictionnaire des rimes",
    description: "Trouvez des rimes pour finir votre phrase. Rimes riches, suffisantes, assonances... tout à portée de main.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Métronome",
    description: "Gardez le tempo pendant l'écriture. Réglez le BPM selon vos besoins.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
    ),
    title: "Lecteur audio",
    description: "Importez vos instrumentales et écoutez-les en boucle pendant que vous écrivez. Simple et efficace.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Dictaphone",
    description: "Enregistrez vos toplines à la volée. Ne perdez plus jamais cette mélodie qui vous trotte dans la tête.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Intelligence avancée",
    description: "Des suggestions intelligentes quand vous le souhaitez. Désactivez-les en un seul clic si vous préférez écrire seul.",
  },
];


export default function Home() {

  return (
    <main className="min-h-screen bg-background">

      {/* FloatingLines background */}
      <div className="w-full h-full absolute top-0 z-10 hue-rotate-262">
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={1}
          bendRadius={2.0}
          bendStrength={-0.15}
          interactive={true}
          parallax={true}
          middleWavePosition={{x:0, y:-0.4, rotate:0.25}}
          mouseDamping={0.1}
          maxFPS={60}
          parallaxStrength={0.05}
        />
        {/* Subtle dark overlay to improve readability of text over the lines */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>


      {/* Background effects */}
      <div className="fixed inset-0 bg-radial-fade opacity-50 pointer-events-none z-[15]" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-[15]" />
        
        <div className="z-20 mx-auto text-center w-full">

          {/* Logo / Title */}
          <h1 className="text-7xl sm:text-8xl lg:text-[10rem] mb-6 animate-fade-in-up opacity-0 animate-delay-100 drop-shadow-[0_0_50px_rgba(16,185,129,0.4)] font-title">
            <span className="gradient-text-accent">Koda</span>
          </h1>

          {/* Tagline */}
          <div className="space-y-2 mb-12 animate-fade-in-up opacity-0 animate-delay-200">
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground font-semibold tracking-tight">
              Votre logiciel d'écriture de paroles.
            </p>
          </div>

          {/* Email Form with Glassmorphism */}
          <EmailSubscriptionForm />

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Un outil <span className="drop-shadow-accent-light drop-shadow-2xl text-accent-light">unique</span>.
          </h2>
          <p className="text-text-muted text-center text-lg mb-16 max-w-2xl mx-auto">
            Arrêtez de jongler entre plusieurs applications. Concentrez-vous sur vos idées.
          </p>

          {/* Before - Scattered tools */}
          <div className="relative mb-16">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
              {[
                "Notes",
                "Dictionnaire des rimes",
                "Métronome",
                "Lecteur audio",
                "Youtube",
                "Dictaphone",
              ].map((tool, index) => (
                <div
                  key={tool}
                  className="px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-text-muted text-sm sm:text-base opacity-40 hover:opacity-100 transition-opacity duration-500"
                  style={{
                    transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (2 + index)}deg) translateY(${Math.sin(index) * 10}px)`,
                  }}
                >
                  {tool}
                </div>
              ))}
            </div>

            {/* Arrow down */}
            <div className="flex justify-center my-16">
              <div className="w-px h-32 bg-linear-to-b from-white/10 via-accent to-transparent relative via-85%">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              </div>
            </div>
          </div>

          {/* After - Koda unified */}
          <div className="text-center">
            <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-accent/50 rounded-2xl blur-xl opacity-50 transition duration-500 group-hover:opacity-100"></div>
              <div className="group-hover:-translate-y-1 transition-all duration-500 relative px-16 py-10 bg-surface border-2 border-accent/40 group-hover:border-accent/75 rounded-2xl">
                <span className="text-5xl sm:text-6xl font-bold gradient-text-accent tracking-tighter font-unbounded">Koda</span>
              </div>
            </div>
            <p className="text-2xl text-foreground mt-10 font-semibold tracking-tight">
              Tout va devenir <span className="italic">plus simple</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Professionnel et léger
            </h2>
            <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto font-light">
              Koda intègre tous les outils dont vous avez besoin, et vous laisse choisir ceux que vous souhaitez utiliser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl card-hover group relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
                
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-text-muted leading-relaxed text-lg font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 sm:p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-accent/10 rounded-full blur-[400px] pointer-events-none" />
            <div className="absolute -right-60 -top-24 w-100 h-100 bg-accent/5 rounded-full blur-[1000px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              {/* Icon */}
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-[2rem] bg-linear-to-br from-accent/20 to-accent/5 flex items-center justify-center shadow-2xl border border-white/10">
                  <svg className="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
                  Vos données vous appartiennent.
                </h2>
                <div className="space-y-6 text-text-muted">
                  <p className="text-xl leading-relaxed font-light">
                    <span className="text-foreground font-semibold">Local-first.</span> Koda fonctionne parfaitement hors ligne.
                  </p>
                  <p className="text-xl leading-relaxed font-light">
                    <span className="text-foreground font-semibold">Sync automatique.</span> Quand vous êtes connecté, synchronisez vos projets sur tous vos appareils de manière transparente.
                  </p>
                  <p className="text-xl leading-relaxed font-light">
                    <span className="text-foreground font-semibold">IA désactivables.</span> Les fonctionnalités d'IA sont entièrement optionnelles. Vous gardez le contrôle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 sm:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-200 bg-accent/5 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tighter">
            Prêt à essayer ?
          </h2>
          <p className="text-text-muted text-xl sm:text-2xl mb-12 font-light max-w-2xl mx-auto">
            Soyez parmi les premiers à essayer Koda. Inscrivez-vous pour être notifié dès la sortie.
          </p>

          {/* Email Form */}
          <EmailSubscriptionForm className="max-w-xl mx-auto" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-text-muted text-xs">
            © {new Date().getFullYear()} Koda. Tous droits réservés.
          </div>
          <a 
            href="mailto:contact@get-koda.com" 
            className="text-text-muted text-xs hover:text-accent transition-colors"
          >
            contact@get-koda.com
          </a>
        </div>
      </footer>
    </main>
  );
}
