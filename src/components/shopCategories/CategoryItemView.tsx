type CategoryItemViewProps = {
    title: string
    src: string
}

export const CategoryItemView = ({ title, src }: CategoryItemViewProps) => {
  return (
    <li className="flex py-4 px-2 border-b">
      <button className="flex gap-2 font-semibold text-neutral-primary hover:text-primary-hover cursor-pointer transition-colors duration-300">
        <img className="w-[25px] h-[25px]" src={src} alt={title} />
        {title}
      </button>
    </li>
  );
};

