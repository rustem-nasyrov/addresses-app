import { Coordinates, Marker } from '@/types';

export type MapState = {
  zoom: number,
  coordinates: Coordinates;
  markers: Marker[];
}
