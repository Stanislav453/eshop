import { Link } from "@tanstack/react-router"

export const LogInContainer = () => {
  return (
    <div className="flex justify-center my-56" >
      <div className="w-full max-w-4xl p-12 bg-box-brand-color" >
          <h2 className="text-center font-bold text-3xl" >Login</h2>
          <form className="flex flex-col gap-8 mt-8" action="post">
            <ul className="flex flex-col gap-8 mt-8" >
              <li className="flex flex-col gap-2" >
                <label htmlFor="email" >Email</label>
                <input className="p-4" type="email" name="email" placeholder="Enter your email" required />
              </li>
              <li className="flex flex-col gap-2" >
                <label htmlFor="password" >Password</label>
                <input className="p-4" type="password" name="password" placeholder="Enter your password" required />
              </li>
            </ul>
            <button className="self-center mt-8 px-8 py-4 bg-brand-color text-white font-bold bg-neutral-primary hover:bg-primary-hover cursor-pointer transition-colors duration-300" type="submit" >Login</button>
          </form>
          <div className="flex justify-center mt-8" >
            <p className="text-neutral-primary" >Don't have an account? <Link className="text-brand-color font-bold hover:text-primary-hover cursor-pointer transition-colors duration-300" to="/sign-up" >Sign Up</Link></p>
          </div>
      </div>
    </div>
  )
}

