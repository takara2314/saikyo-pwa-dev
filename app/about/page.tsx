import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'このアプリについて',
};

export default function Page() {
  return (
    <>
      <h1 className="mb-5 text-yellow-600 text-2xl font-bold">
        このアプリについて
      </h1>
      書けたら書く（絶対書かない）
    </>
  );
}
