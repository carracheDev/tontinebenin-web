import Link from "next/link";
import CountUp from "./CountUp";

/* ============================ DONNÉES ============================ */

const features = [
  { ic: "💸", t: "Cotisation gratuite", d: "0% sur les dépôts. Le client ne paie jamais pour épargner." },
  { ic: "📱", t: "Mobile Money", d: "Cotisez et retirez via MTN MoMo et Moov Money, en toute sécurité." },
  { ic: "📟", t: "USSD sans internet", d: "Accessible sur tous les téléphones, même sans smartphone." },
  { ic: "🏆", t: "Score de crédit", d: "Votre régularité d'épargne devient une preuve pour accéder au crédit." },
  { ic: "🤝", t: "Collecteurs terrain", d: "Un accompagnement humain de proximité sur les marchés." },
  { ic: "🔒", t: "Sécurité & reçus", d: "Chaque opération est tracée, notifiée et conservée. Plus de carnet perdu." },
];

const steps = [
  { n: "1", t: "Je cotise", d: "Via l'app, l'USSD ou un collecteur — chaque jour, à mon rythme." },
  { n: "2", t: "Tout est tracé", d: "Mon solde et mon historique sont visibles et sécurisés." },
  { n: "3", t: "Je construis mon score", d: "Ma régularité bâtit un score de crédit fiable." },
  { n: "4", t: "J'accède au crédit", d: "Micro-crédit et passerelle vers les IMF partenaires." },
];

const screens = [
  { src: "/screens/04-dashboard.jpeg", t: "Tableau de bord", d: "Solde, score et services en un coup d'œil." },
  { src: "/screens/03-types-tontine.jpeg", t: "Création guidée", d: "Personnelle, Groupe ou Projet." },
  { src: "/screens/05-groupe.jpeg", t: "Tontine de groupe", d: "Registre numérique infalsifiable." },
  { src: "/screens/02-onboarding.jpeg", t: "Prise en main simple", d: "Pensée pour les non-initiés." },
  { src: "/screens/01-splash.jpeg", t: "Une marque locale", d: "Conçue pour le terrain béninois." },
];

const revenus = [
  { ic: "↗️", t: "Frais de retrait", d: "Barème progressif de 1,5% à 5% selon le montant retiré. La cotisation reste 100% gratuite pour le client.", tag: "60% plateforme · 40% collecteur" },
  { ic: "🏦", t: "Intérêts micro-crédit", d: "Un taux fixe sur les micro-crédits accordés aux épargnants éligibles selon leur score de régularité.", tag: "Taux fixe 10%" },
  { ic: "🤝", t: "Apport d'affaires IMF", d: "Commission sur les clients qualifiés et documentés orientés vers les institutions de microfinance partenaires (PADME…).", tag: "Clients scorés & KYC vérifiés" },
];

const stats = [
  { target: 14.46, suffix: " M", decimals: 2, l: "habitants au Bénin" },
  { target: 89, suffix: "%", decimals: 0, l: "pénétration Mobile Money" },
  { target: 11.1, suffix: " M", decimals: 1, l: "abonnés Mobile Money" },
  { target: 60, prefix: "+", suffix: "%", decimals: 0, l: "des Béninois en tontine" },
];

const segments = [
  { ic: "👩🏾‍🦱", t: "Femmes des marchés", d: "Épargne quotidienne, accès au crédit pour le commerce." },
  { ic: "🌾", t: "Producteurs agricoles", d: "Épargne saisonnière, financement des intrants." },
  { ic: "👥", t: "Coopératives & groupes", d: "Cotisations collectives, registre transparent." },
  { ic: "🔨", t: "Artisans & informels", d: "Crédit sans bulletin de salaire, grâce au score." },
  { ic: "🧑🏾‍🌾", t: "Jeunes ruraux", d: "Démarrage d'activité, autonomie financière." },
  { ic: "🤝", t: "IMF & partenaires", d: "Des clients qualifiés et documentés." },
];

