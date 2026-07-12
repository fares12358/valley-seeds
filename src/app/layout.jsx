import "./globals.css";
import { LangProvider } from "@/context/LangContext";

export const metadata = {
  title: "Valley Seeds | Premium Vegetable Seeds — From Grain to Gain",
  description:
    "Valley Seeds is Egypt's leading importer of elite vegetable seeds. Connecting global agricultural innovation with Egyptian farmers since 2018. 560+ active clients. Backed by field science, Odoo ERP, and dedicated agronomist support.",
};

export default function RootLayout({ children }) {
  return (
    /*
     * lang and dir are set dynamically by LangContext via
     * document.documentElement.setAttribute on the client.
     * We set sensible defaults here for SSR / initial render.
     */
    <html lang="en" dir="ltr">
      <body>
        <LangProvider>
          <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
            {children}
          </div>
        </LangProvider>
      </body>
    </html>
  );
}
