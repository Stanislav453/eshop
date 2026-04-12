type TimeItemViewType = {
  timeUnit: number | string;
  name: string;
};

export const TimeItemView = ({ timeUnit, name }: TimeItemViewType) => {
  return (
    <li className="flex flex-col items-center justify-center p-3 bg-box-brand-color border ">
      <span className="font-bold text-xl text-center">{timeUnit}</span>
      <span className="text-sm text-paragraph-primary">{name}</span>
    </li>
  );
};
