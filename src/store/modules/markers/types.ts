import { Marker } from '@/types';

export type MarkersState = {
  snackbar: {
    color: string;
    message: string;
    visible: boolean;
  };
  markers: Marker[];
};
