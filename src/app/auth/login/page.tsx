
import { Metadata } from "next";
import Login from "./Login";

export const metadata: Metadata = {
  title: "Login",
  description: "Please login to access your account",
};


const page = () => {
  return (
    <>
    <Login/>
    </>
  )
}

export default page