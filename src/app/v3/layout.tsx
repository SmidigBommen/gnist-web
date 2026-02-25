import { V3Header } from "@/components/v3/layout/v3-header";
import { V3Footer } from "@/components/v3/layout/v3-footer";

export default function V3Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-v3-snow text-v3-text">
      <V3Header />
      <main>{children}</main>
      <V3Footer />
    </div>
  );
}
