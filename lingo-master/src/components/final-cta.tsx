export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-cyan-500 to-emerald-500 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-4 text-center">
        <h2 className="text-3xl font-black sm:text-4xl">
          انضم إلى Lingo Master اليوم وابدأ ببناء مستقبلك العالمي
        </h2>
        <p className="text-lg leading-8 text-white/85">
          قم بتخصيص خطتك، العب، تعلم، واربح مكافآت رقمية. الذكاء الاصطناعي
          سيرافقك خطوة بخطوة ليضمن تحقيق أهدافك من أول يوم وحتى الاحتراف.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#hero"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-sky-600 transition hover:bg-white/90"
          >
            ابدأ مجاناً الآن
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            اكتشف العروض المدفوعة
          </a>
        </div>
      </div>
    </section>
  );
}

