export const BrandView = ({ src }: { src: string }) => {
  return (
    <li className="embla__shop_brand">
      <div className="embla__slide__number_brand">
        <div>
          <img
            src={src}
            alt="logo"
            className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </div>
      </div>
    </li>
  );
};
