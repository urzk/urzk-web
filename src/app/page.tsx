import { Nav } from "~/components/layouts/Nav/Nav";

export default function Home() {
  return (
    <div>
      <Nav place="home" />
      <main className="flex flex-col grow p-3">
        <div className="cell-wrapper">
          <div className="cell prose prose-slate max-w-none max-sm:prose-sm">
            ここに本文が入るよ！
          </div>
        </div>
      </main>
    </div>
  );
}
