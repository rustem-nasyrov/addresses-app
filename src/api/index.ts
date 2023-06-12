import type { Api, ApiRequestParams, ApiResponse } from '@/api/types';

class ApiService implements Api {
  private async makeRequest<ResponseData>(url: string, params: ApiRequestParams): ApiResponse<ResponseData> {
    try {
      const response = await fetch(url, params);

      if (response.status !== 200) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      return [data, null];
    } catch (error: unknown) {
      if ((error as Error).message) {
        return [null, (error as Error).message];
      }

      return [null, error];
    }
  }

  async get<ResponseData>(url: string, params: ApiRequestParams = {}): ApiResponse<ResponseData> {
    return await this.makeRequest<ResponseData>(url, {
      ...params,
      method: 'GET',
    });
  }

  async post<ResponseData>(url: string, params: ApiRequestParams = {}): ApiResponse<ResponseData> {
    return await this.makeRequest<ResponseData>(url, {
      ...params,
      method: 'POST',
    });
  }
}

export const apiService = new ApiService();
