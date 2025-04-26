import ForgotPassword from "./ForgotPassword"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Please write your phone or email",
};

const page = () => {
  return (
    <><ForgotPassword/></>
  )
}

export default page