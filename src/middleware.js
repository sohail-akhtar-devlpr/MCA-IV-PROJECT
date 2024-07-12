import { NextResponse } from 'next/server';
// import { useAuth } from '@/Security/AuthContext';


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log("MIDDLEWARE RUNNING");

  // const isLoggedIn = 'false';

  const url = new URL(request.url);

  // const authContext = useAuth();

  const path = request.nextUrl.pathname;

  const isPublicPath = path==='/rootadmin/rootadmin-token-auth' || path==='/subadmin/hasauthtoken' || path=== '/rootadmin/rootadminlogin' || path==='/subadmin/subadminsignin' || path==='/'

  const token = request.cookies.get("jwtToken")?.value || '';

  console.log("YE HAIN JWT TOKEN: ", token);

  
  // if(!token){
  //   console.log("NO TOKEN ENTERED");
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  // If token exists and has a value
  if (token) {
    // console.log("IF ENTERED");
    try {
      //token is present, now fetching the role
      const response = await fetch(`http://localhost:8080/api/auth/getrole?jwtToken=${token}`);
      // console.log("RESPONSE:: ",response);

      const data = await response.json();
      console.log("DATA:: ", data);
      // const role = await response.text();
      const role = data.role;

      if(isPublicPath && token && role==='SUBADMIN'){
        console.log("PUBLIC PATH ME ENTERED HOGYA");
        // authContext.setToken(token);
        // console.log("jwt token in middleware::",jwtToken);
        return NextResponse.redirect(new URL('/subadmindashboard',request.nextUrl))
      }


      // console.log("RESPONSE:: ",response);
      console.log("RESPONSE.OK: ",response.ok);
      console.log("RESPONSE.STATUS: ",response.status);
      if (response.ok) {
        console.log("ROLE FETCHED: ", role);
        console.log(role);
       
        // Check role and redirect accordingly
        if (role === 'ROOTADMIN') {
          if (url.pathname.startsWith('/rootadmin')) {
            return NextResponse.next();
          }
        } else if (role === 'SUBADMIN') {
            if (url.pathname.startsWith('/subadmin')) {
              console.log('/subadmin');
              return NextResponse.next();
            }
        }
      } else {
          console.log("SUBADMIN ROLE: ",role);
            if (url.pathname.startsWith('/subadmindashboard')) {
              if(isPublicPath){
                return NextResponse.redirect(new URL('/subadmindashboard',request.nextUrl));
              }else{
                return NextResponse.next();
              }
            } else {
              // Redirect to /subadmindashboard if trying to access other paths
              console.log("Invalid path for SUBADMIN, redirecting to /subadmindashboard");
              return NextResponse.redirect(new URL('/subadmindashboard', request.url));
        }
      }
    } catch (error) {
      console.error("Error fetching role: ", error);
      return NextResponse.redirect(new URL('/home', request.url));
    }
  } else { //if token is not present
    console.log("ELSE ENTERED");
    return NextResponse.next();
  }

  return NextResponse.next(); // Allow the request to continue if the condition is not met
}

export const config = {
  matcher: [
    '/rootadmin/rootadminlogin',
    '/subadmin/subadminsignin',
    '/rootadmin/rootadminsignup',
    '/subadmin/requestform',
    '/subadmindashboard/:path*',
  ],
};
