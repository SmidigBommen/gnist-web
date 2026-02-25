import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ArrowLeft } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Gnist Consulting`,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Section>
        <Container>
          <Link
            href="/artikler"
            className="inline-flex items-center gap-2 text-sm text-warm-gray transition-colors hover:text-ember"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til artikler
          </Link>

          <article className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="ember">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mt-4 font-heading text-3xl md:text-4xl text-charcoal">
              {article.title}
            </h1>

            <div className="mt-4 text-sm text-warm-gray">
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

            <div className="prose-gnist mt-10">
              {article.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="mt-10 mb-4 font-heading text-2xl text-charcoal"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return null;
                }
                if (paragraph.includes("**")) {
                  const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
                  return (
                    <p
                      key={i}
                      className="mb-4 leading-relaxed text-charcoal"
                    >
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j}>
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n");
                  return (
                    <ul key={i} className="mb-4 list-disc space-y-1 pl-6 text-charcoal">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="mb-4 leading-relaxed text-charcoal">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 border-t border-ash/20 pt-8 text-center">
              <Button href="/kontakt">
                Vil du diskutere dette temaet?
              </Button>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
