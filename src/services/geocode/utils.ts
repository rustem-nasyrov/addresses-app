import { GeocodeData, GeocodeResponseRaw } from '@/types';

export const normalizeGeocodeResponse = (data: GeocodeResponseRaw): GeocodeData => {
  const address = {
    road: data.address.road ?? '',
    quarter: data.address.quarter ?? '',
    cityDistrict: data.address.city_district ?? '',
    stateDistrict: data.address.state_district ?? '',
    state: data.address.state ?? '',
    postcode: data.address.postcode ?? '',
    country: data.address.country ?? '',
    countryCode: data.address.country_code ?? '',
  };

  return {
    id: data.place_id,
    latitude: data.lat,
    longitude: data.lon,
    displayName: data.display_name,
    address,
  }
};
