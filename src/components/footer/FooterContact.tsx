import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

export const FooterContact = () => {
  return (
    <div className="flex-1">
      <h4 className="text-lg font-bold ">Contact</h4>
      <ul className="flex flex-col gap-2 mt-3">
        <li>
          <p className="flex gap-2 ">
            <span>
              <CiLocationOn className="text-xl font-bold text-black" />
            </span>
            <span className="text-paragraph-primary">
              70 Washington square south, New york ny 10012, United states
            </span>
          </p>
        </li>
        <li className="flex gap-2 items-center">
          <span>
            <CiPhone className="text-xl font-bold text-black" />
          </span>
          <a
            href="tel:+123456789"
            className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300"
          >
            +123456789
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <span>
            <CiMail className="text-xl font-bold text-black" />
          </span>
          <a
            className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300"
            href="mailto:m.bluth@example.com"
          >
            m.bluth@example.com
          </a>
        </li>
      </ul>
    </div>
  );
};
