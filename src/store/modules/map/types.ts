import { Coordinates } from '@/types';

export type MapState = {
  coordinates: Coordinates;
  selectedMarkerId: number | null;
  zoom: number;
}
