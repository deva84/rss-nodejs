export const formatCreationDate = (date?: string | null): string => {
  if (!date) return "";

  return date.replaceAll("/", ".");
};
