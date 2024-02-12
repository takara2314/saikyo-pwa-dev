import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'オフラインです',
};

export default function Page() {
  return (
    <>
      <h1 className="mb-5 text-red-500 text-2xl font-bold">
        オフラインの諸君
      </h1>
      これがオフラインの世界じゃぞ
    </>
  );
}
