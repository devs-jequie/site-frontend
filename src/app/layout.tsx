import AnnouncementBar from "src/components/announcementBar";
import "../styles/globals.css";

import { Metadata } from "next";
import getEntry from "../services/contentfull";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const announcementBar = await getEntry<AnnouncementBar>(
    "7enw61Zj4dxnsKbfIdQmJW"
  );

  return (
    <html lang="pt-BR">
      <body>
        <AnnouncementBar
          enabled={announcementBar.enabled}
          content={announcementBar.content}
        />

        {children}
      </body>
    </html>
  );
}
