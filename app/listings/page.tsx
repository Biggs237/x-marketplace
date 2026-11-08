import Link from "next/link";

const mockListings = [
  { id: "1", title: "Vintage Camera", price: 120, description: "Great condition, from an X user in NYC", seller: "@example" },
  { id: "2", title: "Mechanical Keyboard", price: 85, description: "Custom build, barely used", seller: "@builder" },
  { id: "3", title: "Local Pickup: Bike", price: 250, description: "Mountain bike, local only", seller: "@rider" },
];

export default function Listings() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Listings</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {mockListings.map((item) => (
          <div key={item.id} className="border border-gray-700 rounded-lg p-4 hover:border-blue-500 transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-2xl text-green-400 my-2">${item.price}</p>
            <p className="text-gray-300 mb-2">{item.description}</p>
            <p className="text-sm text-blue-400">Seller: {item.seller}</p>
            <Link href={`/listings/${item.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View details
            </Link>
          </div>
        ))}
      </div>
      <Link href="/" className="block mt-8 text-blue-400">← Back home</Link>
    </div>
  );
}