const roadmap = [
  {
    level: "A0-A1",
    title: "البدايات السلسة",
    description:
      "نظام بناء مفردات عبر بطاقات ذكية، أصوات متحدثين أصليين، وتمارين فهم بسيطة تركز على الثقة.",
    focus: ["الأبجدية والنطق", "مفردات الحياة اليومية", "ألعاب تكوين الجمل"],
  },
  {
    level: "A2-B1",
    title: "مرحلة الطلاقة الأساسية",
    description:
      "حوارات تمثيلية، سيناريوهات السفر، وتقييمات تلقائية لكل مهارة مع توصيات شخصية.",
    focus: ["قصص تفاعلية متعددة النهايات", "مختبر محادثة جماعي", "تصحيح لحظي للأخطاء"],
  },
  {
    level: "B2-C1",
    title: "الاحتراف المتقدم",
    description:
      "محاورات أكاديمية، كتابة مقالات، وتحديات مفردات متخصصة في أكثر من 20 قطاعاً مهنياً.",
    focus: ["تلخيص نصوص طويلة", "تدريبات ترجمة احترافية", "ورش عمل للنطق المتقدم"],
  },
  {
    level: "C1-C2",
    title: "الإتقان العالمي",
    description:
      "إدارة اجتماعات دولية افتراضية، عروض تقديمية، وتحليل ثقافي عميق للغة التي تتعلمها.",
    focus: ["محاكاة مقابلات عمل", "استراتيجيات كتابة الرسائل الرسمية", "تمارين تفاعل ثقافي"],
  },
];

export function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-[radial-gradient(circle_at_center,_rgba(14,116,144,0.18),_transparent_65%)] dark:bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.25),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-right">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            مسار كامل من الأساس حتى الإتقان
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            تقدم عبر مستويات عالمية متعارف عليها، واجعل كل مهارة تتطور معك عبر
            تحليلات ذكية، محتوى تفاعلي، وتوصيات تعمل كمدرب ملازم لك.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {roadmap.map((stage) => (
            <article
              key={stage.level}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-transparent hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-sky-200 px-3 py-1 text-xs font-semibold text-sky-700 dark:border-sky-700/60 dark:text-sky-300">
                  {stage.level}
                </span>
                <span className="text-sm font-semibold text-emerald-500">
                  + يتكيف مع تقدمك
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {stage.description}
                </p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {stage.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-end gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/70"
                  >
                    <span>{item}</span>
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500" />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
