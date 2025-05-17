import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  light?: boolean;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = true, 
  className,
  light = false
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-16", 
      center && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl md:text-4xl font-playfair font-bold mb-4",
        light ? "text-white" : "text-primary"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "max-w-2xl mx-auto",
          light ? "text-gray-300" : "text-foreground"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
