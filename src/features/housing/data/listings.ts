import type {HousingListing} from '../types/housing';

/** Fictional fixtures, never real availability or verified travel estimates. */
export const demoListings: readonly HousingListing[] = [
  {id: 'demo-1', title: 'Stanza a Fuorigrotta', neighborhood: 'Fuorigrotta', monthlyRent: 350, universityMinutes: 22, accessible: true},
  {id: 'demo-2', title: 'Stanza a Bagnoli', neighborhood: 'Bagnoli', monthlyRent: 320, universityMinutes: 28, accessible: false},
  {id: 'demo-3', title: 'Stanza a Cavalleggeri', neighborhood: 'Cavalleggeri', monthlyRent: 390, universityMinutes: 34, accessible: true},
];
