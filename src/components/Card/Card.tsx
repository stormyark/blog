import "../../app/globals.css";

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border backdrop-blur p-6 shadow-sm border-gray-500 bg-(--card-background) ${className}`}
    >
      {title && <h3 className="mb-4 text-lg font-medium">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
