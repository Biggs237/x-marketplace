import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">X Marketplace</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        List items, buy from the X community, and share listings directly on X.
        Sign in with your X account to get started.
      </p>
      <div className="flex gap-4">
        <Link href="/listings" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold">
          Browse Listings
        </Link>
        <Link href="/api/auth/signin" className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold">
          Sign in with X
        </Link>
      </div>
    </main>
  );
}