import {AppLayout} from './layout/AppLayout';
import {DashboardPage} from './pages/DashboardPage';
import {HousingPage} from '../features/housing/HousingPage';
import {ActivationPage} from '../features/activation/ActivationPage';
import {ServicesPage} from '../features/services/ServicesPage';
import {MobilityPage} from '../features/mobility/MobilityPage';

export function Application({path}: {path: string}) {
  const page = (() => {
    switch (path) {
      case '/app': return <DashboardPage />;
      case '/app/casa': return <HousingPage />;
      case '/app/attivazione': return <ActivationPage />;
      case '/app/servizi': return <ServicesPage />;
      case '/app/mobilita': return <MobilityPage />;
      default: return <section className="workspace-page"><h1>Pagina non trovata</h1><a href="#/app">Torna alla panoramica</a></section>;
    }
  })();
  return <AppLayout path={path}>{page}</AppLayout>;
}
