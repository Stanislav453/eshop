import { motion, AnimatePresence } from "motion/react";
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useGetProductDetail } from "../../store/useGetProductDetail";
import { useWishlist } from "../../store/useWishlist";
import { DetailProductCounter } from "./DetailProductCounter";

export const DetailProduct = () => {
  const { productDetail, closeproductDetail } = useGetProductDetail();
  const productId = productDetail?.id;
  const isLiked = useWishlist(
    (state) =>
      !!productId && state.wishlist.some((item) => item.id === productId)
  );
  const toggleWishlist = useWishlist((state) => state.toggleWishlist);

  return (
    <AnimatePresence>
      {productDetail && (
        <motion.div
          initial={{ opacity: 0 }}  
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        >
          <div className="relative bg-white rounded-2xl w-full max-w-[750px]">
            <div className="flex justify-between border-b ">
              <div className="p-3">
                <p className="font-bold text-xl">Quickview</p>

                <button
                  onClick={closeproductDetail}
                  className="absolute top-4 right-4 text-2xl text-neutral-secondary hover:text-neutral-tertiary transition-all duration-100"
                >
                  <IoClose />
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full flex-1 gap-4 p-6">
              <div className="border p-3">
                <img
                  className="w-full max-w-[200px] h-auto"
                  src={productDetail.thumbnail}
                  alt={productDetail.title}
                />
              </div>
              <div className="w-full flex-1">
                <h3 className="text-xl font-bold">{productDetail.title}</h3>
                <p className="mb-2">{productDetail.category}</p>
                <p className="w-full border-b pb-2">
                  ${productDetail.price.toFixed(2)}
                </p>
                <DetailProductCounter />
                <div className="flex items-center gap-2 mt-4">
                  <button className="font-bold px-6 py-3 bg-neutral-primary text-white  hover:bg-primary-hover transition-all duration-300">
                    Add to card
                  </button>
                  <button
                    onClick={() =>
                      productDetail &&
                      toggleWishlist({
                        id: productDetail.id,
                        title: productDetail.title,
                        thumbnail: productDetail.thumbnail,
                        price: productDetail.price,
                      })
                    }
                    className={`transition-all duration-300 ${
                      isLiked ? "text-primary-hover" : "text-black hover:text-primary-hover"
                    }`}
                  >
                    {isLiked ? (
                      <FaHeart className="text-[2rem]" />
                    ) : (
                      <CiHeart className="text-[2rem]" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
