import { DEFAULT_COORDINATES } from '@/store/modules/map/consts';

export const getUserCoordinates = (cb: (args: unknown[]) => unknown) => {
  if (!window?.navigator?.geolocation) {
    cb(DEFAULT_COORDINATES);

    return;
  }

  const onSuccess = ({ coords }: GeolocationPosition) => {
    cb([coords.latitude, coords.longitude]);
  };

  const onError = () => {
    console.warn(`Can not access to user' geolocation.`);
  };

  window.navigator.geolocation.getCurrentPosition(onSuccess, onError);
};
