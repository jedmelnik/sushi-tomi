import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { hours, menus, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex flex-1 flex-col">
        <PageHero
          size="home"
          kicker="Mountain View, California"
          title={site.name}
          lede="Fresh sushi, sashimi, and Japanese classics on West Dana Street - lunch and dinner, closed Tuesdays."
          ledeOnMobile
          // Focal: chirashi bowl / ikura and uni center-right, clear of left lockup
          image={{
            src: "/images/hero-chirashi.jpg",
            alt: "Chirashi bowl with assorted sashimi, ikura, and uni over rice",
            focal: "72% 42%",
          }}
          actions={
            <>
              <Button
                render={<a href={site.phoneHref} />}
                size="lg"
                className="h-11 rounded-md bg-lacquer px-5 text-sm font-semibold text-white shadow-none transition-transform hover:bg-lacquer/90 hover:scale-[1.02] active:scale-[0.99] md:h-12 md:px-6 md:text-base"
              >
                Call {site.phone}
              </Button>
              <Button
                render={<Link href="/menu" />}
                variant="outline"
                size="lg"
                className="hidden h-11 rounded-md border-white/40 bg-transparent px-5 text-sm font-semibold text-white hover:bg-white/10 hover:text-white md:inline-flex md:h-12 md:px-6 md:text-base"
              >
                View the menu
              </Button>
            </>
          }
        />

        <section className="site-wrap py-14 md:py-20">
          <div className="max-w-3xl animate-rise">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60">
              Welcome
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
              Welcome to Sushi Tomi Mountain View
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80 md:text-lg">
              A neighborhood Japanese restaurant known for careful sushi, generous
              chirashi, and a calm dining room just off Castro Street. Order from
              the full lunch and dinner menus, or ask for the daily specials at
              the counter.
            </p>
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/60 py-14 md:py-20">
          <div className="site-wrap">
            <div className="max-w-2xl animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60">
                Menus
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Lunch, dinner, sushi, and drinks
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                Browse the current menus from the live restaurant - then call to
                order or reserve a seat.
              </p>
            </div>

            {/* Mobile: one clear menu entry */}
            <div className="mt-8 md:hidden">
              <Link
                href="/menu"
                className="group relative block overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/sashimi-platter.jpg"
                    alt="Sashimi platter with tuna and yellowtail"
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: "55% 40%" }}
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-2xl text-white">View menus</p>
                  <p className="mt-1 text-sm text-white/75">
                    Lunch · Dinner · Sushi · Drinks
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop: open menu rows - not card grids */}
            <div className="mt-10 hidden divide-y divide-border/80 md:block">
              {menus.map((menu, index) => (
                <Link
                  key={menu.id}
                  href={`/menu#${menu.id}`}
                  className="group grid grid-cols-[minmax(0,1fr)_14rem] items-center gap-8 py-7 transition-colors hover:bg-white/40 lg:grid-cols-[minmax(0,1fr)_18rem]"
                >
                  <div className={index === 0 ? "animate-rise-delay-1" : ""}>
                    <p className="font-display text-2xl text-ink transition-colors group-hover:text-lacquer lg:text-3xl">
                      {menu.title}
                    </p>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-foreground/70">
                      {menu.summary}
                    </p>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                    <Image
                      src={menu.image}
                      alt={menu.imageAlt}
                      fill
                      sizes="288px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="site-wrap py-14 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="animate-rise">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/60">
                Visit
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink md:text-4xl">
                Hours & location
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
                {site.address.full}. Closed every Tuesday.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/visit" />}
                  size="lg"
                  className="h-11 rounded-md bg-ink px-5 text-sm font-semibold text-white hover:bg-ink/90"
                >
                  Plan your visit
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
                  className="h-11 rounded-md border-border bg-transparent px-5 text-sm font-semibold text-ink hover:bg-muted"
                >
                  Get directions
                </Button>
              </div>
            </div>

            <div className="animate-rise-delay-1 overflow-hidden rounded-lg border border-border/70 bg-card">
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
                        className="px-4 py-3 text-left font-semibold text-ink"
                      >
                        {day}
                      </th>
                      <td className="px-4 py-3 text-right text-foreground/75">
                        {slots.join(" · ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}
