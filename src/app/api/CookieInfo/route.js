import { cookies } from 'next/headers';
// import { NextResponse } from 'next/server';

export async function getToken(request) {
  const cookie = cookies();
  const token = cookie.get("jwtToken");
  console.log("token::",token.value);
  return token.value;
}
