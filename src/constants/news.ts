export const categories = [
  "general",
  "business",
  "health",
  "science",
  "sports",
  "technology",
] as const;

export type Category = (typeof categories)[number];

export function isValidCategory(value: string | undefined): value is Category {
  return (
    value !== undefined &&
    (categories as readonly string[]).includes(value)
  );
}

export const categoryLabels: Record<Category, string> = {
  general: "General",
  business: "Business",
  health: "Health",
  science: "Science",
  sports: "Sports",
  technology: "Technology",
};
