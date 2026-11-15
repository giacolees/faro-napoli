import {appRoutes} from '../routes';

export function DashboardPage() {
  return (
    <section className="workspace-page">
      <p className="workspace-eyebrow">BENVENUTO IN FARO</p>
      <h1>Una città di possibilità.</h1>
      <p>Uno spazio per connettere casa, servizi e mobilità. Parti dalla ricerca abitativa dimostrativa.</p>
      <div className="workspace-grid">
        {appRoutes.slice(1).map(route => (
          <a className="workspace-card workspace-module" key={route.path} href={`#${route.path}`}>
            <h2>{route.label} ↗</h2>
            <p>{route.path === '/app/casa' ? 'Esplora gli alloggi simulati e prova i filtri.' : 'Scopri il modulo e i prossimi sviluppi.'}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
