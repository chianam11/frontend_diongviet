
import { Metadata } from "next";
import Register from "./Register";

export const metadata: Metadata = {
  title: "Register",
  description: "Create new account",
};

const page = () => {
  return (
    <>
        <Register/>
    </>
  )
}

export default page