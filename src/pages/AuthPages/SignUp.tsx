import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignUpForm from "../../components/auth/SignUpForm";

export default function SignUp() {
  return (
    <>
      <PageMeta
        title="HC Dashboard"
        description="This is React.js SignUp Tables Dashboard page - HC Dashboard"
      />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  );
}
