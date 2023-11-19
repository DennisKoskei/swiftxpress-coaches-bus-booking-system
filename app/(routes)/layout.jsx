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
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
