import { DashboardLayout } from "../common/DashboardLayout";

export const Newsletter = () => {
  return (
    <DashboardLayout sectionClassName="mt-14" direction="flex-col">
      <div className="bg-newsletter">
        <div className="flex  justify-center items-center gap-8 p-12">
          <div>
            <h3 className="text-2xl text-neutral-tertiary font-bold">
              Subscribe newsletter
            </h3>
            <p className="mt-4 text-sm text-neutral-tertiary">
              Sign up for our newsletter to receive special offers
            </p>
          </div>
          <form action="#" className=" p-1 bg-neutral-tertiary">
            <input
              className="p-2"
              type="email"
              name="contact-email"
              placeholder="Your email address"
              autoCapitalize="off"
              required
            />
            <button
              type="submit"
              className="p-2 font-bold border-l-2 bg-neutral-tertiary hover:text-primary-hover transition-colors duration-300"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};
