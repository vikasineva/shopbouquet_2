import { CSSProperties } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ResponsiveValue<T> = T | Partial<Record<Breakpoint, T>>;

type ResponsiveCSSProperties = {
    [K in keyof CSSProperties]?:
    | ResponsiveValue<CSSProperties[K]>
    | CSSProperties[K];
};

type Styles = {
    [key: string]: ResponsiveCSSProperties | Styles;
};

export function makeStyles<T extends Styles>(styles: T): T {
    return styles;
}