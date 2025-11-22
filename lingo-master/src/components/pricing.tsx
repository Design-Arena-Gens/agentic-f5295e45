const tiers = [
  {
    name: "خطة مجانية",
    price: "0$",
    description: "ابدأ رحلتك بالمحتوى الأساسي المدعوم بالذكاء الاصطناعي.",
    cta: "انطلق الآن",
    popular: false,
    features: [
      "الوصول إلى 2 لغة في وقت واحد",
      "3 ألعاب تفاعلية أسبوعياً",
      "خطة تعلم ذكية أساسية",
      "تقارير تقدم شهرية",
      "مجتمع عالمي للممارسة",
    ],
  },
  {
    name: "خطة برو",
    price: "19$",
    description: "أطلق العنان لتجربة كاملة بقدرات الذكاء الاصطناعي المتقدمة.",
    cta: "فعّل الخطة المدفوعة",
    popular: true,
    features: [
      "عدد لغات غير محدود مع دعم اللهجات",
      "محادثات صوتية فورية مع تصحيح متقدم",
      "مصمم دروس تلقائي حسب أهدافك",
      "ألعاب ومهام يومية غير محدودة بمكافآت",
      "تقارير أداء لحظية ومقارنات عالمية",
      "تحميل الدروس والعمل دون اتصال",
    ],
  },
  {
    name: "إلى الشركات",
    price: "49$",
    description: "منصة تدريب لغات متكاملة للفرق والشركات العالمية.",
    cta: "تواصل مع مستشارنا",
    popular: false,
    features: [
      "لوحات تحكم للمديرين مع تحليلات عميقة",
      "تكامل مع Slack وTeams وZoom",
      "ألعاب تعاون وتحفيز ضمن الفريق",
      "محتوى متخصص في لغة الأعمال والصناعة",
      "تدريب مباشر مع خبراء لغويين",
      "دعم مخصص على مدار الساعة",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.2),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black sm:text-4xl">
            استثمر في نفسك وحقق طلاقة عالمية
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            اختر الخطة التي تناسبك، قم بالترقية في أي وقت، واستمتع بوضع داكن
            أنيق وتجربة مدفوعة مربحة عبر محتوى حصري ومكافآت خاصة بالأعضاء.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-[0_18px_50px_-30px_rgba(56,189,248,0.8)] backdrop-blur transition hover:-translate-y-1 ${
                tier.popular ? "border-sky-400/50 shadow-[0_35px_90px_-45px_rgba(14,165,233,0.8)]" : ""
              }`}
            >
              {tier.popular ? (
                <span className="absolute -top-4 right-6 inline-flex rounded-full bg-gradient-to-l from-sky-500 to-emerald-500 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  الأكثر شعبية
                </span>
              ) : null}
              <div>
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-300">{tier.description}</p>
              </div>
              <div className="text-4xl font-black">{tier.price}</div>
              <ul className="space-y-3 text-sm text-slate-200">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center justify-end gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span>{feature}</span>
                    <span className="h-2 w-2 rounded-full bg-gradient-to-l from-sky-500 to-emerald-400" />
                  </li>
                ))}
              </ul>
              <a
                href="#hero"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold ${
                  tier.popular
                    ? "bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 text-white shadow-lg"
                    : "border border-white/20 text-white hover:border-sky-400/70"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

