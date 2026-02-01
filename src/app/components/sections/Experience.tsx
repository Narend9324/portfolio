'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/app/lib/data';
import { SectionHeading } from '../ui/SectionHeading';
import { ExpandableCard } from '../ui/ExpandableCard';
import { TechBadge } from '../ui/TechBadge';
import { DiagonalLines, GradientOrb } from '../ui/DecorativeElements';

export const Experience: React.FC = () => {
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
        <section id="experience" className="relative px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
            {/* Decorative Elements */}
            <DiagonalLines direction="left" className="opacity-30" />
            <GradientOrb color="purple" size="lg" className="bottom-10 -left-32" />

            <div className="relative max-w-6xl mx-auto">
                <SectionHeading
                    title="Experience"
                    subtitle="My professional journey and key accomplishments"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-4"
                >
                    {experiences.map((experience) => (
                        <motion.div key={experience.id} variants={itemVariants}>
                            <ExpandableCard
                                header={
                                    <div className="space-y-3">
                                        {/* Company and Role */}
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                {experience.role}
                                            </h3>
                                            <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                                                {experience.company}
                                            </p>
                                        </div>

                                        {/* Timeline */}
                                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            {experience.timeline}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech) => (
                                                <TechBadge key={tech} tech={tech} />
                                            ))}
                                        </div>
                                    </div>
                                }
                                expandedContent={
                                    <div className="space-y-4">
                                        {/* Description */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                Overview
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {experience.description}
                                            </p>
                                        </div>

                                        {/* Responsibilities */}
                                        {experience.responsibilities && experience.responsibilities.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {experience.responsibilities.map((responsibility, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <circle cx="10" cy="10" r="2" />
                                                            </svg>
                                                            <span>{responsibility}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Achievements */}
                                        {experience.achievements && experience.achievements.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {experience.achievements.map((achievement, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                />
                                                            </svg>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                }
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
