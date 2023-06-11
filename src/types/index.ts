export type AppBarTab = {
  to: string;
  label: string;
}

export type GeocodeAddressRaw = {
  road?: string;
  quarter?: string;
  city_district?: string;
  state_district?: string;
  state?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
};

export type GeocodeResponseRaw = {
  place_id: number;
  licence: string;
  powered_by: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: GeocodeAddressRaw;
  boundingbox: string[];
};

export type GeocodeAddress = {
  road?: string;
  quarter?: string;
  cityDistrict?: string;
  stateDistrict?: string;
  state?: string;
  postcode?: string;
  country?: string;
  countryCode?: string;
};

export type GeocodeData = {
  id: number;
  latitude: string;
  longitude: string;
  displayName: string;
  address: GeocodeAddress;
};


export type Coordinates = [number, number];

export type Marker = GeocodeData & {
  coordinates: Coordinates;
}
