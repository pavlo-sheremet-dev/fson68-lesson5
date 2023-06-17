import GoogleButton from "react-google-button";

const SignInPage = () => {
  return (
    <section>
      <h1>SIGN IN PAGE</h1>
      <GoogleButton
        onClick={() => {
          console.log("sign in");
        }}
        type={"light"}
        label={"Sign in with Google"}
      />
    </section>
  );
};

export default SignInPage;
