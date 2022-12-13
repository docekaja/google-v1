import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return <button>Sign out</button>;
  }
  return <button onClick={signIn}>Sign In</button>;
}
