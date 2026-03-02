import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "SHREYAS KENDRA",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="local-font-anekmalayalam">
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
