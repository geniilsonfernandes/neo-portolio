interface IBadgeProps {
  label?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<IBadgeProps> = ({ label, icon, ...props }) => {
  return (
    <div
      className="rounded-full bg-gray-100 px-3 py-1 text-sm flex items-center gap-1"
      {...props}
    >
      {icon}
      {label && <span>{label}</span>}
    </div>
  );
};
