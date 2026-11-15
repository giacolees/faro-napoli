export const appRoutes = [
  { path: '/app', label: 'Panoramica' },
  { path: '/app/casa', label: 'Cerca casa' },
  { path: '/app/attivazione', label: 'Attivazione' },
  { path: '/app/servizi', label: 'Servizi' },
  { path: '/app/mobilita', label: 'Mobilità' },
] as const;

export type AppRoute = (typeof appRoutes)[number]['path'];
