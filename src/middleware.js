// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {

//   console.log("MIDDLEWARE EXECUTED");

//   const token = request.cookies.get("jwtToken");

//   console.log("YE HAIN JWT TOKEN: ",token)

//   // FOR ROOT ADMIN
//   // Ensures that token exists and has a value before accessing its value property
//   if (token && token.value) {
//     if (path !== '/rootadmin/rootadminsignup') {
//       return NextResponse.redirect(new URL('/rootadmin/rootadminsignup', request.url));
//     }
//   } else {
//     // If no token is found or the token has no value, redirect to '/home'
//     if (request.nextUrl.pathname === '/rootadmin/rootadminsignup') {
//       return NextResponse.redirect(new URL('/rootadmin/rootadmin-token-auth', request.url));
//     }
//   }

//   //FOR SUBADMIN
//   // if (token && token.value) {
//   //   if (request.nextUrl.pathname !== '/subadmin/requestform') {
//   //     return NextResponse.redirect(new URL('/subadmin/requestform', request.url));
//   //   }
//   // } else {
//   //   // If no token is found or the token has no value, redirect to '/home'
//   //   if (request.nextUrl.pathname === '/subadmin/requestform') {
//   //     return NextResponse.redirect(new URL('/subadmin/auth-token', request.url));
//   //   }
//   // }

//   return NextResponse.next(); // Allow the request to continue if the condition is not met
// }

// export const config = {
//   matcher: ['/rootadmin/rootadminsignup','/subadmin/requestform'],
// }


// import axios from 'axios';
// import { NextResponse } from 'next/server';

// // This function can be marked `async` if using `await` inside
// export async function middleware(request) {

//   console.log("MIDDLEWARE EXECUTED");

//   const token = request.cookies.get("jwtToken");

//   let isAuthenticated = false;

//   if (token) {
//     try {
//       const response = await axios.get('http://localhost:8080/check', {
//         headers: {
//           'Cookie': `jwtToken=${token}`
//         },
//         withCredentials: true
//       });

//       if (response.status === 200) {
//         isAuthenticated = true;
//       }
//     } catch (error) {
//       console.error("Error validating token:", error);
//     }
//   }

//   const url = request.nextUrl;

//   // FOR ROOT ADMIN
//   if (url.pathname.startsWith('/rootadmin')) {
//     if (isAuthenticated) {
//       if (url.pathname !== '/rootadmin/rootadminsignup') {
//         return NextResponse.redirect(new URL('/rootadmin/rootadminsignup', url));
//       }
//     } else {
//       if (url.pathname === '/rootadmin/rootadminsignup') {
//         return NextResponse.redirect(new URL('/rootadmin/rootadmin-token-auth', url));
//       }
//     }
//   }

//   // FOR SUBADMIN
//   if (url.pathname.startsWith('/subadmin')) {
//     if (isAuthenticated) {
//       if (url.pathname !== '/subadmin/requestform') {
//         return NextResponse.redirect(new URL('/subadmin/requestform', url));
//       }
//     } else {
//       if (url.pathname === '/subadmin/requestform') {
//         return NextResponse.redirect(new URL('/subadmin/auth-token', url));
//       }
//     }
//   }

//   return NextResponse.next(); // Allow the request to continue if the condition is not met
// }

// export const config = {
//   matcher: ['/rootadmin/rootadminsignup', '/subadmin/requestform'],
// }




import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log("MIDDLEWARE EXECUTED");

  const path = request.nextUrl.pathname;

  const isPublicPath = path==='/rootadmin/rootadmin-token-auth' || path==='/subadmin/hasauthtoken'

  const token = request.cookies.get("jwtToken")?.value || '';

  console.log("YE HAIN JWT TOKEN: ", token);

  // If token exists and has a value
  if (token) {
    try {
      const response = await fetch(`http://localhost:8080/api/auth/getrole?token=${token}`);
      const role = await response.text();

      if (response.ok) {
        console.log("ROLE FETCHED: ", role);
        
        // Check role and redirect accordingly
        if (role === 'rootadmin') {
          if (path !== '/rootadmin/rootadminsignup') {
            return NextResponse.redirect(new URL('/rootadmin/rootadminsignup', request.url));
          }
        } else if (role === 'subadmin') {
          if (path !== '/subadmin/requestform') {
            return NextResponse.redirect(new URL('/subadmin/requestform', request.url));
          }
        }
      } else {
        console.log("Invalid token or role fetching failed");
        return NextResponse.redirect(new URL('/home', request.url));
      }
    } catch (error) {
      console.error("Error fetching role: ", error);
      return NextResponse.redirect(new URL('/home', request.url));
    }
  } else {
    // If no token is found or the token has no value, redirect to '/home'
    if (path === '/rootadmin/rootadminsignup') {
      return NextResponse.redirect(new URL('/rootadmin/rootadmin-token-auth', request.url));
    } else if (path === '/subadmin/requestform') {
      return NextResponse.redirect(new URL('/subadmin/auth-token', request.url));
    }
  }

  return NextResponse.next(); // Allow the request to continue if the condition is not met
}

export const config = {
  matcher: ['/rootadmin/rootadminsignup'],
};
