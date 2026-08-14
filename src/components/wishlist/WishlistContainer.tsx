import { Link } from "@tanstack/react-router";
import { useWishlist } from "../../store/useWishlist";
import { WishlistItem } from "./WishlistItem";

export const WishlistContainer = () => {
  const wishlist = useWishlist((state) => state.wishlist);

  return (
    <>
      <header>
        <h2 className="text-section-title font-bold text-neutral-primary mt-16 mb-4">
          Your wishlist
        </h2>
      </header>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-2 py-20 text-center">
          <p className="text-lg text-neutral-primary">
            Your wishlist is currently empty!
          </p>
          <p className="text-paragraph-primary">
            Continue browsing{" "}
            <Link to="/" className="text-primary-hover underline">
              here
            </Link>
            .
          </p>
        </div>
      ) : (
        <ul className="w-full flex flex-col border-t">
          {wishlist.map((item) => (
            <WishlistItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
};
