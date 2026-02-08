import React from "react";

const RedView = () => {
  return (
    <div className="p-6 pt-12 mx:px-12 2xl:px-20 w-full mx-auto h-full overflow-y-scroll">
      <div className="rounded-2xl border border-red-200/70 bg-gradient-to-br from-red-50 via-red-100 to-red-200 p-8 shadow-sm dark:border-red-500/40 dark:from-red-950/60 dark:via-red-900/50 dark:to-red-800/40">
        <p className="text-xs uppercase tracking-[0.2em] text-red-500 dark:text-red-300">
          Red View
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-red-700 dark:text-red-100">
          A focused space for red-inspired ideas.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-red-700/80 dark:text-red-200/80">
          Use this view as a visual reset for high-energy prompts, alerts, or
          anything that benefits from a bold accent color. It is intentionally
          minimal so you can layer in custom content later.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-400/10 dark:text-red-200">
            Accent palette
          </span>
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-400/10 dark:text-red-200">
            High contrast
          </span>
          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 dark:bg-red-400/10 dark:text-red-200">
            Focus mode
          </span>
        </div>
      </div>
    </div>
  );
};

export default RedView;
