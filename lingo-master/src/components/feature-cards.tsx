import { BrainCircuit, Gamepad2, GraduationCap, Rocket } from "lucide-react";

const features = [
  {
    title: "مدرب ذكاء اصطناعي شخصي",
    description:
      "يتعرف على أسلوبك وسرعتك ثم يولد دروساً تفاعلية ونصوص محادثة من واقع حياتك اليومية.",
    icon: BrainCircuit,
    accent: "from-sky-500 to-cyan-500",
  },
  {
    title: "رحلة متدرجة من A0 إلى C2",
    description:
      "خارطة تعلم ديناميكية تغطي التأسيس، الإتقان، التحضير للاختبارات العالمية، ومهارات الترجمة المتقدمة.",
    icon: GraduationCap,
    accent: "from-emerald-500 to-lime-500",
  },
  {
    title: "ألعاب تعليمية ممتعة",
    description:
      "تحديات لغوية، سباقات مفردات، ومغامرات قصصية ترفع تحفيزك وتضمن استمرارك.",
    icon: Gamepad2,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "لوحة أداء تربحك",
    description:
      "أهداف أسبوعية، مكافآت رقمية، وتحليلات عمق توضح مهاراتك الأكثر تطوراً والمهام المقترحة لتحسينها.",
    icon: Rocket,
    accent: "from-amber-500 to-orange-500",
  },
];

export function FeatureCards() {
  return (
    <section
      id="features"
      className="border-y border-slate-200 bg-white/80 py-20 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            تجربة تعليمية مصممة للمتعة والالتزام
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Lingo Master يجمع كل ما تحتاجه: دروس مخصصة، ألعاب ملهمة، مسارات
            احتراف، وأدوات تحليل تبقيك على الطريق الصحيح.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/80"
            >
              <div
                className={`pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-gradient-to-br ${feature.accent} opacity-20 blur-3xl transition group-hover:opacity-30`}
              />
              <div className="relative flex h-full flex-col gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-sm transition group-hover:scale-105 group-hover:shadow-lg dark:border-slate-700 dark:bg-slate-800/80 dark:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-auto text-sm font-semibold text-sky-600 transition group-hover:text-sky-500 dark:text-sky-300">
                  اكتشف التفاصيل →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

