import { Marker } from '@/types';

export type MarkersState = {
  snackbar: {
    visible: boolean;
    message: string;
  };
  markers:  Marker[];
}
