import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

const mockUrls = [
  "https://utfs.io/f/v68bdIJZrOQ5PGP4O7FSqVRwbafOTolp9Dm3hzJ8u6x2ePjG",
  "https://utfs.io/f/v68bdIJZrOQ54oVvDSIjCb9O3UY1S80MqZ2Ks7TgEtf5nzG6",
  "https://utfs.io/f/v68bdIJZrOQ5PGP4O7FSqVRwbafOTolp9Dm3hzJ8u6x2ePjG",
  "https://utfs.io/f/v68bdIJZrOQ54oVvDSIjCb9O3UY1S80MqZ2Ks7TgEtf5nzG6"
]

const mockImages = mockUrls.map((url,index)=>(
 {
  id: index+1,
  url
 }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {posts.map((post)=>(
          <div key={post.id} className="text-2xl" >
             {post.name}
          </div>
        ))}
        {[...mockImages,...mockImages,...mockImages].map((image)=>(
          <div key={Math.random()} className="w-96">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </main>
  );
}
