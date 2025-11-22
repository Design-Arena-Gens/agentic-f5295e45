const stats = [
  { value: "98%", label: "نسبة الالتزام للأعضاء المدفوعين خلال 6 أشهر" },
  { value: "150+", label: "عدد اللغات المدعومة مع لهجات متعددة" },
  { value: "12 دقيقة", label: "معدل بناء خطة مخصصة وتفعيلها" },
  { value: "500K+", label: "ساعات لعب تعليمية تم إنجازها على المنصة" },
];

export function ImpactStats() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-slate-50/80 p-5 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
            >
              <div className="text-2xl font-black text-slate-900 dark:text-white">
                {item.value}
              </div>
              <div className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

