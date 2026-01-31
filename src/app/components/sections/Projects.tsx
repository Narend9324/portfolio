'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/app/lib/data';
import { SectionHeading } from '../ui/SectionHeading';
import { ExpandableCard } from '../ui/ExpandableCard';
import { TechBadge } from '../ui/TechBadge';

export const Projects: React.FC = () => {
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
        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <SectionHeading
                    title="Projects"
                    subtitle="A collection of my recent work and side projects"
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-4"
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants}>
                            <ExpandableCard
                                header={
                                    <div className="space-y-3">
                                        {/* Title and Link */}
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                                {project.title}
                                            </h3>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                                >
                                                    <span>View Project</span>
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
                                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                        />
                                                    </svg>
                                                </a>
                                            )}
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
                                            {project.timeline}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
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
                                                Description
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Highlights */}
                                        {project.highlights && project.highlights.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                                                    Key Highlights
                                                </h4>
                                                <ul className="space-y-2">
                                                    {project.highlights.map((highlight, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                                                        >
                                                            <svg
                                                                className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                            <span>{highlight}</span>
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
