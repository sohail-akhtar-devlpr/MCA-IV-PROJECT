import { cookies } from "next/headers";

export default function getJwtTokenFromCookie(){
  console.log("ENTERED IN THE GET JWT TOKEN FROM COOKIE");
  const cookie = new cookies();
  const jwtToken = cookie.get("jwtToken")?.value;
  if (!jwtToken) {
    return null;
  }
  // const credentials = JSON.parse(jwtToken);
  // return credentials;
  return jwtToken;
}