import Nav from "~/components/layouts/Nav";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Nav place="home" />
      <main className="flex flex-col grow p-3">
        <div className="cell-wrapper">
          <div className="cell prose prose-slate max-w-none">
            <p>
              <strong>こちらは、urzk/虚月希音のWebサイトです。</strong>
              <br />
              <Link href="/posts/profile" className="hover:underline">
                自己紹介
              </Link>
              <br />
              <Link href="/posts/works" className="hover:underline">
                制作物など
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
