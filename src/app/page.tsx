import Command from "@/components/command";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col md:items-center justify-center py-24 px-4">
      <div>
        <h1 className="text-4xl font-bold">
          Tangerine 🍊
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          An in-memory vector database.
        </p>

        <div className=" flex flex-col gap-x-6 my-10">
          <p>
            So tangerine is currently in <span className="text-sky-400">development</span> .

          </p>

        </div>

        <div>
          <p className="my-2">
            But you can try the <span className="text-orange-400"> tangerine KV store</span>   written from scratch.
          </p>
          <p>
            Get started quickly with Docker:
          </p>
          <Command />
          <Link href="https://github.com/anuragts/tangerine" className="mt-6 text-sm  bg-gray-900 w-36 rounded-xl py-3 px-2 underline flex">
            <Star className="h-15 w-15 text-yellow-500" /> <p className="mt-1 mx-2">the repository</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
