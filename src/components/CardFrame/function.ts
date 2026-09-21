export const FRAME_COLORS = {
    W: {
        bg: "from-amber-100/90 via-stone-200/80 to-amber-50/90",
        border: "border-amber-200",
        header: "bg-gradient-to-r from-stone-200 via-amber-100 to-stone-300",
        textBg: "bg-stone-100/95",
        accent: "text-amber-800",
        badge: "bg-amber-100 text-amber-900 border-amber-300",
        glow: "shadow-amber-200/50"
    },
    U: {
        bg: "from-sky-900/80 via-blue-800/80 to-indigo-900/80",
        border: "border-sky-400/50",
        header: "bg-gradient-to-r from-sky-300 via-blue-200 to-sky-400 text-slate-900",
        textBg: "bg-slate-100/95 text-slate-900",
        accent: "text-blue-700",
        badge: "bg-blue-100 text-blue-900 border-blue-300",
        glow: "shadow-sky-500/50"
    },
    B: {
        bg: "from-neutral-900 via-slate-900 to-zinc-950",
        border: "border-purple-900/50",
        header: "bg-gradient-to-r from-zinc-400 via-slate-300 to-zinc-500 text-slate-950",
        textBg: "bg-zinc-200/95 text-zinc-950",
        accent: "text-zinc-800",
        badge: "bg-zinc-800 text-zinc-100 border-zinc-600",
        glow: "shadow-purple-950/50"
    },
    R: {
        bg: "from-red-900/90 via-orange-900/80 to-rose-950/90",
        border: "border-red-500/50",
        header: "bg-gradient-to-r from-rose-300 via-amber-200 to-orange-300 text-slate-900",
        textBg: "bg-amber-50/95 text-slate-900",
        accent: "text-red-700",
        badge: "bg-red-100 text-red-900 border-red-300",
        glow: "shadow-red-600/50"
    },
    G: {
        bg: "from-emerald-950/90 via-green-900/80 to-teal-950/90",
        border: "border-emerald-500/50",
        header: "bg-gradient-to-r from-emerald-200 via-green-100 to-teal-200 text-slate-900",
        textBg: "bg-emerald-50/95 text-slate-900",
        accent: "text-emerald-800",
        badge: "bg-emerald-100 text-emerald-900 border-emerald-300",
        glow: "shadow-emerald-600/50"
    },
    M: { // Multi / Gold
        bg: "from-amber-700/80 via-yellow-600/70 to-amber-800/80",
        border: "border-amber-400",
        header: "bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 text-slate-900",
        textBg: "bg-amber-50/95 text-slate-900",
        accent: "text-amber-900",
        badge: "bg-amber-100 text-amber-900 border-amber-400",
        glow: "shadow-amber-500/50"
    },
    A: { // Artifact
        bg: "from-slate-700/90 via-zinc-600/80 to-slate-800/90",
        border: "border-slate-400/60",
        header: "bg-gradient-to-r from-slate-300 via-zinc-200 to-slate-400 text-slate-900",
        textBg: "bg-slate-100/95 text-slate-900",
        accent: "text-slate-800",
        badge: "bg-slate-200 text-slate-900 border-slate-400",
        glow: "shadow-slate-400/50"
    },
    C: { // Colorless / Lands
        bg: "from-stone-800/90 via-stone-700/80 to-neutral-800/90",
        border: "border-stone-500/50",
        header: "bg-gradient-to-r from-stone-300 via-stone-200 to-stone-400 text-slate-900",
        textBg: "bg-stone-100/95 text-slate-900",
        accent: "text-stone-800",
        badge: "bg-stone-200 text-stone-900 border-stone-400",
        glow: "shadow-stone-400/50"
    }
};

export type FrameColor = keyof typeof FRAME_COLORS;