"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'
import { UploadButton } from '~/utils/uploadthing';

const TopNav = () => {
    const router = useRouter()
  return (
  <nav className="flex justify-between p-4 mb-4 items-center border-b text-2xl font-semibold">
    <div> Gallery</div>
    <div className='flex flex-row'>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <div className='flex flex-row justify-center items-center gap-4'>
                <UploadButton 
                    endpoint={"imageUploader"}
                    onClientUploadComplete={()=>{
                        router.refresh()
                    }}
                />
                <UserButton/>
            </div>
        </SignedIn>
    </div>
  </nav>
  )
}

export default TopNav;