type ApiSuccessResponse = Record<string, unknown> | null;

type ApiErrorResponse = unknown | null;

export type ApiRequestParams = Record<string, unknown>;

export type ApiResponse<T = ApiSuccessResponse> = Promise<[T | null, ApiErrorResponse]>;

export interface Api {
  get<ResponseData>(url: string, params?: ApiRequestParams): ApiResponse<ResponseData>;

  post<ResponseData>(url: string, params?: ApiRequestParams): ApiResponse<ResponseData>;
}
