import { Author } from "../components";

export const getAuthorsList = (
  ids?: string[] | null,
  authors?: Author[] | null
): string[] => {
  if (!ids?.length || !authors?.length) return [];

  return ids
    .map((id) => authors.find((author) => author.id === id)?.name || null)
    .filter((name): name is string => !!name);
};
