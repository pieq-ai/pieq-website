declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: {
        page_title?: string;
        page_location?: string;
        page_path?: string;
        event_category?: string;
        event_label?: string | undefined;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
