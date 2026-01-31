'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/app/lib/utils';

interface ExpandableCardProps {
    header: React.ReactNode;
    expandedContent: React.ReactNode;
    className?: string;
    defaultExpanded?: boolean;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
    header,
    expandedContent,
    className,
    defaultExpanded = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);

    return (
        <div
            className={cn(
                'rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 dark:border-gray-800 dark:bg-gray-900',
                isExpanded && 'shadow-md',
                className
            )}
        >
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full text-left transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                aria-expanded={isExpanded}
            >
                <div className="flex items-start justify-between gap-4 p-6">
                    <div className="flex-1">{header}</div>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0 pt-1"
                    >
                        <svg
                            className="h-5 w-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </motion.div>
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="border-t border-gray-200 px-6 pb-6 pt-4 dark:border-gray-800">
                            {expandedContent}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
