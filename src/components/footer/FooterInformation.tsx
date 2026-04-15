export const FooterInformation = () => {
  return (
    <div className="flex-1" >
      <h4 className="text-lg font-bold ">Information</h4>
      <ul className="flex flex-col gap-2 mt-3">
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            Faqs
          </a>
        </li>
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            News
          </a>
        </li>
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            Return policy
          </a>
        </li>
        <li>
          <a href="#" className="text-paragraph-primary hover:text-primary-hover transition-colors duration-300">
            Privacy polici
          </a>
        </li>
      </ul>
    </div>
  );
};
