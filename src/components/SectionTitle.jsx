function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionTitle
