'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Dot pattern background
export const DotPattern: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full opacity-30 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="currentColor" className="text-gray-400 dark:text-gray-600" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dot-pattern)" />
            </svg>
        </div>
    );
};

// Diagonal lines pattern
export const DiagonalLines: React.FC<{ className?: string; direction?: 'left' | 'right' }> = ({
    className = '',
    direction = 'right'
}) => {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <svg className="w-full h-full opacity-20 dark:opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id={`diagonal-lines-${direction}`}
                        x="0"
                        y="0"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                        patternTransform={direction === 'left' ? 'rotate(-45)' : 'rotate(45)'}
                    >
                        <line
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="40"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-blue-500 dark:text-blue-400"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#diagonal-lines-${direction})`} />
            </svg>
        </div>
    );
};

// Floating gradient orb
export const GradientOrb: React.FC<{
    className?: string;
    color?: 'blue' | 'purple' | 'pink';
    size?: 'sm' | 'md' | 'lg';
}> = ({ className = '', color = 'blue', size = 'md' }) => {
    const colors = {
        blue: 'from-blue-400 to-cyan-400',
        purple: 'from-purple-400 to-pink-400',
        pink: 'from-pink-400 to-rose-400',
    };

    const sizes = {
        sm: 'w-32 h-32',
        md: 'w-48 h-48',
        lg: 'w-64 h-64',
    };

    return (
        <motion.div
            className={`absolute rounded-full bg-gradient-to-br ${colors[color]} opacity-20 blur-3xl pointer-events-none ${sizes[size]} ${className}`}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        />
    );
};

// Section divider with decorative elements
export const SectionDivider: React.FC<{ variant?: 'dots' | 'lines' | 'gradient' }> = ({
    variant = 'dots'
}) => {
    return (
        <div className="relative h-24 my-8">
            {variant === 'dots' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 0.5, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                </div>
            )}

            {variant === 'lines' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30" />
                </div>
            )}

            {variant === 'gradient' && (
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
                </div>
            )}
        </div>
    );
};
