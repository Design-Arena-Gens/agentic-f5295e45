import Image from "next/image";

const testimonials = [
  {
    name: "سارة الهاشمي",
    role: "مصممة تجربة مستخدم، دبي",
    quote:
      "كنت أبحث عن طريقة ممتعة لتعلم اليابانية، وLingo Master منحني جلسات محادثة تشبه الواقع مع قصص تفاعلية جذبتني يومياً.",
    avatar: "/avatars/avatar-1.svg",
  },
  {
    name: "أحمد بن يوسف",
    role: "رائد أعمال، المغرب",
    quote:
      "الذكاء الاصطناعي يخطط أسابيعي بدقة. انتقلت من مستوى A2 إلى B2 في الإسبانية خلال 6 أشهر مع المحافظة على تحفيزي.",
    avatar: "/avatars/avatar-2.svg",
  },
  {
    name: "نجلاء محمد",
    role: "مديرة موارد بشرية، السعودية",
    quote:
      "برنامج الشركات جعل فريقي يتعلم الإنجليزية للأعمال مع تحديات ممتعة ولوحة تعقب فورية، النتائج كانت مبهرة.",
    avatar: "/avatars/avatar-3.svg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">
            أصوات ملهمة من مجتمع عالمي
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            ملايين المتعلمين يحققون أحلامهم اللغوية يومياً عبر تجربة ممتعة ومربحة.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                “{testimonial.quote}”
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-200 dark:border-slate-700">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="text-right">
                  <figcaption className="text-sm font-semibold text-slate-900 dark:text-white">
                    {testimonial.name}
                  </figcaption>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
