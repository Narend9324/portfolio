import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-4 sm:px-8 lg:px-16"
    >
      {/* Left - Content */}
      <div className=" text-center  space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-purple-600">Narendra</span>
        </h1>
        <p className="text-lg text-muted-foreground text-gray-700 max-w-xl">
          I love building things for the web, exploring new tech, and sharing knowledge with the community.
        </p>
        <div className="space-y-2 text-left text-sm text-blue-600 font-mono">
          <p>
            <span className="font-bold text-purple-700">Product Mindset:</span>{" "}
            Focused on real-world impact and user-centric solutions.
          </p>
          <p>
            <span className="font-bold text-purple-700">Community-Driven:</span>{" "}
            Building tools for students, developers, and underrepresented groups.
          </p>
          <p>
            <span className="font-bold text-purple-700">Always Learning:</span>{" "}
            Exploring new tech, AI, and best practices.
          </p>
        </div>
        <p className="italic font-medium text-sm text-gray-500">
          "I don’t just build apps—I create ecosystems that empower people."
        </p>
      </div>

      {/* Right - Image */}
      <div className=" flex justify-center items-center">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-purple-500 shadow-md">
          <Image
            src="/Profile.jpg" // replace with your image path
            alt="Narendra"
            width={300}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
