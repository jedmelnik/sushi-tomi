import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { menus, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Lunch, dinner, sushi, and drinks menus from Sushi Tomi in Mountain View. Call (650) 968-3227 to order.",
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Menu"
          lede="Current lunch, dinner, sushi, and drink menus from the restaurant floor."
          // Focal: sashimi / tuna and shiso in open right half
          image={{
            src: "/images/sashimi-platter.jpg",
            alt: "Fresh sashimi platter with tuna, yellowtail, and shiso",
            focal: "68% 42%",
          }}
          actions={
            <Button
              render={<a href={site.phoneHref} />}
              size="lg"
              className="h-11 rounded-md bg-lacquer px-5 text-sm font-semibold text-white hover:bg-lacquer/90"
            >
              Call to order
            </Button>
          }
        />

        <div className="site-wrap py-4 md:py-6">
          <nav
            aria-label="Menu sections"
            className="flex flex-wrap gap-2 border-b border-border/70 pb-4"
          >
            {menus.map((menu) => (
              <a
                key={menu.id}
                href={`#${menu.id}`}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-muted hover:text-ink"
              >
                {menu.title}
              </a>
            ))}
          </nav>
        </div>

        {menus.map((menu, index) => (
          <section
            key={menu.id}
            id={menu.id}
            className={`scroll-mt-24 py-12 md:py-16 ${
              index % 2 === 1 ? "border-y border-border/70 bg-card/50" : ""
            }`}
          >
            <div className="site-wrap">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <h2 className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                    {menu.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-foreground/75">
                    {menu.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {menu.pdf ? (
                    <Button
                      render={
                        <a href={menu.pdf} target="_blank" rel="noopener noreferrer" />
                      }
                      variant="outline"
                      className="h-10 rounded-md border-border bg-transparent px-4 text-sm font-semibold text-ink hover:bg-muted"
                    >
                      <Download className="size-4" aria-hidden />
                      Download PDF
                    </Button>
                  ) : null}
                  {"extraPdf" in menu && menu.extraPdf ? (
                    <Button
                      render={
                        <a
                          href={menu.extraPdf.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      variant="outline"
                      className="h-10 rounded-md border-border bg-transparent px-4 text-sm font-semibold text-ink hover:bg-muted"
                    >
                      <Download className="size-4" aria-hidden />
                      {menu.extraPdf.label}
                    </Button>
                  ) : null}
                </div>
              </div>

              <div
                className={`mt-8 grid gap-6 ${
                  menu.pages.length > 1
                    ? "md:grid-cols-2"
                    : "max-w-3xl md:grid-cols-1"
                }`}
              >
                {menu.pages.map((src) => (
                  <a
                    key={src}
                    href={menu.pdf ?? src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-lg border border-border/60 bg-white shadow-[0_12px_40px_rgba(15,22,18,0.06)]"
                  >
                    <Image
                      src={src}
                      alt={`${menu.title} page`}
                      width={1216}
                      height={1575}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="site-wrap py-14 md:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl tracking-tight text-ink md:text-3xl">
              Ready to order?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/75">
              Call {site.phone} for takeout or questions about today&apos;s
              specials. Menus may change - the kitchen has the latest board.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-lacquer px-5 text-sm font-semibold text-white hover:bg-lacquer/90"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/visit" />}
                variant="outline"
                size="lg"
                className="h-11 rounded-md border-border bg-transparent px-5 text-sm font-semibold text-ink hover:bg-muted"
              >
                Hours & map
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
