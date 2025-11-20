import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

// Team member data
const teamMembers = [
  {
    name: 'Risith Kankanamge',
    imageUrl: '/risith-portrait.jpg',
    alt: 'Portrait of Risith',
  },
  {
    name: 'Santhosh',
    imageUrl: '/santhosh-portrait.jpg',
    alt: 'Portrait of Santhosh',
  },
  {
    name: 'Ritvik',
    imageUrl: '/ritvik-portrait.jpg',
    alt: 'Portrait of Ritvik',
  },
];

// Team page
export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Meet the Team
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We are a passionate team dedicated to making a difference.
            </p>
          </div>
          {/* Team member grid (1-3 columns) */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="flex flex-col items-center overflow-hidden text-center shadow-lg transition-shadow hover:shadow-xl"
              >
                {/* Portrait image */}
                <CardHeader className="p-0 pt-6">
                  <div className="relative w-[150px] h-[150px] mx-auto">
                    <Image
                      src={member.imageUrl}
                      alt={member.alt}
                      fill
                      className="rounded-full object-cover"
                      sizes="150px"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col p-6">
                  <CardTitle className="text-xl font-bold">
                    {member.name}
                  </CardTitle>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
