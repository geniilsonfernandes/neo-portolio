interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<IBadgeProps> = ({ label, icon, ...props }) => {
  return (
    <div
      className="flex justify-between bg-white items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-100 transition-all"
      {...props}
    >
      {icon}
      {label && <span>{label}</span>}
    </div>
  );
};
