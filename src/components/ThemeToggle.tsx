import { useThemeTransition } from '@/hooks/useThemeTransition';
import { SunIcon, MoonIcon } from './Icons';

export const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useThemeTransition();
  
  if (!mounted) return null;
  
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 text-text-light transition-colors hover:bg-gray-100 dark:text-text-dark dark:hover:bg-gray-800"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
}; 