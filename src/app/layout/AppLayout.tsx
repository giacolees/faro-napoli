import type {ReactNode} from 'react';
import {appRoutes} from '../routes';
import '../styles/app.css';

export function AppLayout({path, children}: {path: string; children: ReactNode}) {
  return (
    <div className="workspace">
      <aside className="workspace-sidebar">
        <a className="workspace-brand" href="#">✳ FARO Napoli</a>
        <p>La città, più vicina.</p>
        <nav aria-label="Applicazione">
          {appRoutes.map(route => (
            <a key={route.path} href={`#${route.path}`} aria-current={path === route.path ? 'page' : undefined}>
              {route.label}
            </a>
          ))}
        </nav>
        <a href="#">← La visione del progetto</a>
      </aside>
      <main className="workspace-main">
        <div className="workspace-notice">PROTOTIPO · DATI SIMULATI · Nessuna disponibilità reale verificata</div>
        {children}
      </main>
    </div>
  );
}
