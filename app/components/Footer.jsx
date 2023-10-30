import Link from "next/link";

function Footer() {
  return (
    <div className="flex justify-between mt-24 py-6 mb-5 px-8 lg:px-24">
      <h2 className="text-gray-400">Taras Hornik © 2023</h2>
      <Link
        href="https://github.com/ITHTaras"
        className="text-lg text-gray-300"
      >
        GitHub
      </Link>
    </div>
  );
}

export default Footer;
