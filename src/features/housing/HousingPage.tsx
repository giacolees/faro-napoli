import {useEffect, useState} from 'react';
import {HousingCard} from './components/HousingCard';
import {housingRepository} from './services/housingRepository';
import type {HousingListing} from './types/housing';

export function HousingPage() {
  const [maxRent, setMaxRent] = useState(400);
  const [accessibleOnly, setAccessibleOnly] = useState(false);
  const [results, setResults] = useState<HousingListing[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    housingRepository.search({maxRent, accessibleOnly}).then(
      listings => { if (active) { setResults(listings); setStatus('ready'); } },
      () => { if (active) setStatus('error'); },
    );
    return () => { active = false; };
  }, [maxRent, accessibleOnly]);

  return (
    <section className="workspace-page">
      <p className="workspace-eyebrow">CASA / NAPOLI</p>
      <h1>Trova il tuo punto di partenza.</h1>
      <p>Esplora il flusso di ricerca con alloggi dimostrativi.</p>
      <div className="workspace-filters">
        <label>Budget mensile massimo
          <select value={maxRent} onChange={event => setMaxRent(Number(event.target.value))}>
            <option value={300}>300 €</option><option value={350}>350 €</option><option value={400}>400 €</option>
          </select>
        </label>
        <label className="workspace-checkbox">
          <input type="checkbox" checked={accessibleOnly} onChange={event => setAccessibleOnly(event.target.checked)} />
          Ingresso senza gradini
        </label>
      </div>
      <div aria-live="polite">
        {status === 'loading' && <p>Ricerca in corso…</p>}
        {status === 'error' && <p role="alert">Impossibile caricare gli esempi. Riprova ricaricando la pagina.</p>}
        {status === 'ready' && <>
          <p>{results.length} risultati dimostrativi</p>
          {results.length === 0 ? <p>Nessun esempio corrisponde ai filtri. Prova ad aumentare il budget.</p> :
            <div className="workspace-grid">{results.map(listing => <HousingCard key={listing.id} listing={listing} />)}</div>}
        </>}
      </div>
    </section>
  );
}
