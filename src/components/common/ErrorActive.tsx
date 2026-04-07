import { DashboardLayout } from "./DashboardLayout";

type ErrorActiveProps = {
  error: Error | null;
};

export const ErrorActive = ({ error }: ErrorActiveProps) => {
  if (!error) return null;

  console.log(
    "%cApi answer:",
    "color: red; font-weight: bold;",
    error.message,
  );

  return (
    <DashboardLayout
      direction="flex-col"
      childrenClassName="text-center bg-neutral-secondary text-white py-12"
    >
      We have a problem and are trying to resolve it. Please refresh the page
      later.
    </DashboardLayout>
  );
};
