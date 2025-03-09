import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useThemeTransition = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = (event: React.MouseEvent) => {
    if (!mounted) return;
    
    // Create transition element
    const transitionEl = document.createElement('div');
    transitionEl.classList.add('theme-transition');
    
    // Set the transition color based on the current theme
    const color = theme === 'dark' ? '#FFFFFF' : '#111827';
    transitionEl.style.setProperty('--theme-transition-color', color);
    
    // Position the transition element at the top-right corner
    transitionEl.style.left = 'calc(100% - 50px)';
    transitionEl.style.top = '50px';
    
    // Add to DOM
    document.body.appendChild(transitionEl);
    
    // Trigger animation
    setTimeout(() => {
      transitionEl.classList.add('active');
    }, 10);
    
    // Change theme after a small delay
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }, 300);
    
    // Remove transition element after animation completes
    setTimeout(() => {
      document.body.removeChild(transitionEl);
    }, 1000);
  };

  return { theme, toggleTheme, mounted };
}; 