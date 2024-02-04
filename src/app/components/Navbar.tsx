export default function Navbar() {
  return (
    <nav className="fixed w-full bg-blue-200 h-20 flex items-center z-50 top-0">
      <div className="container flex justify-between align-middle">
        <h2>&lt;KT /&gt;</h2>
        <ul className="flex">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Projects</li>
          <li className="px-2">Resume</li>
          <li className="px-2">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
