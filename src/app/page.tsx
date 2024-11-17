import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

async function Images(){
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id)
  });
  //console.log(images);
  return (
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {[...images,...images,...images].map((image)=>(
          <div key={image.id * Math.random()} className="w-96 flex flex-col">
            <img src={image.url} alt="" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  );
}

function LoggedOutText(){
  return (
    <div className="flex flex-col justify-center text-center min-h-screen text-5xl font-bold">
      Please Sign Up 
    </div>
  )
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <LoggedOutText/>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  )
}