const security = [
  { ic: "🏦", t: "Vos fonds ne sont jamais chez nous", d: "Les paiements transitent par KKiaPay, un agrégateur Mobile Money tiers connecté à MTN MoMo et Moov Money. TontineBénin ne détient aucune espèce." },
  { ic: "🛡️", t: "Sécurité technique « by design »", d: "Chaque opération est tracée et notifiée. Authentification JWT + code PIN + biométrie, et chiffrement des données sensibles." },
  { ic: "📜", t: "Feuille de route réglementaire", d: "Nous connaissons le cadre (ANSSFD, APDP, BCEAO). Les démarches d'agrément et de conformité sont planifiées pour le passage à l'échelle." },
];

const team = [
  { i: "SC", t: "SODJINOU J. Carrache", r: "Fondateur & Directeur Général", d: "Pilotage stratégique, vision produit, architecture & développement." },
  { i: "AH", t: "AÏHODONOU Hippolyte", r: "Cofondateur & CTO / Lead Dév", d: "Développement, architecture technique, qualité du code." },
  { i: "GA", t: "GOUTIN Alphonsine", r: "Cofondatrice & RAF / Relation Client", d: "Gestion, comptabilité, suivi KYC, support client." },
];

const compareRows = [
  { c: "Traçabilité de l'épargne", trad: "Carnet papier", app: "Numérique", us: "Infalsifiable" },
  { c: "Accès sans smartphone (USSD)", trad: "oui", app: "non", us: "oui" },
  { c: "Accompagnement humain terrain", trad: "oui", app: "non", us: "Collecteurs" },
  { c: "Score de crédit automatique", trad: "non", app: "rare", us: "oui" },
  { c: "Tontine de groupe digitalisée", trad: "Papier", app: "Certaines", us: "oui" },
  { c: "Cotisation gratuite (0%)", trad: "Frais", app: "Frais", us: "oui" },
  { c: "Argent sécurisé (zéro cash)", trad: "Espèces", app: "oui", us: "oui" },
];

const odd = [
  { n: "1", t: "Pas de pauvreté", d: "Épargne sécurisée et accès au micro-crédit pour les ménages exclus du système bancaire." },
  { n: "5", t: "Égalité des sexes", d: "Autonomisation financière des femmes des marchés, premières utilisatrices des tontines." },
  { n: "8", t: "Travail décent & croissance", d: "Financement des activités informelles : commerce, artisanat, agriculture." },
  { n: "9", t: "Innovation & infrastructure", d: "Digitalisation de l'économie informelle via Mobile Money et USSD." },
  { n: "10", t: "Inégalités réduites", d: "Inclure les ruraux et les non-bancarisés dans l'économie numérique." },
];

const roadmap = [
  { p: "Prêt au lancement", t: "Produit finalisé", items: ["Application & back-office opérationnels", "Pilote terrain prêt à Parakou", "Premiers collecteurs identifiés"] },
  { p: "Dès le financement · 0–6 mois", t: "Déploiement & traction", items: ["Mise en service des collecteurs", "Acquisition des premiers épargnants", "Lancement des démarches d'agrément (ANSSFD)"] },
  { p: "6–18 mois", t: "Expansion & partenariats", items: ["Expansion au nord du Bénin", "Partenariats IMF / PADME", "Montée en volume d'épargne"] },
];

const funds = [
  { ic: "🛠️", t: "Produit & technologie", d: "Finaliser, sécuriser et faire monter en charge la plateforme." },
  { ic: "📜", t: "Conformité & agrément", d: "Mener les démarches réglementaires (ANSSFD, APDP)." },
  { ic: "🤝", t: "Déploiement terrain", d: "Recruter et former le réseau de collecteurs." },
  { ic: "📣", t: "Acquisition & notoriété", d: "Faire connaître TontineBénin auprès des épargnants." },
];

/* ============================ HELPERS ============================ */

