import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="text-xl font-semibold text-purple-700">
        Transverse Pay
      </div>

      <div className="flex space-x-6 text-purple-700">
        <Link href="" className="hover:text-purple-900">
          Documentation
        </Link>
        <Link href="" className="hover:text-purple-900">
          Blog
        </Link>
      </div>

      <div className="flex space-x-4">
        <button className="px-4 min-w-[159px] py-2 border border-purple-700 text-purple-700 rounded-full hover:bg-purple-100">
          Login
        </button>
        <button className="px-4 min-w-[159px] py-2 bg-purple-700 text-white rounded-full hover:bg-purple-900">
          Create Account
        </button>
      </div>
    </nav>
  );
}
