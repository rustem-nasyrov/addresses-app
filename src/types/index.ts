export type AppBarTab = {
  to: string;
  label: string;
}

export type Coordinates = [number, number];

export type Marker = {
  id: string;
  label: string;
  coordinates: Coordinates;
}
