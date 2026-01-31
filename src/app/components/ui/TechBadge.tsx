import React from 'react';
import { cn } from '@/app/lib/utils';

interface TechBadgeProps {
    tech: string;
    className?: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ tech, className }) => {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
                className
            )}
        >
            {tech}
        </span>
    );
};
