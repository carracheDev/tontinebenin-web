export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#top" className="brand footer-brand">
            <span className="brand-mark">T</span>
            <span className="brand-name">
              Tontine<strong>Bénin</strong>
            </span>
          </a>
          <p className="muted">
            Plateforme fintech de digitalisation des tontines au Bénin.
            Démarrage à Parakou, ambition nationale.
          </p>
        </div>
        <div>
          <h5>Navigation</h5>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#comment">Comment ça marche</a>
          <a href="#securite">Sécurité</a>
          <a href="#equipe">Équipe</a>
        </div>
        <div>
          <h5>Contact</h5>
          <p className="muted">Parakou, 2ᵉ arrondissement, Banikanni</p>
          <p className="muted">
            <a href="mailto:sodjinoucarrache457@gmail.com">
              sodjinoucarrache457@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="container copyright">
        © {new Date().getFullYear()} TontineBénin — Tous droits réservés.
      </div>
    </footer>
  );
}
