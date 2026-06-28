import LoginForm from "./LoginForm"
import { SignUpPrompt } from "./SignUpPrompt"

export const LogInContainer = () => {
  return (
    <div className="flex justify-center my-56" >
      <div className="w-full max-w-4xl p-12 bg-box-brand-color" >
          <h2 className="text-center font-bold text-3xl" >Login</h2>
          <LoginForm />
          <SignUpPrompt />
      </div>
    </div>
  )
}

