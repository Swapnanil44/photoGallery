import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import React from 'react'

const TopNav = () => {
  return (
  <nav className="flex justify-between p-4 mb-4 items-center border-b text-2xl font-semibold">
    <div> Gallery</div>
    <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
  </nav>
  )
}

export default TopNav;