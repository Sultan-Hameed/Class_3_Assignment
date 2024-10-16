import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen ">
        <Navbar />
 <main className=" flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
  