import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    case Theme.DARK:
      newTheme = Theme.LIGHT;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.LIGHT, toggleTheme };
};