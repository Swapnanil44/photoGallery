import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  //console.log(images);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4 w-full justify-center">
        
        {[...images,...images,...images].map((image)=>(
          <div key={image.id} className="w-96 flex flex-col">
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
      <div>
        
      </div>
    </main>
  );
}
