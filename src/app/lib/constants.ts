// Design tokens and constants

export const BREAKPOINTS = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
} as const;

export const SECTION_IDS = {
    about: 'about',
    projects: 'projects',
    experience: 'experience',
    stack: 'stack',
    contact: 'contact',
} as const;

export const ANIMATION_DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
} as const;
