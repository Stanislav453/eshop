import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import elesaLogo from "../../../public/elesaLogo.webp";

export const FooterDescription = () => {
  return (
    <div className="flex-1" >
      <div className="w-[107px] h-[30px]">
        <img
          src={elesaLogo}
          alt="Elesa Logo"
          className="w-full h-full mb-4 object-cover"
        />
      </div>
      <p className="py-4 text-paragraph-primary ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <ul className="flex gap-2">
        <li>
          <a
            href="www.facebook.com"
            className="block border p-2 border-paragraph-primary rounded-full hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500"
          >
            <CiFacebook className="text-2xl text-paragraph-primary group-hover:text-neutral-tertiary" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/"
            className="block border p-2 border-paragraph-primary rounded-full hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500"
          >
            <CiInstagram className="text-2xl text-paragraph-primary group-hover:text-neutral-tertiary" />
          </a>
        </li>
        <li>
          <a
            href="www.facebook.com"
            className="block border p-2 border-paragraph-primary rounded-full hover:bg-gradient-to-r from-blue-600 to-red-600 group  transition-all duration-500"
          >
            <CiTwitter className="text-2xl text-paragraph-primary group-hover:text-neutral-tertiary" />
          </a>
        </li>
      </ul>
    </div>
  );
};
