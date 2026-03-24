import { DashboardLayout } from "./common/DashboardLayout";

type ErrorActiveProps = {
  mesage: string;
};

export const ErrorActive = ({ mesage }: ErrorActiveProps) => {
  return (
    <DashboardLayout
      direction="flex-col"
      childrenClassName="text-center bg-neutral-secondary text-white py-12"
    >
      {mesage}
    </DashboardLayout>
  );
};
