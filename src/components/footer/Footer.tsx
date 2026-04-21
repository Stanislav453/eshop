import { DashboardLayout } from "../common/DashboardLayout";
import { FooterCategory } from "./FooterCategory";
import { FooterContact } from "./FooterContact";
import { FooterDescription } from "./FooterDescription";
import { FooterInformation } from "./FooterInformation";

export const Footer = () => {
  return (
    <DashboardLayout sectionClassName="bg-box-brand-color">
      <footer className="flex  flex-wrap py-16">
        <FooterDescription />
        <FooterInformation />
        <FooterCategory />
        <FooterContact />
      </footer>
    </DashboardLayout>
  );
};
