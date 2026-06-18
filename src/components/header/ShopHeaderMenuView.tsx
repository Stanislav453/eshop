import { Link } from '@tanstack/react-router'
import { CiCircleRemove, CiHeadphones } from 'react-icons/ci'

type ShopHeaderMenuViewProps = {
  setIsOpen: (isOpen: boolean) => void;
};

export const ShopHeaderMenuView = ({ setIsOpen }: ShopHeaderMenuViewProps) => {
  return (
        <div className="w-full h-full fixed top-0 left-0 z-[50] bg-black-rgba">
          <nav className="bg-white w-[315px] h-full">
            <div className="w-full flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <CiCircleRemove className="text-[2.5rem] m-3" />
              </button>
            </div>
            <a
              href="tel:+123456789"
              className="flex items-center justify-center gap-2 w-full p-2 text-neutral-tertiary bg-gradient-to-r from-blue-600 to-red-600"
            >
              <span>
                <CiHeadphones className="text-[1.5rem]" />
              </span>
              <span className="text-[1.3rem]">+123456789</span>
            </a>
            <ul className="font-bold">
              <li>
                <Link to="/" className="block py-3 pl-2 border-b">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="block py-3 pl-2 border-b">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="block py-3 pl-2 border-b">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/blog" className="block py-3 pl-2 border-b">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/pages" className="block py-3 pl-2 border-b">
                  Pages
                </Link>
              </li>
            </ul>
          </nav>
        </div>
  )
}

