import { features } from '@/lib/data';

// Features section with alternating text and image layout
export default function Features() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        {/* Feature items - alternating layout */}
        <div className="space-y-32">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text content */}
                <div className={isEven ? 'lg:pr-12' : 'lg:pl-12 lg:order-2'}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Visual placeholder */}
                <div className={isEven ? '' : 'lg:order-1'}>
                  <div className="aspect-video rounded-2xl border border-border bg-secondary/20 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">
                      [Visual for: {feature.title}]
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
