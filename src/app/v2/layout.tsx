import { V2Header } from "@/components/v2/layout/v2-header";
import { V2Footer } from "@/components/v2/layout/v2-footer";

export default function V2Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-v2-void text-v2-text">
      <V2Header />
      <main>{children}</main>
      <V2Footer />
    </div>
  );
}
