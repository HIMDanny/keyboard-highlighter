import cn from "../utils/cn";

type KbdProps = React.ComponentProps<"kbd"> & {
  label?: string;
  isHighlighted?: boolean;
};

const Kbd = ({ className, label, isHighlighted, ...props }: KbdProps) => {
  return (
    <kbd
      className={cn(
        "inline-flex min-h-[2.2em] min-w-[2.2em] items-center justify-center rounded-lg border border-b-2 border-zinc-500 bg-zinc-800 px-2 text-2xl text-gray-100 transition-colors hover:bg-zinc-700",
        isHighlighted && "bg-zinc-700",
        className,
      )}
      {...props}
    >
      {label}
    </kbd>
  );
};

export { Kbd };
