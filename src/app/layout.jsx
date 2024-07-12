import React from 'react';
// import { Provider } from 'react-redux';
import store from '@/Redux/store';
import "./globals.css";
import Navbar from "@/components/Navbar";
// import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StoreProvider from '@/Redux/StoreProvider'
import AuthProvider from '@/Security/AuthContext'
// import getJwtTokenFromCookie from '@/app/api/GetJwtTokenFromCookie'
// import getJwtTokenFromCookie from '@/app/FetchJwt/fetchJwt'
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

  // const jwtTokeninAuthContext = getJwtTokenFromCookie();
  // console.log("jwt token in AuthContext::",jwtTokeninAuthContext);

  // const pathNmae = usePathname();

  // const jwtToken = getJwtTokenFromCookie();
  // console.log("jwt token in layout::",jwtToken);

  
  return (
    // <Provider store={store}>
      <html lang="en">
        <body className="bg-gradient-to-b from-gray-600 to-black min-h-screen">
        <AuthProvider>
          <StoreProvider>
              <ToastContainer />
              {/* {
                pathNmae!== "/editorworkspace" &&!pathNmae.startsWith("/subadmindashboard")?<Navbar />:null
              }    */}
              {children}
          </StoreProvider>
          </AuthProvider>
        </body>
      </html>
    // </Provider>
  );
}