import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { features } from "@/lib/data";
import Link from "next/link";

// Top feature showcase with large image
function FeatureShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          How Veridian Works
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Instantly analyze any company's sustainability with a single click.
          Veridian gives you the data you need, right when you need it.
        </p>
        {/* CTA button */}
        <div className="mt-8 flex justify-center">
          <Link href="/#">
            <Button>Read the journey</Button>
          </Link>
        </div>

        {/* Feature showcase image */}
        <div className="mt-14 flex justify-center">
          <Image
            src="/feature-1-showcase.jpg"
            alt="Company scan feature"
            width={1200}
            height={700}
            className="rounded-xl border bg-card shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

// Grid of feature cards with images
function FeatureGrid() {
  // Images for feature cards
  const featureImages = [
    {
      src: "/feature-card-1.jpg",
      alt: "Powerful Score Generation feature",
    },
    {
      src: "/feature-card-2.jpg",
      alt: "Comprehensive Company Scan feature",
    },
    {
      src: "/feature-card-3.jpg",
      alt: "Detailed Factor Breakdown feature",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Deep Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform goes beyond a simple score to provide comprehensive
            analysis and actionable data.
          </p>
        </div>
        {/* Feature cards grid (1-2-3 columns) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const featureImage = featureImages[index];
            return (
              <Card key={feature.title} className="flex flex-col overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
                {/* Feature image */}
                <Image
                  src={featureImage.src}
                  alt={featureImage.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                {/* Feature text content */}
                <div className="flex flex-1 flex-col p-6 text-left">
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl font-bold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 p-0 pt-4">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Combined features section
export default function Features() {
  return (
    <>
      <FeatureShowcase />
      <FeatureGrid />
    </>
  );
}
