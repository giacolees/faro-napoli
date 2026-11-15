import type {HousingListing} from '../types/housing';
const euros = new Intl.NumberFormat('it-IT', {style: 'currency', currency: 'EUR', maximumFractionDigits: 0});

export function HousingCard({listing}: {listing: HousingListing}) {
  return (
    <article className="workspace-card">
      <p className="workspace-eyebrow">{listing.neighborhood} · ESEMPIO</p>
      <h2>{listing.title}</h2>
      <p><strong>{euros.format(listing.monthlyRent)}</strong> / mese</p>
      <p>{listing.universityMinutes} min verso l’ateneo · tempo simulato</p>
      <p>{listing.accessible ? 'Ingresso senza gradini (simulato)' : 'Accessibilità da verificare'}</p>
    </article>
  );
}
