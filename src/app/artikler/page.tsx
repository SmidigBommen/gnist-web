import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/layout/page-hero";
import { articles } from "@/data/articles";
import { ArrowRight } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Artikler",
  description:
    "Artikler og innsikt fra Gnist-konsulentene om teknisk ledelse, smidig utvikling og produktutvikling.",
  path: "/artikler",
});

export default function ArtiklerPage() {
  return (
    <>
      <PageHero
        title="Artikler"
        description="Innsikt og erfaringer fra Gnist-konsulentene. Vi deler det vi lærer – fordi kunnskap blir bedre når den deles."
      />

      <Section variant="cream">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link key={article.slug} href={`/artikler/${article.slug}`}>
                <Card hover className="flex h-full flex-col">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="ember">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 font-heading text-xl text-charcoal">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-gray">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-ash/20 pt-4">
                    <div className="text-sm text-warm-gray">
                      <span className="font-medium text-charcoal">
                        {article.author}
                      </span>
                      {" · "}
                      {new Date(article.date).toLocaleDateString("nb-NO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <ArrowRight className="h-4 w-4 text-ember" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
