export const themes = [
  { id: "teal", name: "Teal", accent: "#2DD4BF", accent2: "#38BDF8" },
  { id: "champagne", name: "Champagne", accent: "#D8B98A", accent2: "#F1E6D2" },
  { id: "mono", name: "Mono", accent: "#E5E7EB", accent2: "#9CA3AF" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export const DEFAULT_THEME: ThemeId = "teal";
export const THEME_STORAGE_KEY = "theme";

export function isThemeId(value: unknown): value is ThemeId {
  return themes.some((theme) => theme.id === value);
}

/**
 * Inline script that applies the saved theme before first paint,
 * so visitors never see a flash of the default colours.
 */
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(${JSON.stringify(
  themes.map((t) => t.id),
)}.indexOf(t)>-1)document.documentElement.dataset.theme=t}catch(e){}`;
