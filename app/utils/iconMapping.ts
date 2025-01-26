import { Category } from "../data/categories";

export const getCategoryIcon = (category: Category): string => {
  switch (category.catName) {
    case "Breakfast":
      return "silverware-fork-knife";
    case "Lunch":
      return "hamburger";
    case "Snacks":
      return "ice-cream";
    case "Drink":
      return "cup";
    case "Grilled":
      return "grill";
    case "Frozen Food":
      return "snowflake";
    default:
      return "help";
  }
};
