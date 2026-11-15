import {demoListings} from '../data/listings';
import type {HousingFilters, HousingListing, HousingRepository} from '../types/housing';

export function filterListings(listings: readonly HousingListing[], filters: HousingFilters): HousingListing[] {
  return listings.filter(listing =>
    listing.monthlyRent <= filters.maxRent && (!filters.accessibleOnly || listing.accessible),
  );
}

export const housingRepository: HousingRepository = {
  async search(filters) {
    return filterListings(demoListings, filters);
  },
};
