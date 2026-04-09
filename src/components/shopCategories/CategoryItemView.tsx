import mouse from "../../../public/icons/icon-mouse.webp";
import tvScreen from "../../../public/icons/icon-tv.webp";
import computer from "../../../public/icons/icon-pc.webp";
import camera from "../../../public/icons/icon-photo.webp";
import pendrive from "../../../public/icons/icon-pendrive.webp"
import headphone from "../../../public/icons/icon-headphones.webp"
import gameboy from "../../../public/icons/icon-gameboy.webp"
import printer from "../../../public/icons/icon-printer.webp"
import radio from "../../../public/icons/icon-radio.webp"


type CategoryItemProps = {
  isOpen: boolean;
};

export const CategoryItem = ({isOpen }: CategoryItemProps) => {
  const categoryPanel = isOpen ? "max-h-dvh" : "max-h-0";

  return (
    <ul
      className={`border px-2 overflow-hidden transition-all duration-300 ${categoryPanel}`}
    >
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={mouse} alt="Mouse" />
          Mouse
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={tvScreen} alt="Tv screen" />
          Tv screen
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={computer} alt="Computer" />
          Computer
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={camera} alt="Camera" />
          DSLR camera
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={pendrive} alt="Pendrive" />
          Pendrive
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={headphone} alt="Headphone" />
          Headphone
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={gameboy} alt="Gameboy" />
          Gameboy
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={printer} alt="Printer" />
          Printer
        </button>
      </li>
      <li  className="flex py-4 px-2 border-b">
        <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
          <img className="w-[25px] h-[25px]" src={radio} alt="Radio" />
          Radio
        </button>
      </li>
    </ul>
  );
};
