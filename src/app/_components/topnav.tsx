"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'
import { UploadButton } from '~/utils/uploadthing';

const TopNav = () => {
    const router = useRouter()
  return (
  <nav className="flex justify-between p-4  items-center border-b ">
    <div className='text-2xl font-semibold'> Gallery</div>
    <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <div className='flex flex-row'>
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