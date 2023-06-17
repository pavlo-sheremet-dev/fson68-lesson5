import { create } from "zustand";

export const useStore = create((set) => ({
  themeTitle: "light",
  toggleThemeTitle: () =>
    set((state) => ({
      themeTitle: state.themeTitle === "light" ? "dark" : "light",
    })),
  setThemeTitle: (payload) => set(() => ({ themeTitle: payload })),
}));

export const selectTheme = (state) => ({
  themeTitle: state.themeTitle,
  toggleThemeTitle: state.toggleThemeTitle,
  setThemeTitle: state.setThemeTitle,
});
