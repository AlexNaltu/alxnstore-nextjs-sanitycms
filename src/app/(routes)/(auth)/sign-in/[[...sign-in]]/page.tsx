import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <SignIn forceRedirectUrl={"/cart"} />
    </div>
  );
};

export default SignInPage;
