import axios, { AxiosResponse } from 'axios';
import { ContactFormData, ContactResponse, ApiError } from '../types/api';

// Direct API endpoint
const API_ENDPOINT = 'https://804i83yuo1.execute-api.us-east-1.amazonaws.com/preprod/email/send-mail';

// Axios instance with basic configuration
const apiClient = axios.create({
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'jPuI4e1lrU4kq38ma5psRapBxs924MOL21qQMvGK',
  },
});

// Contact form service
export const contactService = {
  /**
   * Send contact form data to the API
   */
  async sendContactForm(data: ContactFormData): Promise<ContactResponse> {
    try {
      const response: AxiosResponse<ContactResponse> = await apiClient.post(
        API_ENDPOINT,
        data
      );
      
      return response.data;
    } catch (error) {
      // Handle different types of errors
      if (axios.isAxiosError(error)) {
        const apiError: ApiError = {
          message: error.response?.data?.message || error.message || 'Failed to send message',
          status: error.response?.status,
          data: error.response?.data,
        };
        throw apiError;
      }
      
      // Handle non-axios errors
      throw {
        message: 'Network error. Please check your connection and try again.',
      } as ApiError;
    }
  },
};

export default contactService;
