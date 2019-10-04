import React, { ReactNode } from 'react';
import ThemeStyles from './ThemeStyles';
import ThemeContext, { Theme, baseTheme } from './ThemeContext';
import theme from './base-theme.json';

export type ThemeProviderProps = {
    /** Theme object of colors */
    theme?: Theme;
    /** A render function or valid React child */
    children: ReactNode | ((props: { theme: Theme }) => ReactNode);
};

const ThemeProvider: React.FC<ThemeProviderProps> = (props: ThemeProviderProps) => {
    const theme = {
        ...baseTheme,
        ...props.theme,
    };
    const child = typeof props.children === 'function' ? props.children({ theme }) : props.children;

    return (
        <ThemeContext.Provider value={{ theme }}>
            <ThemeStyles>{child}</ThemeStyles>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
