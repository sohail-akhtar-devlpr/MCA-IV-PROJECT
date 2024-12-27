import React from 'react';
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from '@/Redux/StoreProvider'
import AuthProvider from '@/Security/AuthContext'
// import { useAuth } from '@/Security/AuthContext';
// import { Provider } from 'react-redux';
// const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(
{children}
// this is for type script  
//   {
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>
) {

//   const auth = useAuth();
// const token = auth.token;
// console.log("AUTH TOKEN:",token);

  return (
    // <Provider store={store}>
      <html lang="en">
        <body className="bg-gradient-to-b from-gray-600 to-black min-h-screen">
        <AuthProvider>
          <StoreProvider>
              <ToastContainer />
              <Navbar />
               {children} {/*page.jsx replaces the children prop in the layout.jsx to form the complete UI we see in the browser */}
          </StoreProvider>
          </AuthProvider>
        </body>
      </html>
    // </Provider>
  );
}

// RootLayout is a React component that serves as a foundational layout for your application. It typically wraps around your main content and provides consistent structure, styles, and shared functionality,

// children is a special prop in React that represents the content or components passed between the opening and closing tags of a parent component. It's a placeholder for dynamic content.