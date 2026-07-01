import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "METIX ECO - Natural Solutions for Sustainable Cities",
  description:
    "METIX ECO delivers high-quality genetic material, advanced ecological solutions, and blockchain transparency for modern cities.",
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
