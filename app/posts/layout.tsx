import Link from "next/link";
import { ReactNode } from "react";
const Blogs = () => <div>Blogs</div>;

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
