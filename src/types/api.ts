// API Types for Contact Form

export interface ContactFormData {
  full_name: string;
  work_email: string;
  company_name: string;
  industry: string;
  automation_requirements: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  message_id: string;
}

export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}
