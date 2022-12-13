import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <img
              src="https://www.google.cz/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.4-law.gif"
              alt="google"
            />
            <p>This webside is created for learning purposes</p>
            <button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
