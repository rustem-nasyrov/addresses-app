import { apiService } from '@/api';

import type { Coordinates } from '@/types';
import type { GeocodeResponseRaw, GeocodeData } from '@/types';
import { normalizeGeocodeResponse } from '@/services/geocode/utils';

class Geocode {
  private api = apiService;

  private getUrl([latitude, longitude]: Coordinates): string {
    return `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
  }

  public async getStreet(coordinates: Coordinates): Promise<[GeocodeData | null, unknown | null]> {
    const url = this.getUrl(coordinates);
    const [response, error] = await this.api.get<GeocodeResponseRaw>(url);

    if (!response) {
      return [response, error];
    }

    return [normalizeGeocodeResponse(response), error];
  }
}

export const geocodeService = new Geocode();
