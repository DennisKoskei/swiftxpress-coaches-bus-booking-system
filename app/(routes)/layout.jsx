import "@/app/_styles/globals.css";
import Footer from "@components/Footer";
import Header from "@components/Header";

export const metadata = {
    title: "SwiftXpress Coaches Bus Booking System",
    description: "SwiftXpress Coaches Bus Booking System",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col relative" >
                <Header />
                <div className="container mx-auto">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    );
}
