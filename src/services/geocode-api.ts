import { apiService } from '@/api';
import type { Coordinates } from '@/types';

class GeocodeApi {
  private api = apiService;

  private getUrl([latitude, longitude]: Coordinates): string {
    return `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`;
  }

  public async getStreet(coordinates: Coordinates) {
    const url = this.getUrl(coordinates);

    return await this.api.get(url);
  }
}

export const geocodeApi = new GeocodeApi();