export const SectionHead = ({ title, sub, light = false }: { title: string; sub?: string; light?: boolean }) => (
  <div className="max-w-2xl mx-auto text-center mb-12">
    <h2 className={`text-3xl md:text-4xl font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>{title}</h2>
    {sub && <p className={`mt-3 text-lg ${light ? "text-white/90" : "text-soft"}`}>{sub}</p>}
  </div>
);

export const PageHero = ({ title, sub }: { title: string; sub: string }) => (
  <section className="bg-primary-light border-b border-green-100 py-16">
    <div className="max-w-container mx-auto px-5 text-center">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
      <p className="mt-4 text-lg text-soft max-w-2xl mx-auto">{sub}</p>
    </div>
  </section>
);

const CmpCell = ({ value, highlight = false }: { value: string; highlight?: boolean }) => {
  if (value === "oui") return <span className="text-primary font-bold">✓</span>;
  if (value === "non") return <span className="text-red-500 font-bold">✕</span>;
  return (
    <span className={highlight ? "text-primary-dark font-semibold text-[13px]" : "text-soft text-[13px]"}>{value}</span>
  );
};

/* ============================ SECTIONS ============================ */

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-primary-light to-white pt-16 pb-20">
      <div className="max-w-container mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block bg-[#dcfce7] text-primary-dark font-semibold text-[13px] px-3.5 py-1.5 rounded-full mb-5">
            Fintech • Inclusion financière • Bénin
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
            Digitaliser l&apos;épargne,
            <br />
            <span className="text-primary">inclure tous les Béninois</span>
          </h1>
          <p className="text-lg text-soft my-6 max-w-[540px] mx-auto md:mx-0">
            TontineBénin transforme la tontine en épargne sécurisée et en accès au crédit.
            Mobile Money, USSD et collecteurs terrain : <strong>personne n&apos;est exclu</strong>, même sans smartphone.
          </p>
          <div className="flex flex-wrap gap-3.5 justify-center md:justify-start">
            <Link href="/projet" className="btn btn-primary">Découvrir le projet</Link>
            <Link href="/application" className="btn btn-ghost">Voir l&apos;application →</Link>
          </div>
          <div className="flex gap-9 mt-11 justify-center md:justify-start">
            {[
              { target: 89, suffix: "%", decimals: 0, l: "Mobile Money" },
              { target: 60, suffix: "%", decimals: 0, l: "en tontine" },
              { target: 0.3, suffix: "%", decimals: 1, l: "accès crédit bancaire" },
            ].map((x) => (
              <div key={x.l} className="flex flex-col">
                <strong className="text-[28px] text-primary-dark tabular-nums">
                  <CountUp target={x.target} suffix={x.suffix} decimals={x.decimals} />
                </strong>
                <span className="text-[13px] text-soft">{x.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="order-first md:order-none flex justify-center">
          <div className="w-[280px] bg-[#0f172a] rounded-[40px] p-3 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/screens/04-dashboard.jpeg" alt="Tableau de bord TontineBénin" className="w-full block rounded-[28px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Apercu() {
  const cards = [
    { href: "/projet", ic: "🎯", t: "Le projet", d: "Le problème, notre solution, l'impact social et l'équipe fondatrice." },
    { href: "/application", ic: "📱", t: "L'application", d: "Fonctionnalités, captures réelles de l'app et sécurité." },
    { href: "/investisseurs", ic: "📈", t: "Modèle & investisseurs", d: "Modèle économique, avantage concurrentiel, marché et roadmap." },
  ];
  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Explorer le projet" sub="Tout ce qu'il faut savoir, organisé clairement." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group bg-white border border-gray-200 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{c.ic}</div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{c.t}</h4>
              <p className="text-soft text-[15px]">{c.d}</p>
              <span className="inline-block mt-4 text-primary font-semibold text-sm">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProblemeSolution({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="probleme">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Du problème à la solution" sub="Au Bénin, l'épargne informelle est massive — fragile et exclue du crédit. Voici ce que TontineBénin change concrètement." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
            <h3 className="text-[22px] font-bold text-red-600 mb-4">Aujourd&apos;hui</h3>
            <ul className="space-y-3.5">
              {[
                "Les collecteurs transportent l'argent liquide : vol, perte, agression.",
                "Tontines de groupe sur papier : litiges, retards, contestations.",
                "Carnets perdus ou falsifiés : aucune preuve d'épargne.",
                "90% des Béninois sont dans l'informel et exclus du crédit bancaire.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span className="text-red-600 font-bold shrink-0">✕</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-light border border-green-200 rounded-2xl p-8">
            <h3 className="text-[22px] font-bold text-primary-dark mb-4">Avec TontineBénin</h3>
            <ul className="space-y-3.5">
              {[
                "Épargne 100% tracée via Mobile Money (MTN / Moov).",
                "Registre numérique infalsifiable pour les groupes.",
                "Historique d'épargne → score de crédit automatique.",
                "Accès USSD + collecteurs pour ceux sans smartphone.",
              ].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommentCaMarche({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="comment">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Comment ça marche" sub="De l'épargne quotidienne jusqu'à l'accès au crédit, en 4 étapes." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="text-center px-2.5">
              <span className="grid place-items-center w-[52px] h-[52px] mx-auto mb-4 rounded-full bg-primary text-white font-bold text-xl">{s.n}</span>
              <h4 className="text-[17px] font-semibold mb-1.5">{s.t}</h4>
              <p className="text-soft text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppGallery({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="app">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="L'application, en vrai" sub="Pas une maquette : des captures réelles de l'app déjà fonctionnelle." />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-7 justify-items-center">
          {screens.map((s) => (
            <figure key={s.src} className="max-w-[210px] text-center">
              <div className="w-full bg-[#0f172a] rounded-[30px] p-2 shadow-soft">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.t} loading="lazy" className="w-full block rounded-[22px]" />
              </div>
              <figcaption className="mt-4">
                <b className="block text-[15px]">{s.t}</b>
                <span className="block text-soft text-[13px] mt-1">{s.d}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Fonctionnalites({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="fonctionnalites">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Tout ce qu'il faut pour épargner en confiance" sub="Une plateforme hybride pensée pour le terrain béninois." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.t} className="bg-white border border-gray-200 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{f.ic}</div>
              <h4 className="text-lg font-semibold mb-2">{f.t}</h4>
              <p className="text-soft text-[15px]">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ModeleEco({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="modele-eco">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Comment le projet gagne de l'argent" sub="Un modèle simple et aligné : le client épargne gratuitement, la plateforme se rémunère sur l'usage." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenus.map((r) => (
            <div key={r.t} className="bg-white border border-gray-200 rounded-2xl p-7 flex flex-col gap-2.5 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-1.5">{r.ic}</div>
              <h4 className="text-lg font-semibold">{r.t}</h4>
              <p className="text-soft text-[15px] flex-1">{r.d}</p>
              <span className="self-start bg-primary-light text-primary-dark font-semibold text-[13px] px-3 py-1.5 rounded-full border border-green-200">{r.tag}</span>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto mt-10 bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 text-center text-[15px]">
          💡 La <strong>cotisation est 100% gratuite</strong> pour l&apos;épargnant : nous ne gagnons que lorsqu&apos;il
          retire, emprunte ou est orienté vers un partenaire — jamais sur son épargne.
        </p>
      </div>
    </section>
  );
}

export function Avantage({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="avantage">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Pourquoi TontineBénin gagne" sub="Notre force : réunir au même endroit traçabilité numérique, accès sans smartphone, collecteurs terrain et score de crédit — pour le secteur informel béninois." />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 bg-white rounded-2xl overflow-hidden shadow-card">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left text-sm font-semibold text-soft px-5 py-4">Critère</th>
                <th className="text-center text-sm font-semibold text-soft px-4 py-4">Collecteur traditionnel</th>
                <th className="text-center text-sm font-semibold text-soft px-4 py-4">Apps fintech classiques</th>
                <th className="text-center text-sm font-bold text-primary-dark px-4 py-4 bg-primary-light">TontineBénin</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r) => (
                <tr key={r.c}>
                  <td className="text-[14px] font-medium px-5 py-3.5 border-t border-gray-100">{r.c}</td>
                  <td className="text-center px-4 py-3.5 border-t border-gray-100"><CmpCell value={r.trad} /></td>
                  <td className="text-center px-4 py-3.5 border-t border-gray-100"><CmpCell value={r.app} /></td>
                  <td className="text-center px-4 py-3.5 border-t border-gray-100 bg-primary-light/60"><CmpCell value={r.us} highlight /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function MarcheStats() {
  return (
    <section className="py-[70px] bg-gradient-to-br from-primary-dark to-primary text-white">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Un marché immense, prêt à se digitaliser" light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <strong className="block text-[40px] font-extrabold tabular-nums">
                <CountUp target={s.target} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
              </strong>
              <span className="opacity-90 text-[15px]">{s.l}</span>
            </div>
          ))}
        </div>
        <p className="text-center opacity-80 text-[13px] mt-8">Sources : Banque mondiale, ARCEP Bénin, BCEAO, INStaD.</p>
      </div>
    </section>
  );
}

export function PourQui({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="pourqui">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Pour qui ?" sub="Les épargnants du réel, souvent oubliés du système bancaire." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((s) => (
            <div key={s.t} className="bg-white border border-gray-200 rounded-2xl p-6">
              <span className="text-3xl">{s.ic}</span>
              <b className="block mt-2.5 mb-1.5 text-[17px]">{s.t}</b>
              <p className="text-soft text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImpactODD({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="impact">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Un projet à impact" sub="Au-delà de la rentabilité : digitaliser l'épargne, c'est inclure les Béninois oubliés du système financier." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {odd.map((o) => (
            <div key={o.n} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-4 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-primary text-white font-extrabold text-lg">{o.n}</div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-wide text-primary mb-0.5">ODD {o.n}</span>
                <h4 className="text-[15px] font-semibold leading-tight mb-1">{o.t}</h4>
                <p className="text-soft text-sm">{o.d}</p>
              </div>
            </div>
          ))}
          <div className="bg-primary-dark text-white rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-lg font-semibold leading-snug">« Chaque épargne tracée est un pas vers l&apos;autonomie financière. »</p>
            <span className="text-white/70 text-sm mt-2">Notre mission</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Securite({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="securite">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Sécurité & conformité" sub="Une approche honnête : ce qui est déjà en place, et ce qui est sur notre feuille de route." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {security.map((s) => (
            <div key={s.t} className="bg-white border border-gray-200 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-soft">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{s.ic}</div>
              <h4 className="text-lg font-semibold mb-2">{s.t}</h4>
              <p className="text-soft text-[15px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Roadmap({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="roadmap">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Notre feuille de route" sub="Le produit est déjà prêt — avec un financement, nous déployons immédiatement." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmap.map((r, i) => (
            <div key={r.p} className="relative bg-white border border-gray-200 rounded-2xl p-7">
              <span className="inline-block bg-primary-light text-primary-dark font-bold text-sm px-3 py-1 rounded-full mb-4">{r.p}</span>
              <h4 className="text-lg font-semibold mb-3">{r.t}</h4>
              <ul className="space-y-2">
                {r.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-soft text-sm">
                    <span className="text-primary font-bold shrink-0">→</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              {i < roadmap.length - 1 && <span className="hidden md:block absolute top-1/2 -right-3.5 text-primary text-2xl">›</span>}
            </div>
          ))}
        </div>
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold mb-2">À quoi servirait un investissement</h3>
          <p className="text-center text-soft mb-8 max-w-2xl mx-auto">Quatre priorités pour passer du pilote à l&apos;échelle nationale.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {funds.map((f) => (
              <div key={f.t} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto grid place-items-center text-2xl bg-primary-light rounded-xl mb-3">{f.ic}</div>
                <h4 className="text-[15px] font-semibold mb-1.5">{f.t}</h4>
                <p className="text-soft text-sm">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Equipe({ alt = false }: { alt?: boolean }) {
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="equipe">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="L'équipe fondatrice" sub="Une équipe technique et terrain, formée à l'IUT de Parakou." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.t} className="bg-white border border-gray-200 rounded-2xl p-7 text-center">
              <div className="w-[68px] h-[68px] mx-auto mb-4 rounded-full grid place-items-center bg-primary text-white font-bold text-[22px]">{m.i}</div>
              <h4 className="text-lg font-semibold">{m.t}</h4>
              <span className="block text-primary font-semibold text-sm my-1.5">{m.r}</span>
              <p className="text-soft text-sm">{m.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactCTA() {
  return (
    <section className="py-20 bg-primary-dark text-white text-center" id="contact">
      <div className="max-w-container mx-auto px-5">
        <h2 className="text-3xl md:text-4xl font-bold">Discutons du projet</h2>
        <p className="opacity-90 mt-3 mb-7 text-lg">Vous évaluez, accompagnez ou souhaitez en savoir plus sur TontineBénin ?</p>
        <Link href="/contact" className="btn btn-light text-[17px] px-8 py-4">✉️ Nous contacter</Link>
        <p className="text-[13px] opacity-75 mt-4">Parakou, Bénin — équipe disponible pour une démonstration.</p>
      </div>
    </section>
  );
}

export function ContactInfo() {
  const items = [
    { ic: "✉️", t: "Email", v: "sodjinoucarrache457@gmail.com", href: "mailto:sodjinoucarrache457@gmail.com" },
    { ic: "💬", t: "WhatsApp", v: "+229 0141193597", href: "https://wa.me/2290141193597" },
    { ic: "📍", t: "Localisation", v: "Parakou, Banikanni — Bénin", href: undefined },
  ];
  return (
    <section className="py-20">
      <div className="max-w-container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((c) => (
            <div key={c.t} className="bg-white border border-gray-200 rounded-2xl p-7 text-center">
              <div className="w-[52px] h-[52px] mx-auto grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{c.ic}</div>
              <h4 className="text-lg font-semibold mb-2">{c.t}</h4>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium break-words hover:underline">{c.v}</a>
              ) : (
                <p className="text-soft">{c.v}</p>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-xl mx-auto mt-12 text-center">
          <a href="https://wa.me/2290141193597" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-[17px] px-8 py-4">
            💬 Écrire sur WhatsApp
          </a>
          <p className="text-soft text-sm mt-4">Réponse rapide — équipe disponible pour une démonstration de la plateforme.</p>
        </div>
      </div>
    </section>
  );
}

/* ===== LES 3 TYPES DE TONTINES ===== */
export function TypesTontines({ alt = false }: { alt?: boolean }) {
  const types = [
    { ic: "👤", t: "Tontine Personnelle", d: "Épargne individuelle, à votre rythme.", points: ["Vous fixez votre objectif et votre fréquence de cotisation", "3 politiques de retrait : Flexible, Programmé ou Bloqué", "Idéale pour une réserve ou un projet personnel"] },
    { ic: "👥", t: "Tontine de Groupe", d: "La tontine collective, enfin digitalisée.", points: ["Les membres cotisent ensemble, période après période", "Chacun reçoit la cagnotte à son tour (ordre de tirage)", "Registre numérique infalsifiable — fini les litiges"] },
    { ic: "🎯", t: "Tontine Projet", d: "Épargne bloquée vers un objectif daté.", points: ["Montant et date cible définis à l'avance", "Fonds verrouillés jusqu'à l'échéance", "Parfait pour la rentrée scolaire, un achat, un événement"] },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="types">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Trois façons d'épargner" sub="TontineBénin s'adapte à chaque besoin avec trois types de tontines." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {types.map((t) => (
            <div key={t.t} className="bg-white border border-gray-200 rounded-2xl p-7">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{t.ic}</div>
              <h4 className="text-lg font-semibold mb-1.5">{t.t}</h4>
              <p className="text-soft text-[15px] mb-4">{t.d}</p>
              <ul className="space-y-2.5">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[14px]">
                    <span className="text-primary font-bold shrink-0">✓</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== SCORE DE CRÉDIT ===== */
export function ScoreCredit({ alt = false }: { alt?: boolean }) {
  const criteres = [
    { w: "40%", t: "Régularité d'épargne", d: "Cotiser souvent et sans interruption pèse le plus lourd." },
    { w: "30%", t: "Historique de remboursement", d: "Rembourser ses crédits à temps renforce la confiance." },
    { w: "20%", t: "Ancienneté du compte", d: "Plus on épargne depuis longtemps, mieux c'est." },
    { w: "10%", t: "Objectifs atteints", d: "Tenir ses objectifs d'épargne donne un bonus." },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="score">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Le score de crédit, expliqué" sub="Votre régularité d'épargne construit automatiquement une preuve de fiabilité — sans bulletin de salaire." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {criteres.map((c) => (
            <div key={c.t} className="bg-white border border-gray-200 rounded-2xl p-6 flex gap-4 items-start">
              <div className="shrink-0 grid place-items-center w-14 h-14 rounded-xl bg-primary text-white font-extrabold">{c.w}</div>
              <div>
                <h4 className="font-semibold mb-1">{c.t}</h4>
                <p className="text-soft text-sm">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-primary-dark text-white rounded-2xl p-7 text-center max-w-3xl mx-auto">
          <p className="text-lg font-semibold">Plus le score monte, plus le montant de crédit accessible augmente.</p>
          <p className="text-white/80 text-sm mt-2">Le score est recalculé automatiquement chaque nuit, à partir du comportement réel d'épargne — aucune paperasse.</p>
        </div>
      </div>
    </section>
  );
}

/* ===== CONTEXTE / QU'EST-CE QU'UNE TONTINE ===== */
export function ContexteTontine({ alt = false }: { alt?: boolean }) {
  const points = [
    { ic: "🤝", t: "Une pratique ancestrale", d: "La tontine est un système d'épargne rotative communautaire, ancré depuis des générations en Afrique de l'Ouest." },
    { ic: "📊", t: "Massivement répandue", d: "Plus de 60% des Béninois participent à une tontine — bien plus que la bancarisation classique." },
    { ic: "⚠️", t: "Mais fragile", d: "Carnets papier, argent liquide, confiance verbale : pertes, litiges et aucune preuve d'épargne." },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="contexte">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Qu'est-ce qu'une tontine ?" sub="Comprendre la pratique pour comprendre l'opportunité." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.t} className="bg-white border border-gray-200 rounded-2xl p-7">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{p.ic}</div>
              <h4 className="text-lg font-semibold mb-2">{p.t}</h4>
              <p className="text-soft text-[15px]">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto mt-10 text-center text-soft text-lg">
          TontineBénin garde <strong className="text-ink">la force communautaire</strong> de la tontine et y ajoute la{" "}
          <strong className="text-ink">sécurité du numérique</strong> : traçabilité, preuve d&apos;épargne et accès au crédit.
        </p>
      </div>
    </section>
  );
}

/* ===== STRATÉGIE DE DÉPLOIEMENT ===== */
export function Deploiement({ alt = false }: { alt?: boolean }) {
  const leviers = [
    { ic: "🧑‍💼", t: "Réseau de collecteurs", d: "Recrutement et formation de collecteurs locaux, présents là où sont les épargnants." },
    { ic: "🏪", t: "Présence sur les marchés", d: "Aller au contact direct des commerçantes et artisans, sur leur terrain." },
    { ic: "🔗", t: "Effet réseau", d: "Chaque tontine de groupe amène plusieurs membres d'un seul coup." },
    { ic: "🏛️", t: "Partenariats institutionnels", d: "S'appuyer sur les IMF et programmes (PADME) pour crédibiliser et orienter." },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="deploiement">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Notre stratégie de déploiement" sub="Une croissance ancrée dans le terrain, pas seulement en ligne." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leviers.map((l) => (
            <div key={l.t} className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="w-[52px] h-[52px] grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-4">{l.ic}</div>
              <h4 className="text-[15px] font-semibold mb-1.5">{l.t}</h4>
              <p className="text-soft text-sm">{l.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PARTENAIRES & ÉCOSYSTÈME ===== */
export function Partenaires({ alt = false }: { alt?: boolean }) {
  const eco = [
    { t: "KKiaPay", r: "Agrégateur de paiement", s: "Intégré" },
    { t: "MTN MoMo", r: "Mobile Money", s: "Intégré" },
    { t: "Moov Money", r: "Mobile Money", s: "Intégré" },
    { t: "IMF / PADME", r: "Microfinance & crédit", s: "Partenaire visé" },
    { t: "Twilio / WhatsApp", r: "Notifications & SMS", s: "Intégré" },
    { t: "ANSSFD / APDP", r: "Cadre réglementaire", s: "Démarches prévues" },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="partenaires">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Partenaires & écosystème" sub="Une plateforme connectée aux bons acteurs — et transparente sur ce qui est déjà en place." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {eco.map((e) => (
            <div key={e.t} className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold">{e.t}</h4>
                <p className="text-soft text-sm">{e.r}</p>
              </div>
              <span
                className={`shrink-0 text-[12px] font-semibold px-3 py-1 rounded-full ${
                  e.s === "Intégré"
                    ? "bg-primary-light text-primary-dark border border-green-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                {e.s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== FAQ INVESTISSEURS ===== */
export function FaqInvestisseurs({ alt = false }: { alt?: boolean }) {
  const faq = [
    { q: "Le produit est-il déjà fonctionnel ?", a: "Oui. L'application mobile et le back-office d'administration sont opérationnels. Le projet est prêt pour un pilote terrain à Parakou." },
    { q: "Comment le projet gagne-t-il de l'argent ?", a: "Trois sources : les frais de retrait (part plateforme), les intérêts sur les micro-crédits, et l'apport d'affaires vers les institutions de microfinance. La cotisation reste 100% gratuite pour l'épargnant." },
    { q: "Où en êtes-vous côté régulation ?", a: "Les fonds ne transitent jamais par nos comptes : ils passent par KKiaPay, un agrégateur tiers. Les démarches d'agrément (ANSSFD) et de conformité des données (APDP) sont planifiées pour le passage à l'échelle." },
    { q: "Qu'est-ce qui vous différencie de la concurrence ?", a: "La combinaison : traçabilité numérique + accès sans smartphone (USSD) + collecteurs terrain + score de crédit automatique, pensée pour le secteur informel béninois." },
    { q: "Que feriez-vous d'un investissement ?", a: "Quatre priorités : finaliser et sécuriser le produit, mener les démarches réglementaires, déployer le réseau de collecteurs, et faire connaître la plateforme." },
    { q: "Qui compose l'équipe ?", a: "Trois fondateurs formés à l'IUT de Parakou, couvrant le produit et la technique, le développement, et la gestion et la relation client." },
  ];
  return (
    <section className={`py-20 ${alt ? "bg-gray-50" : ""}`} id="faq">
      <div className="max-w-container mx-auto px-5">
        <SectionHead title="Questions fréquentes" sub="Les réponses aux questions que se posent les investisseurs et partenaires." />
        <div className="max-w-3xl mx-auto space-y-3">
          {faq.map((f) => (
            <details key={f.q} className="group bg-white border border-gray-200 rounded-2xl px-6 py-4">
              <summary className="flex items-center justify-between cursor-pointer font-semibold list-none">
                <span>{f.q}</span>
                <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="text-soft text-[15px] mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
