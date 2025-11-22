"use client";

import { motion } from "framer-motion";
import { Joystick, Sparkle, Trophy, Users } from "lucide-react";

const games = [
  {
    title: "مغامرة الكلمات",
    description:
      "استكشف عوالم قصصية حيث تفتح الأبواب بالمفردات الصحيحة وتربح مكافآت لتطوير شخصيتك.",
    icon: Joystick,
    intensity: "30 مستوى أسبوعي",
  },
  {
    title: "تحدي النطق الفوري",
    description:
      "سجل صوتك، واحصل على معدل دقة لحظي مدعوم بالذكاء الاصطناعي مع اقتراحات لتحسين مخارج الحروف.",
    icon: Sparkle,
    intensity: "تحليل صوتي ثلاثي الأبعاد",
  },
  {
    title: "بطولة المحادثة العالمية",
    description:
      "انضم إلى غرف محاكاة عبر تقنية الهولوجرام الصوتي وتنافس مع متعلمين من 120 دولة.",
    icon: Users,
    intensity: "جلسات مباشرة كل ساعة",
  },
  {
    title: "سباق المفردات",
    description:
      "اختبر سرعتك في اختيار المعاني الصحيحة خلال سباق حىّ، وارتقِ في لوحة الشرف الأسبوعية.",
    icon: Trophy,
    intensity: "لوحة شرف عالمية",
  },
];

export function InteractiveGames() {
  return (
    <section
      id="games"
      className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-slate-950 to-slate-900 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.2),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-right">
          <span className="w-fit self-end rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
            ألعاب تفاعلية
          </span>
          <h2 className="text-3xl font-black leading-tight sm:text-4xl">
            تعلم بينما تلعب، واربح خبرة حقيقية
          </h2>
          <p className="text-lg text-slate-200">
            كل لعبة تشغل مهارة لغوية محددة، وتتكيف مع مستواك لتحافظ على المتعة
            والتحدي. اربح نقاط طاقة، افتح شخصيات جديدة، وشارك في بطولات أسبوعية.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {games.map((game, index) => (
            <motion.article
              key={game.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur"
            >
              <div className="pointer-events-none absolute -left-10 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-sky-500/40 to-emerald-500/30 blur-3xl transition group-hover:scale-125" />
              <div className="relative flex h-full flex-col gap-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white transition group-hover:-translate-y-1 group-hover:bg-white/20">
                  <game.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    {game.description}
                  </p>
                </div>
                <div className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold text-sky-200 transition group-hover:bg-white/20 group-hover:text-white">
                  {game.intensity}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

