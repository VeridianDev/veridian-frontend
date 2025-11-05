import Link from "next/link";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/page-layout";

export default function LegalPage() {
  return (
    <PageLayout>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-headline scroll-m-20 text-4xl font-extrabold tracking-tighter">
          Legal Information
        </h1>

        <section className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold">Copyright Notice</h2>
          <p className="text-muted-foreground">
            Veridian Website (Source Code)
            <br />
            Copyright &copy; 2025 Veridian
          </p>

          <h2 className="text-2xl font-bold">Open Source License</h2>
          <p className="text-muted-foreground">
            This website is free software: you can redistribute it and/or modify
            it under the terms of the GNU Affero General Public License as
            published by the Free Software Foundation, either version 3 of the
            License, or (at your option) any later version.
          </p>
          <p className="text-muted-foreground">
            This program is distributed in the hope that it will be useful, but
            WITHOUT ANY WARRANTY; without even the implied warranty of
            MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
            Affero General Public License for more details.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Read Full License</Button>
            </a>
          </div>

          <h2 className="text-2xl font-bold">Source Code Access</h2>
          <p className="text-muted-foreground">
            As required by the GNU Affero General Public License version 3, the
            complete source code for this website is available for download.
          </p>
          <p className="text-muted-foreground">
            You can access the source code, contribute, or learn more about this
            project at:
          </p>

          <div className="rounded-lg bg-muted p-4">
            <code className="text-sm">
              https://github.com/VeridianDev/veridian-frontend
            </code>
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/VeridianDev/veridian-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Source Code on GitHub</Button>
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-8">Questions?</h2>
          <p className="text-muted-foreground">
            If you have questions about licensing or need additional information,
            please contact us at{" "}
            <a
              href="mailto:help@veridian.org"
              className="underline"
            >
              help@veridian.org
            </a>
            .
          </p>
        </section>

        <div className="mt-12">
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
