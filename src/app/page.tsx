const features = [
  {
    icon: "🏫",
    title: "Track daycares",
    text: "Keep every daycare you're considering in one list.",
  },
  {
    icon: "⏳",
    title: "Waitlist status",
    text: "See at a glance where you stand with each one.",
  },
  {
    icon: "🔔",
    title: "Follow-up reminders",
    text: "Never forget to call back or check your spot.",
  },
  {
    icon: "💵",
    title: "Compare costs",
    text: "Tuition, fees and deposits side by side.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-10">
      <header className="text-center">
        <p className="text-5xl" aria-hidden="true">
          🧸
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Daycare Hunt</h1>
        <p className="mt-2 text-base text-foreground/70">
          Your calm, organized home base for finding the right daycare.
        </p>
      </header>

      <ul className="mt-8 space-y-3">
        {features.map((f) => (
          <li
            key={f.title}
            className="flex items-start gap-3 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-4"
          >
            <span className="text-2xl" aria-hidden="true">
              {f.icon}
            </span>
            <div>
              <h2 className="font-semibold">{f.title}</h2>
              <p className="text-sm text-foreground/70">{f.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        disabled
        className="mt-8 w-full rounded-full bg-teal-600 px-6 py-3 text-base font-semibold text-white opacity-60"
      >
        Add your first daycare (coming soon)
      </button>
    </main>
  );
}
