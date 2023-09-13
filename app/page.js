import LoginForm from "./components/LoginForm";
import Header from "./components/Header"
import RegistrationForm from "./components/RegistrationForm";


export default function Home(params) {
  return ( 
    <>
      <Header/>
      {/* <LoginForm /> */}
      <RegistrationForm />

    </>
  );
}
