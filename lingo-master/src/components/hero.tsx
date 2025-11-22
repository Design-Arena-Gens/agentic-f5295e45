"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { value: "ar", label: "العربية" },
  { value: "en", label: "الإنجليزية" },
  { value: "fr", label: "الفرنسية" },
  { value: "es", label: "الإسبانية" },
  { value: "de", label: "الألمانية" },
  { value: "it", label: "الإيطالية" },
  { value: "ja", label: "اليابانية" },
  { value: "ko", label: "الكورية" },
  { value: "zh", label: "الصينية (الماندرين)" },
  { value: "pt", label: "البرتغالية" },
  { value: "ru", label: "الروسية" },
  { value: "tr", label: "التركية" },
  { value: "hi", label: "الهندية" },
];

const goals = [
  { value: "travel", label: "السفر والاستكشاف" },
  { value: "career", label: "التطوير المهني" },
  { value: "study", label: "الدراسة والأبحاث" },
  { value: "culture", label: "الثقافة والترفيه" },
  { value: "friendship", label: "التواصل مع الأصدقاء والعائلة" },
];

const focuses = [
  { value: "speaking", label: "المحادثة" },
  { value: "listening", label: "الاستماع" },
  { value: "writing", label: "الكتابة" },
  { value: "grammar", label: "القواعد" },
  { value: "business", label: "لغة الأعمال" },
];

const aiInsights = {
  speaking: [
    "جلسات محادثة مدعومة بالذكاء الاصطناعي مع تصحيح فوري للنطق.",
    "تحديات يومية تتدرج بالصعوبة لمواقف الحياة الواقعية.",
  ],
  listening: [
    "بودكاست تفاعلي يولد حسب اهتماماتك ويختبر فهمك.",
    "تقنية تعزيز السمع بتقليل الضوضاء والتركيز على الكلمات المفتاحية.",
  ],
  writing: [
    "مصحح ذكي يقترح تحسينات أسلوبية وسياقية لحظياً.",
    "محرر تعليمي يتتبع تنوع الجمل ويقترح مفردات أنسب.",
  ],
  grammar: [
    "مخطط قواعد بصري يوضح الأزمنة والمعاني من خلال المخططات.",
    "روبوت مراجعة يكتشف الأخطاء الشائعة ويوضحها بأمثلة بسيطة.",
  ],
  business: [
    "قوالب رسائل وتقارير مهنية يتم تخصيصها حسب مجال عملك.",
    "مختبر عروض تقديمية بالذكاء الاصطناعي مع ملاحظات فورية على الأداء.",
  ],
};

type FocusKey = keyof typeof aiInsights;

