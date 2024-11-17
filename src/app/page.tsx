import { SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/quaries";

export const dynamic = "force-dynamic"

async function Images(){
  const images = await getMyImages()
  //console.log(images);
  return (
      <div className="flex flex-wrap gap-4 w-full justify-center">
        {images.map((image)=>(
          <div key={image.id} className="w-96 flex flex-col">
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
