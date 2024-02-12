import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className="mb-5 text-emerald-600 text-2xl font-bold">
        オンラインの諸君
      </h1>
      これがオンラインの世界じゃぞ
      <section className="mt-10">
        <Link
          href="/about"
          className="px-10 py-2 text-emerald-900 font-bold bg-emerald-200 rounded-full"
        >
          このアプリについて
        </Link>
      </section>
    </>
  );
}
