import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithRef<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "main";
};

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag className={cn("container-x", className)} {...props}>
      {children}
    </Tag>
  );
}
