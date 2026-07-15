import { cards } from '@/constants/dashboard';

const DashboardPage = () => {
  return (
    <>
      {/* Top Cards Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          cards.map((card) => {
            const Icon = card.icon;
            return (
              <div 
                key={card.title}
                className="rounded-3xl border border-default-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex items-center justify-between overflow-hidden relative"
              >
                {/* Decorative Soft Background Glow on Hover */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500" />

                <div className="space-y-2 relative z-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-default-400">
                    {card.title}
                  </p>
                  <h2 className="text-3xl font-extrabold text-default-900 tracking-tight">
                    {card.value}
                  </h2>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white text-primary relative z-10">
                  <Icon size={24} className="transition-transform duration-300 group-hover:rotate-6" />
                </div>
              </div>
            );
          })
        }
      </div>

      {/* Bottom Main Board Section */}
      <div className="mt-8 border border-default-200 rounded-3xl p-6 sm:p-8 bg-default-50/60 shadow-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
        
        <div className="relative z-10 space-y-2">
          <h2 className="text-2xl font-bold text-default-900 tracking-tight group-hover:text-primary transition-colors duration-300">
            Library Dashboard Overview
          </h2>
          <p className="text-sm sm:text-base text-default-500 max-w-2xl leading-relaxed">
            Here you can add books, manage existing books, and monitor all borrowed books from one integrated system panel.
          </p>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;