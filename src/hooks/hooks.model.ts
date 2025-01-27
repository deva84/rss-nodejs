export interface FetchProps {
  toFetch: boolean;
  url: string;
  method?: string;
  body?: BodyInit | null;
  headers?: HeadersInit;
  navigateLink?: string;
}
