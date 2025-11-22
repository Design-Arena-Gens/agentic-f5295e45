import { Bot, Languages, Mic2, Radar, Sparkle, Wand2 } from "lucide-react";

const aiStack = [
  {
    title: "إنشاء خطط ذكية",
    description:
      "يحلل أهدافك، وقتك المتاح، ونمط تعلمك ليقترح مسارات أسبوعية قابلة للتعديل بثوانٍ.",
    icon: Radar,
  },
  {
    title: "محادثات ناطقة طبيعية",
    description:
      "مدرب افتراضي بنبرات متعددة، يغير سرعة الحديث ويقترح أسئلة متابعة لتطوير مهارة التواصل.",
    icon: Mic2,
  },
  {
    title: "ترجمة سياقية فورية",
    description:
      "يتعرف على السياق الثقافي ويقترح تعابير بديلة، مع تبرير نحوي في اللحظة نفسها.",
    icon: Languages,
  },
  {
    title: "مصمم دروس تلقائي",
    description:
      "ينشئ تلقائياً شرائح، بطاقات مفردات، وألعاب صغيرة مستندة إلى اهتماماتك الشخصية.",
    icon: Wand2,
  },
  {
    title: "ذكاء اجتماعي",
    description:
      "يلائم لهجتك اللغوية حسب المنطقة المستهدفة، ويقترح عبارات مهذبة ومناسباتية.",
    icon: Bot,
  },
  {
    title: "تحليلات متقدمة",
    description:
      "لوحة قيادة تعرض مستويات الثقة، سرعة الاستجابة، وتطور النطق عبر الزمن.",
    icon: Sparkle,
  },
];

export function AISuite() {
  return (
    <section
      id="ai"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <span className="rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-600 dark:bg-sky-900/50 dark:text-sky-300">
              محرك الذكاء الاصطناعي
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 dark:text-white">
              منظومة ذكية تدربك كما لو كنت مع مدرب خاص ومتفرغ لك
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              خوارزميات التكيف لدينا تراقب التقدم وتعدل المحتوى والسرعة لتبقيك
              في منطقة التدفق المثالية، مع تتبع كل مهارة على حدة.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                <p>
                  {/* comment? we should avoid comment if not needed. maybe short text */}
                  تركيز مستمر على جعل التعلم ممتعاً: ألعاب تتشكل حسب إجاباتك،
                  تمارين مصغرة أثناء الدروس، وتحفيز عبر مكافآت رقمية تفتح محتوى
                  حصرياً.
                </p>
              </div>
              <div className="rounded-2xl border border-sky-200 bg-sky-50/60 p-4 text-sky-700 dark:border-sky-800 dark:bg-sky-900/40 dark:text-sky-200">
                <strong>تكامل مع العالم الحقيقي:</strong> اربط حسابك ببرامج
                الاجتماعات أو البريد الإلكتروني لتحصل على تغذية راجعة حية.
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {aiStack.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sky-600 dark:border-slate-700 dark:bg-slate-800 dark:text-sky-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-auto text-xs font-semibold text-sky-500 dark:text-sky-300">
                    مدعوم بمحرك Lingo Master AI Core
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