export function HeroSection() {
  const [nativeLanguage, setNativeLanguage] = useState("ar");
  const [targetLanguage, setTargetLanguage] = useState("en");
  const [goal, setGoal] = useState("career");
  const [focus, setFocus] = useState<FocusKey>("speaking");
  const [planVersion, setPlanVersion] = useState(0);

  const aiPlan = useMemo(() => {
    const focusInsights = aiInsights[focus];
    const variationIndex = planVersion % focusInsights.length;
    const rotatedInsights = [
      ...focusInsights.slice(variationIndex),
      ...focusInsights.slice(0, variationIndex),
    ];
    const emphasis =
      focus === "speaking"
        ? "سلسلة محادثات مع مدرب افتراضي يحاكي أصوات المتحدثين الأصليين."
        : focus === "listening"
        ? "مختبر استماع يخلق مواقف صوتية أقرب إلى الواقع مع مقارنة أدائك بأهدافك الأسبوعية."
        : focus === "writing"
        ? "مساعد كتابة يحلل أسلوبك ويقترح تحسينات لغوية بثقة."
        : focus === "grammar"
        ? "تحليلات ذكية تكشف الأنماط وتضع خطة دقيقة لإتقان القواعد."
        : "مُسرّع لغوي للأعمال يخصص المصطلحات والاجتماعات الافتراضية لمجال عملك.";

    return {
      title: "خطة الذكاء الاصطناعي المخصصة",
      description: `انطلاقاً من لغتك الأم (${languageLabel(
        nativeLanguage,
      )}) وصولاً إلى ${languageLabel(targetLanguage)}, قمنا ببناء رحلة تعلم تحافظ على حماسك لتحقيق هدف ${goalLabel(
        goal,
      )}.`,
      focus,
      focusLabel: focusLabel(focus),
      suggestions: rotatedInsights,
      emphasis,
      stats: [
        { label: "جلسات أسبوعية", value: focus === "speaking" ? "4" : "3" },
        { label: "مدة الجلسة", value: focus === "business" ? "35 دقيقة" : "25 دقيقة" },
        { label: "ألعاب تفاعلية", value: focus === "grammar" ? "6" : "8" },
      ],
    };
  }, [focus, goal, nativeLanguage, targetLanguage, planVersion]);

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-transparent py-24 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.35),_transparent_60%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-2xl space-y-8 text-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-sky-600 shadow-sm backdrop-blur dark:bg-slate-900/60 dark:text-sky-300">
            <Sparkles className="h-4 w-4" />
            مدعوم بالكامل بالذكاء الاصطناعي
          </span>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            تعلم كل لغات العالم بمتعة وذكاء عبر{" "}
            <span className="bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Lingo Master
            </span>
          </h1>
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            منصة تعليم رقمية تأخذك من الصفر إلى الاحتراف عبر دروس متدرجة،
            تمارين متكيفة، وألعاب تفاعلية تبقيك متحمساً. اختر لغتك الأم، اللغة
            التي تحلم بإتقانها، واترك الذكاء الاصطناعي يرسم لك طريق النجاح.
          </p>
          <div className="flex flex-wrap justify-end gap-4 text-sm text-slate-600 dark:text-slate-300">
            <span className="rounded-full border border-slate-200/70 px-4 py-2 dark:border-slate-700">
              +150 لغة عالمية
            </span>
            <span className="rounded-full border border-slate-200/70 px-4 py-2 dark:border-slate-700">
              ألعاب ومهام ممتعة يومية
            </span>
            <span className="rounded-full border border-slate-200/70 px-4 py-2 dark:border-slate-700">
              مستويات من A0 إلى C2
            </span>
          </div>
          <div className="flex flex-col items-end gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-xl transition hover:shadow-2xl"
            >
              ابدأ رحلة التعلم الآن
            </a>
            <a
              href="#ai"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-600 dark:text-slate-200 dark:hover:border-sky-500 dark:hover:text-sky-300"
            >
              استكشف قدرات الذكاء الاصطناعي
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-xl rounded-3xl border border-sky-100 bg-white/90 p-6 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 lg:mt-6">
          <div className="absolute -right-6 top-10 hidden h-28 w-28 rounded-full bg-gradient-to-br from-sky-500/20 to-emerald-500/30 blur-2xl dark:block" />
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                نبني خطتك الخاصة خلال ثوانٍ
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                اختر الأساسيات وسيقترح Lingo Master خطة مدعومة بالذكاء
                الاصطناعي تناسب وقتك وأهدافك.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                لغتك الأم
                <select
                  value={nativeLanguage}
                  onChange={(event) => setNativeLanguage(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-medium text-slate-800 shadow-inner focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-sky-500 dark:focus:ring-sky-500/40"
                >
                  {languages.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                اللغة التي ترغب بتعلمها
                <select
                  value={targetLanguage}
                  onChange={(event) => setTargetLanguage(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-medium text-slate-800 shadow-inner focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/40"
                >
                  {languages.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                هدفك الرئيسي
                <select
                  value={goal}
                  onChange={(event) => setGoal(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-medium text-slate-800 shadow-inner focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/40"
                >
                  {goals.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
                المهارة التي تود التركيز عليها
                <select
                  value={focus}
                  onChange={(event) => setFocus(event.target.value as FocusKey)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base font-medium text-slate-800 shadow-inner focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-violet-500 dark:focus:ring-violet-500/40"
                >
                  {focuses.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <button
              type="button"
              onClick={() => setPlanVersion((count) => count + 1)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-l from-sky-500 via-cyan-500 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Sparkles className="h-4 w-4" />
              أنشئ خطة فورية جديدة
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={planVersion}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-inner dark:border-slate-700 dark:bg-slate-950/50"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {aiPlan.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{aiPlan.description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                  تركيز: {aiPlan.focusLabel}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-800">
                  هدف: {goalLabel(goal)}
                </span>
              </div>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                {aiPlan.emphasis}
              </p>
              <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                {aiPlan.suggestions.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 rounded-xl border border-slate-200/70 bg-white/80 p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900/60"
                  >
                    <span className="mt-1 inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-slate-500 dark:text-slate-400">
                {aiPlan.stats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-slate-200 bg-white/60 p-3 font-semibold text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-white"
                  >
                    <div className="text-base">{item.value}</div>
                    <div>{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function languageLabel(value: string) {
  const language = languages.find((item) => item.value === value);
  return language ? language.label : value;
}

function goalLabel(value: string) {
  const goalItem = goals.find((item) => item.value === value);
  return goalItem ? goalItem.label : value;
}

function focusLabel(value: FocusKey) {
  const focusItem = focuses.find((item) => item.value === value);
  return focusItem ? focusItem.label : value;
}
