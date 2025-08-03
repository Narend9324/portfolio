import ExperienceItem from "@/app/components/ExperienceItem";

export default function Experience() {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Wielabs",
      description: "Working on cutting-edge software development projects using modern technologies.",
      date: "Jan 2025 - Present",
      tech: ["React", "Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "Docker", "AWS"],
      active: true,
    },
    {
      title: "Junior Software Developer Intern",
      company: "Wielabs",
      description: "Assisted in developing scalable applications and learned industry best practices.",
      date: "Jun 2024 - Dec 2024",
      tech: ["JavaScript", "React", "Git", "Tailwind CSS"],
      active: true,
    },
    {
      title: "B.Tech in CSE (AI & ML)",
      company: "Kakatiya Institute of Technology and Science, Warangal",
      description: "Specialized in AI and Machine Learning applications within Computer Science Engineering.",
      date: "2020 - 2024",
      tech: [],
      active: false,
    },
  ];

  return (
    <section id="experience" className="min-h-screen px-4 sm:px-8 py-16 border-2 border-blue-400">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative border-l-2 border-zinc-700 ml-4">
         {experiences.map((exp, idx) => {
  console.log("Rendering experience item:", exp);
  return <ExperienceItem key={idx} {...exp} />;
})}
        </div>
      </div>
    </section>
  );
}
