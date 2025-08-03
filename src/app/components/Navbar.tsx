export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b px-6 py-3 flex justify-evenly ">
      <ul className="flex gap-4 text-sm font-medium">
        <li><a href="#hero" className="hover:underline">Home</a></li>
        <li><a href="#experience" className="hover:underline">Experience</a></li>
        <li><a href="#skills" className="hover:underline">Skills</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
      <ul className="flex"><li>AA</li>
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li>D</li></ul>
    </nav>
  );
}
