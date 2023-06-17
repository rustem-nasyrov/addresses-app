import type { BackendService, BackendServiceResponse } from '@/services/backend/types';
import type { Marker } from '@/types';

import i18n from '@/locales';

import { REJECT_STATUS_TEXT, SUCCESS_STATUS_TEXT } from '@/consts';

const STORAGE_MARKER_KEY = 'markers';

class Backend implements BackendService {
  private getStorageItem<T>(key: string): T | null {
    const storageString = window.localStorage.getItem(key);

    if (storageString) {
      return JSON.parse(storageString);
    }

    return null;
  }

  private setStorageItem<T>(key: string, data: T) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  async getAllMarkers(): BackendServiceResponse<Marker[]> {
    const markers = this.getStorageItem<Marker[]>(STORAGE_MARKER_KEY) ?? [];

    return await new Promise((resolve, reject) => {
      if ('localStorage' in window) {
        resolve({
          status: SUCCESS_STATUS_TEXT,
          message: i18n.t('messages-codes.get-all-markers') as string,
          data: markers,
        });
      } else {
        reject({
          status: REJECT_STATUS_TEXT,
          message: i18n.t('messages-codes.reject-all-markers') as string,
        });
      }
    });
  }

  async addMarker<T>(marker: Marker): BackendServiceResponse<T> {
    const markers = this.getStorageItem<Marker[]>('markers') ?? [];

    return new Promise((resolve, reject) => {
      if ('localStorage' in window) {
        markers.push(marker);
        this.setStorageItem(STORAGE_MARKER_KEY, markers);

        resolve({
          status: SUCCESS_STATUS_TEXT,
          message: i18n.t('messages-codes.add-message-success') as string,
        });
      } else {
        reject({
          status: REJECT_STATUS_TEXT,
          message: i18n.t('messages-codes.add-message-reject') as string,
        });
      }
    });
  }
}

export const backendService = new Backend();
