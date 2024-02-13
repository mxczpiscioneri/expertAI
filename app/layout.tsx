import "./globals.css";
import "./ai-tool.css";
import { Public_Sans } from "next/font/google";
import Analytics from "@/components/Analytics";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ExpertAI</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="description" content="Sua Inteligência Especializada" />
        <meta property="og:title" content="ExpertAI" />
        <meta
          property="og:description"
          content="Sua Inteligência Especializada"
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ExpertAI" />
        <meta
          name="twitter:description"
          content="Sua Inteligência Especializada"
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={publicSans.className}>
        <Analytics />
        <div className="flex flex-col h-[100vh]">{children}</div>
      </body>
    </html>
  );
}
