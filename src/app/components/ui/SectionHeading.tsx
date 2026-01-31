import React from 'react';
import { cn } from '@/app/lib/utils';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    subtitle,
    className,
}) => {
    return (
        <div className={cn('mb-8 md:mb-12', className)}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
