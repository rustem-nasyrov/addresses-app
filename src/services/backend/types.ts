import type { Marker } from '@/types';

export type BackendServiceResponse<T = unknown> = Promise<{
  status: string;
  data?: T;
}>;

export interface BackendService {
  getAllMarkers(): BackendServiceResponse<Marker[]>;
  addMarker(marker: Marker, cb: (args: unknown[]) => unknown): BackendServiceResponse;
}
