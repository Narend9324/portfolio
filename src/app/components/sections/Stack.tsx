'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { stackCategories } from '@/app/lib/data';
import { SectionHeading } from '../ui/SectionHeading';
import { TechBadge } from '../ui/TechBadge';

export const Stack: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="stack" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Tech Stack"
                    subtitle="Technologies and tools I work with"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {stackCategories.map((category, index) => (
                        <motion.div
                            key={category.category}
                            variants={itemVariants}
                            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                        >
                            <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.technologies.map((tech) => (
                                    <TechBadge key={tech} tech={tech} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
