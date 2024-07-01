"use client"
import { Menu, Popover, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import classNames from 'classnames'
import styles from './headerbar.module.css'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import userimage from '@/components/Project-Image/avatar.png'
import { HiOutlineBell } from 'react-icons/hi'
import {capitalize} from '@/utils/Capitalize/CapitalizeFirstLetter'

import { useDispatch, useSelector } from 'react-redux'
import {fetchSubadminData} from '@/app/FetchData/fetchSubadminData'

function Headerbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector( (state)=>state.subadminUser.userInfo )
  const email = useSelector((state) => state.auth.username);

  useEffect( ()=>{
    if(email){
      fetchSubadminData(dispatch, email)
    }
  },[dispatch, email] )

  console.log("USER INFO: ",user);

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <div className={classNames("shadow-sm shadow-pink-600", styles.headerContainer)}>
      {/* Dynamic Path */}
      <div className={styles.title}>{pathname.split("/").pop()}</div>

      {/* Side buttons */}
      <div className='flex items-center gap-2 mr-2 border-green-500'>
        {/* Notification Bell */}
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-yellow-200",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-500"
                )}
              >
                <HiOutlineBell fontSize={24} />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-80">
                  <div className='bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
                    <strong className='text-gray-700 font-medium'>Notifications</strong>
                    <div className='mt-2 py-1 text-sm'>
                      This is the notification panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

        {/* Profile & Profile Dropdowns */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
              <span className='sr-only'>Open User Menu</span>
              <div className=' border-green-500 flex items-center justify-center gap-1'>
                <div className='flex flex-col items-center justify-center'>
                  <div className='flex items-center justify-center gap-0.5'>
                    <div>{capitalize(user?.firstName) || "XYZ"}</div>
                    <div>{capitalize(user?.middleName)}</div>
                    <div>{capitalize(user?.lastName) || "XYZ"}</div>
                  </div>
                  <div className='text-green-500 text-sm font-bold'>{user?.role || "XYZ"}</div>
                </div>
                <Image className='mt-1' src={user?.profilePicture || userimage} width="40" height="40" alt="User avatar" />
              </div>
              <span className='sr-only'>screen reader</span>
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-opacity-5 focus:outline-none ring-black">
              {[
                { name: 'Profile', path: '/rootprofile' },
                { name: 'Contests', path: '/assignsubadmin' },
                { name: 'Previous Questions', path: '/requests' },
                { name: 'Announcements', path: '/contests' },
                { name: 'Sponsorships', path: '/funds' },
                { name: 'Logout', path: '/logout' }
              ].map((item) => (
                <Menu.Item key={item.name}>
                  {({ active }) => (
                    <div
                      className={classNames(active && "bg-gray-100", 'text-gray-700 focus:bg-gray-200 block cursor-pointer rounded-sm px-4 py-2')}
                      onClick={() => navigate(item.path)}
                    >
                      {item.name}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default Headerbar