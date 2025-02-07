import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20">
      <h1 className="text-3xl font-bold mb-8">Welcome to trendAI</h1>
      
      <p className="text-lg mb-6 text-center">
        Select your role and manage your campaigns efficiently.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Influencer Section */}
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Influencer</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/campaigns">
                <span className="text-blue-600 hover:underline">Campaign List</span>
              </Link>
            </li>
            <li>
              <Link href="/performance">
                <span className="text-blue-600 hover:underline">Performance Snapshot</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Brand/SME Section */}
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Brand/SME</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/submissions">
                <span className="text-blue-600 hover:underline">Submission Approval</span>
              </Link>
            </li>
            <li>
              <Link href="/campaign-snapshot">
                <span className="text-blue-600 hover:underline">Campaign Performance</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
