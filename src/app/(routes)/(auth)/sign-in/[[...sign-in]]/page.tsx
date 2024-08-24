import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex justify-center my-10">
      <SignIn forceRedirectUrl={"/cart"} />
    </div>
  );
};

export default SignInPage;
