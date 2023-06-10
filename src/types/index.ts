export type AppBarTab = {
  to: string;
  label: string;
}

export type MarkerCoordinates = {
  latitude: string;
  longitude: string;
}

export type Marker = {
  id: string;
  label: string;
  coordinates: MarkerCoordinates;
}
