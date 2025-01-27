export const getUrl = (url: string) => {
  const baseUrl = process.env.REACT_APP_BASE_API_URL ?? "";
  return `${baseUrl}/${url}`;
};
