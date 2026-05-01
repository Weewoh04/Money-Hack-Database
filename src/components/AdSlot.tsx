type AdSlotProps = {
  label?: string;
  size?: "banner" | "rectangle" | "sidebar";
};

const sizeStyles = {
  banner: "min-h-24",
  rectangle: "min-h-64",
  sidebar: "min-h-80",
};

export default function AdSlot({ label = "Advertisement", size = "banner" }: AdSlotProps) {
  return (
    <aside
      aria-label={label}
      className={`flex w-full items-center justify-center rounded-3xl border border-dashed border-ink/20 bg-white/65 p-4 text-center ${sizeStyles[size]}`}
    >
      <div>
        <p className="text-xs font-black uppercase tracking-wide text-ink/45">{label}</p>
        <p className="mt-2 text-sm font-bold text-ink/55">Ad space reserved</p>
      </div>
    </aside>
  );
}
