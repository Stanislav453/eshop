import { TimeItemView } from "./TimeItemView";

type CountDownProps = {
  countdown: {
    d: string | number;
    h: string | number;
    m: string | number;
    s: string | number;
  };
};

export const CountDown = ({ countdown }: CountDownProps) => {
  return (
    <ul className="w-full flex justify-between px-6 mb-6">
      <TimeItemView timeUnit={countdown.d} name="DAY" />
      <TimeItemView timeUnit={countdown.h} name="HOUR" />
      <TimeItemView timeUnit={countdown.m} name="MIN" />
      <TimeItemView timeUnit={countdown.s} name="SEC" />
    </ul>
  );
};
