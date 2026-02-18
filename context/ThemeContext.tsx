"use client";

import { localStorageService, storageKeys } from '@/utils/LocalStorage';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ActiveTheme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    activeTheme: ActiveTheme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('system');
    const [activeTheme, setActiveTheme] = useState<ActiveTheme>('light');

    const applyThemeClass = (themeValue: Theme) => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');

        let activeTheme: ActiveTheme;

        if (themeValue === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            activeTheme = prefersDark ? 'dark' : 'light';
        } else {
            activeTheme = themeValue;
        }

        root.classList.add(activeTheme);
        setActiveTheme(activeTheme);
    };

    useEffect(() => {
        const savedTheme = (localStorageService.get(storageKeys.theme) as Theme) || 'system';
        setTheme(savedTheme);
        applyThemeClass(savedTheme);

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = () => {
            if (theme === 'system') {
                applyThemeClass('system');
            }
        };
        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, [theme]);

    const toggleTheme = () => {
        const next: Theme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
        setTheme(next);
        localStorageService.set(storageKeys.theme, next);
        applyThemeClass(next);
    };

    return (
        <ThemeContext.Provider value={{ theme, activeTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
