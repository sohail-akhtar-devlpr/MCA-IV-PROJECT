"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarLogo from '@/components/Project-Image/oblique shape.jpg'
//next/router was in nextjs 13
// import { useRouter } from 'next/router';
//from nextjs 14 use next/navigation and with it use usePathName and useSearchParams because 'events' property does not work with it.
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { navItems, signinDropdown } from '@/js/NavItems.js';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Function to handle route change and close dropdown
    const handleRouteChange = () => {
      setShowDropdown(false);
    };

    handleRouteChange();

    // Listen for route changes
    // router.events.on('routeChangeStart', handleRouteChange);
    // const url = `${pathName}?${searchParams}`
    // console.log("THIS IS THE URL",url);
    

    // Cleanup event listener on unmount
    return () => {
      // router.events.off('routeChangeStart', handleRouteChange);
      
    };
  // }, [router.events]);
  }, [pathName,searchParams]);

  return (
    <>
      <div className='flex items-center justify-between sm:px-12 px-2 md:px-24 h-[10vh] sticky top-0 z-[10000] bg-gradient-to-b from-green-300  font-medium text-xl text-white mx-auto border-fuchsia-600'>
        <Link href="/">
          {/* <div>
            <h1 className='text-xl font-semibold text-pink-500'>ComputerScienceSociety</h1>
          </div> */}
          <div className='logo border-orange-500 flex gap-x-4 rounded-lg ml-10 shadow-md shadow-green-500'>
          <div className='image border-green-500 ml-5'>
            <Image className='rounded-lg' src={navbarLogo} width="40" height="40"/>
          </div>
          <div>
            <p className='title border-red-500 text-xl font-serif text-left font-bold text-white mr-5'>Computer Science Society</p>
            <p className='subtitle border-blue-500 text-sm text-center font-medium text-white mr-5'>Department of Computer Science, AMU</p>
          </div>
        </div>
        </Link>

        {navItems.map((items) => {
          return (
            <div key={items.id} className={items.cName}>
              <Link href={items.path} className='flex items-center h-12 px-4 hover:bg-fuchsia-600 rounded-xl'>{items.title}</Link>
            </div>
          );
        })}

        {/* Sign up Button */}
        <button
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className='h-12 px-4 hover:bg-fuchsia-600 rounded-xl font-serif'
        >
          Signup
        </button>

        {showDropdown && (
          <div className='flex flex-col items-center py-2 absolute top-14 right-[80px] z-10 font-serif'
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}>
            <div className='space-y-1  border-green-800 bg-slate-500 rounded-xl'>
              {signinDropdown.map((items) => {
                return (
                  <div key={items.id}>
                    <Link href={items.path} className='flex items-center px-4 h-12 hover:bg-slate-400 bg-opacity-0 rounded-xl text-lg'>
                      {items.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
