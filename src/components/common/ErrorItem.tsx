type ErrorItemProps = {
  icon: React.ElementType;
  color: "text-red-500" | "text-blue-500" | "text-yellow-500";
  message: string;
};

export const ErrorItem = ({ icon, color, message }: ErrorItemProps) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2 ">
      <Icon className={`text-[2rem] ${color}`} />
      <p className={`${color}`}>{message}</p>
    </div>
  );
};
