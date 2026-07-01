import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Valley Seeds | Premium Vegetable Seeds — From Grain to Gain",
  description:
    "Valley Seeds is Egypt's leading importer of elite vegetable seeds. Connecting global agricultural innovation with Egyptian farmers since 2018. 560+ active clients. Backed by field science, Odoo ERP, and dedicated agronomist support.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white flex flex-col overflow-x-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
