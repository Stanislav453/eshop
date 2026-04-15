import { DashboardLayout } from "../common/DashboardLayout";
import { FooterCategory } from "./FooterCategory";
import { FooterContact } from "./FooterContact";
import { FooterDescription } from "./FooterDescription";
import { FooterInformation } from "./FooterInformation";

export const Footer = () => {
  return (
    <footer className="bg-box-brand-color ">
      <DashboardLayout childrenClassName="py-16" sectionClassName="mt-16" direction="flex-row">
        <FooterDescription />
        <FooterInformation />
        <FooterCategory />
        <FooterContact />
      </DashboardLayout>
    </footer>
  );
};
