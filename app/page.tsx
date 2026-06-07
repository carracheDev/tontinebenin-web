import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ⚠️ Remplace cette valeur par ton lien Google Drive / Firebase de l'APK
const APK_URL = "REMPLACER_PAR_LIEN_APK";

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

const stats = [
  { v: "14,46 M", l: "habitants au Bénin" },
  { v: "89%", l: "pénétration Mobile Money" },
  { v: "11,1 M", l: "abonnés Mobile Money" },
  { v: "+60%", l: "des Béninois en tontine" },
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
  { ic: "🏦", t: "Fonds chez un agrégateur agréé", d: "Les paiements transitent par un agrégateur Mobile Money agréé BCEAO." },
  { ic: "🛡️", t: "Données protégées", d: "Conformité visée APDP, chiffrement et authentification sécurisée." },
  { ic: "📜", t: "Cadre réglementaire", d: "Démarche d'agrément ANSSFD pour opérer en toute légalité." },
];

const team = [
  { i: "SC", t: "SODJINOU J. Carrache", r: "Fondateur & Directeur Général", d: "Pilotage stratégique, vision produit, architecture & développement." },
  { i: "AH", t: "AÏHODONOU Hippolyte", r: "Cofondateur & CTO / Lead Dév", d: "Développement, architecture technique, qualité du code." },
  { i: "GA", t: "GOUTIN Alphonsine", r: "Cofondatrice & RAF / Relation Client", d: "Gestion, comptabilité, suivi KYC, support client." },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="badge">Fintech • Inclusion financière • Bénin</span>
            <h1>
              Digitaliser l&apos;épargne,
              <br />
              <span className="accent">inclure tous les Béninois</span>
            </h1>
            <p className="lead">
              TontineBénin transforme la tontine en épargne sécurisée et en accès
              au crédit. Mobile Money, USSD et collecteurs terrain :{" "}
              <strong>personne n&apos;est exclu</strong>, même sans smartphone.
            </p>
            <div className="hero-cta">
              <a href="#telecharger" className="btn btn-primary">
                📲 Télécharger l&apos;application
              </a>
              <a href="#fonctionnalites" className="btn btn-ghost">
                Découvrir →
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>89%</strong>
                <span>Mobile Money</span>
              </div>
              <div>
                <strong>60%</strong>
                <span>en tontine</span>
              </div>
              <div>
                <strong>0,3%</strong>
                <span>accès crédit bancaire</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="ps-header">TontineBénin</div>
                <div className="ps-balance">
                  <span>Solde épargne</span>
                  <strong>125 000 FCFA</strong>
                </div>
                <div className="ps-row">
                  <span>💰 Cotisation du jour</span>
                  <b>+2 000 F</b>
                </div>
                <div className="ps-row">
                  <span>🏆 Score de crédit</span>
                  <b>78 / 100</b>
                </div>
                <div className="ps-row">
                  <span>📊 Crédit disponible</span>
                  <b>25 000 F</b>
                </div>
                <div className="ps-btn">Cotiser maintenant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section className="section" id="probleme">
        <div className="container two-col">
          <div className="card problem">
            <h3>Le problème</h3>
            <ul className="ticklist">
              <li>Les collecteurs transportent l&apos;argent liquide : vol, perte, agression.</li>
              <li>Tontines de groupe sur papier : litiges, retards, contestations.</li>
              <li>Carnets perdus ou falsifiés : aucune preuve d&apos;épargne.</li>
              <li><strong>90% des Béninois</strong> sont dans l&apos;informel et exclus du crédit bancaire.</li>
            </ul>
          </div>
          <div className="card solution">
            <h3>Notre solution</h3>
            <ul className="ticklist green">
              <li>Épargne 100% tracée via <strong>Mobile Money</strong> (MTN / Moov).</li>
              <li>Registre numérique infalsifiable pour les groupes.</li>
              <li>Historique d&apos;épargne → <strong>score de crédit</strong> automatique.</li>
              <li>Accès <strong>USSD + collecteurs</strong> pour ceux sans smartphone.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="section alt" id="fonctionnalites">
        <div className="container">
          <div className="section-head">
            <h2>Tout ce qu&apos;il faut pour épargner en confiance</h2>
            <p>Une plateforme hybride pensée pour le terrain béninois.</p>
          </div>
          <div className="grid-3">
            {features.map((f) => (
              <div className="feature" key={f.t}>
                <div className="ic">{f.ic}</div>
                <h4>{f.t}</h4>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="section" id="comment">
        <div className="container">
          <div className="section-head">
            <h2>Comment ça marche</h2>
            <p>De l&apos;épargne quotidienne jusqu&apos;à l&apos;accès au crédit.</p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <div className="step" key={s.n}>
                <span className="num">{s.n}</span>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHIFFRES CLÉS */}
      <section className="stats-band">
        <div className="container">
          <div className="section-head light">
            <h2>Un marché immense, prêt à se digitaliser</h2>
          </div>
          <div className="grid-4">
            {stats.map((s) => (
              <div className="stat" key={s.l}>
                <strong>{s.v}</strong>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
          <p className="sources">Sources : Banque mondiale, ARCEP Bénin, BCEAO, INStaD.</p>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="section alt" id="pourqui">
        <div className="container">
          <div className="section-head">
            <h2>Pour qui ?</h2>
            <p>Les épargnants du réel, souvent oubliés du système bancaire.</p>
          </div>
          <div className="grid-3">
            {segments.map((s) => (
              <div className="who" key={s.t}>
                <span className="who-ic">{s.ic}</span>
                <b>{s.t}</b>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SÉCURITÉ */}
      <section className="section" id="securite">
        <div className="container">
          <div className="section-head">
            <h2>Sécurité &amp; conformité</h2>
            <p>Votre argent n&apos;est jamais dans nos bureaux.</p>
          </div>
          <div className="grid-3">
            {security.map((s) => (
              <div className="feature" key={s.t}>
                <div className="ic">{s.ic}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPE */}
      <section className="section alt" id="equipe">
        <div className="container">
          <div className="section-head">
            <h2>L&apos;équipe fondatrice</h2>
            <p>Une équipe technique et terrain, formée à l&apos;IUT de Parakou.</p>
          </div>
          <div className="grid-3">
            {team.map((m) => (
              <div className="member" key={m.t}>
                <div className="avatar">{m.i}</div>
                <h4>{m.t}</h4>
                <span className="role">{m.r}</span>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÉLÉCHARGER */}
      <section className="cta-band" id="telecharger">
        <div className="container cta-inner">
          <h2>Essayez TontineBénin</h2>
          <p>Téléchargez l&apos;application Android (version de test).</p>
          <a href={APK_URL} className="btn btn-light btn-lg">
            ⬇️ Télécharger l&apos;APK (Android)
          </a>
          <p className="cta-note">
            Compatible Android. Pour installer : autorisez « installer des
            applications inconnues ».
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
