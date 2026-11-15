export interface HousingListing {
  id: string;
  title: string;
  neighborhood: string;
  monthlyRent: number;
  universityMinutes: number;
  accessible: boolean;
}

export interface HousingFilters {
  maxRent: number;
  accessibleOnly: boolean;
}

/** Replace this port with an HTTP adapter when a verified data source exists. */
export interface HousingRepository {
  search(filters: HousingFilters): Promise<HousingListing[]>;
}
