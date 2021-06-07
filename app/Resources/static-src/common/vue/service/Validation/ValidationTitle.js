import { apiClient } from 'common/vue/service/api-client.js';

export const ValidationTitle = {
  // 同名校验
  async search({ type, title, exceptId }) {
    return apiClient.get(`/api/validation/${type}/title`, { params: { title, exceptId } })
  }
}
