import GoogleButton from "react-google-button";
import { useAuth } from "../providers";
import { useState } from "react";

const SignInPage = () => {
  const { googleSignIn } = useAuth();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = async () => {
    setIsDisabled(true);
    await googleSignIn();
    setIsDisabled(false);
  };

  return (
    <section>
      <h1>SIGN IN PAGE</h1>
      <GoogleButton
        onClick={handleClick}
        type={"light"}
        label={"Sign in with Google"}
        disabled={isDisabled}
      />
    </section>
  );
};

export default SignInPage;
