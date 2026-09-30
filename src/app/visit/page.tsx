import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { SocialLinks } from "@/components/social-links";
import { hours, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `Hours, map, and directions for Sushi Tomi at ${site.address.full}. Call ${site.phone}.`,
};

export default function VisitPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <PageHero
          title="Visit"
          lede={`${site.address.full}. Lunch and dinner daily except Tuesday.`}
          ledeOnMobile
          // Focal: sake map / bottle illustration in open right half
          image={{
            src: "/images/sake-map.jpg",
            alt: "Illustrated sake pairing map from Sushi Tomi",
            focal: "78% 45%",
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-lacquer px-5 text-sm font-semibold text-white hover:bg-lacquer/90"
              >
                Call {site.phone}
              </Button>
              <Button
                render={
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                size="lg"
                className="hidden h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white md:inline-flex"
              >
                Get directions
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60">
                Hours
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
                When we are open
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75">
                Lunch 11:30 AM - 1:30 PM. Dinner from 5:00 PM - until 8:00 PM most
                nights, 8:30 PM Friday and Saturday. Closed Tuesday.
              </p>
              <div className="mt-8 overflow-hidden rounded-lg border border-border/70 bg-card">
                <table className="w-full text-sm">
                  <caption className="sr-only">Restaurant hours</caption>
                  <tbody>
                    {hours.map(({ day, slots }) => (
                      <tr
                        key={day}
                        className="border-b border-border/50 last:border-0"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3.5 text-left font-semibold text-ink"
                        >
                          {day}
                        </th>
                        <td className="px-4 py-3.5 text-right text-foreground/75">
                          {slots.map((slot) => (
                            <div key={slot}>{slot}</div>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60">
                Location
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
                Find us
              </h2>
              <address className="mt-4 not-italic text-base leading-relaxed text-foreground/75">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
              <p className="mt-3 text-base text-foreground/75">
                <a
                  href={site.phoneHref}
                  className="font-semibold text-lacquer hover:underline"
                >
                  {site.phone}
                </a>
              </p>
              <SocialLinks className="mt-5 text-ink/70" />
              <div className="mt-8 overflow-hidden rounded-lg border border-border/70 bg-muted">
                <iframe
                  title="Map to Sushi Tomi"
                  src={site.mapsEmbed}
                  className="h-72 w-full border-0 md:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <Button
                render={
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="mt-5 h-11 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
              >
                Open in Google Maps
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
