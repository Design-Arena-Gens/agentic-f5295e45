const footerLinks = [
  {
    title: "المنصة",
    links: [
      { name: "عن Lingo Master", href: "#" },
      { name: "خارطة الطريق", href: "#" },
      { name: "المجتمع", href: "#" },
      { name: "الشركاء", href: "#" },
    ],
  },
  {
    title: "الموارد",
    links: [
      { name: "مركز المساعدة", href: "#" },
      { name: "الدروس المباشرة", href: "#" },
      { name: "المدونة", href: "#" },
      { name: "تحميلات الهواتف", href: "#" },
    ],
  },
  {
    title: "القانونية",
    links: [
      { name: "شروط الاستخدام", href: "#" },
      { name: "الخصوصية", href: "#" },
      { name: "الملفات التعريفية", href: "#" },
      { name: "الأمان", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-sm space-y-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 text-lg font-semibold text-white shadow-lg">
                LM
              </span>
              <span className="text-lg font-bold">Lingo Master</span>
            </div>
            <p className="text-sm text-slate-300">
              منصة تعليم لغات عالمية تركز على المتعة، الذكاء الاصطناعي، ومسارات
              تربحك خبرة حقيقية خطوة بخطوة.
            </p>
            <div className="text-xs text-slate-500">
              © {new Date().getFullYear()} Lingo Master. جميع الحقوق محفوظة.
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-slate-200">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="transition hover:text-white hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>مدعوم بتكنولوجيا Lingo Master AI Labs.</div>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-white">
              تويتر
            </a>
            <a href="#" className="transition hover:text-white">
              لينكدإن
            </a>
            <a href="#" className="transition hover:text-white">
              يوتيوب
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

