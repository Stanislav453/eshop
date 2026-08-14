import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../../store/useWishlist";
import { createImageUrl } from "../../utils/createImageUrl";
import type { WishlistItemType } from "../../type";

type WishlistItemProps = {
  item: WishlistItemType;
};

export const WishlistItem = ({ item }: WishlistItemProps) => {
  const toggleWishlist = useWishlist((state) => state.toggleWishlist);

  return (
    <li className="flex items-center gap-4 border-b py-4">
      <img
        className="w-20 h-20 object-contain border"
        src={createImageUrl({ url: item.thumbnail, height: 130 })}
        alt={item.title}
      />
      <p className="flex-1 font-semibold truncate">{item.title}</p>
      <div className="flex flex-col items-end gap-2">
        <p className="font-semibold">{item.price.toFixed(2)}$</p>
        <button
          onClick={() => toggleWishlist(item)}
          aria-label="Remove from wishlist"
          className="text-primary-hover"
        >
          <FaHeart className="text-[1.3rem]" />
        </button>
      </div>
    </li>
  );
};
