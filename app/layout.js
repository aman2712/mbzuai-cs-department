import "./globals.css";

export const metadata = {
  title: "Computer Science Department | Mohamed bin Zayed University of Artificial Intelligence - MBZUAI",
  description: "The Computer Science Department at MBZUAI offers cutting-edge education and research in AI, machine learning, and data science.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
      </body>
    </html>
  );
}
