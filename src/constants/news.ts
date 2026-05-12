const categories = [
  "general",
  "business",
  "health",
  "science",
  "sports",
  "technology",
] as const;

type Category = (typeof categories)[number];

function isValidCategory(value: string | undefined): value is Category {
  return (
    value !== undefined && (categories as readonly string[]).includes(value)
  );
}

const categoryLabels: Record<Category, string> = {
  general: "General",
  business: "Business",
  health: "Health",
  science: "Science",
  sports: "Sports",
  technology: "Technology",
};

export {
  categories,
  type Category,
  categoryLabels,
  isValidCategory,
};
