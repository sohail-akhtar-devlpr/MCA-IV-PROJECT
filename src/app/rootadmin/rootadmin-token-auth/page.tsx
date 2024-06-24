import React from 'react'
import TokenAuthentication from '@/app/rootadmin/rootadmin-token-auth/TokenAuthentication'
import { title } from 'process'

export const metadata={
  title:"Token Authentication"
}

function TokenAuthenticationpage() {
  return <TokenAuthentication />
}

export default TokenAuthenticationpage
