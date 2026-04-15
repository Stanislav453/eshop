type ServicesIconProps = {
  title: string;
  desc: string;
  icon: React.ReactNode;
};

export const ServiceIcon = ({ title, desc, icon }: ServicesIconProps) => {
  return (
    <li className="flex gap-3">
      <div>{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-paragraph-primary" >{desc}</p>
      </div>
    </li>
  );
};
