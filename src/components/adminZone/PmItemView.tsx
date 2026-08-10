type PmItemViewProps = {
  title: string | number | boolean;
  desc: string;
};

export const PmItemView = ({ desc, title }: PmItemViewProps) => {
  return (
    <p>
      <span className="font-bold">{desc}:</span> {title}
    </p>
  );
};
