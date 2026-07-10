import { Link } from "@tanstack/react-router";

export const SignUpPrompt = () => {
  return (
    <div className="flex justify-center mt-8">
      <p className="text-neutral-primary">
        Don't have an account?{" "}
        <Link
          className="text-brand-color font-bold hover:text-primary-hover cursor-pointer transition-colors duration-300"
          to="/register"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
