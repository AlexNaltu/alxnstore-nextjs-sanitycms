import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex justify-center my-10">
      <SignUp forceRedirectUrl={"/cart"} />
    </div>
  );
};

export default SignUpPage;
