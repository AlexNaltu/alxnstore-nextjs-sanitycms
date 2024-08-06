"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const User = () => {
  return (
    <div>
      <div className="cursor-pointer">
        <div className="pt-2">
          <SignedOut>
            <SignInButton>
              <IoPersonCircleOutline size={35} />
            </SignInButton>
          </SignedOut>
        </div>
        <div className="pt-2">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default User;
