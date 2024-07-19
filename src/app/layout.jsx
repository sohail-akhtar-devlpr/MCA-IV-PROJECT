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
              {children}
          </StoreProvider>
          </AuthProvider>
        </body>
      </html>
    // </Provider>
  );
}