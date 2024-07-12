"use client";
import { Menu, Popover, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './headerbar.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import userimage from '@/components/Project-Image/avatar.png';
import { HiOutlineBell } from 'react-icons/hi';
import { capitalize } from '@/utils/Capitalize/CapitalizeFirstLetter';
import ProfileModal from '@/app/subadminui/dashboard/headerbar/ProfileModal';
import { useAppDispatch, useAppSelector } from '@/Redux/hooks';
import { useAuth } from '@/Security/AuthContext';

function HeaderbarHelper() {

  const authContext = useAuth();
  console.log(authContext);
  console.log("Step 2--");

  const jwtToken = authContext.token;

  console.log("AuthContext jwt token::",jwtToken);

  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [post, setPost] = useState(null);
  const dispatch = useAppDispatch();

  const getPostById = async () => {
    if(jwtToken){
      try {
        const response = await fetch('http://localhost:8080/subadmin/subadmininfo', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          credentials: 'include',
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("DATA::",data)
          setPost(data);
          console.log("use state before logout::",data);
          
        } else {
          console.error('Failed to fetch post:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }else{
      router.push("/subadmin/subadminsignin");
    }
    
  };

  useEffect(() => {
    getPostById();
  }, []);

  const loginInfo = useAppSelector((state) => state.auth);
  console.log("LOGIN INFO:::", loginInfo);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  if (!post) {
    return <div className="text-white text-lg">Loading...</div>;
  }

  return (
    <div className={classNames("shadow-sm shadow-pink-600", styles.headerContainer)}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className="flex items-center gap-2 mr-2 border-green-500">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open && "bg-yellow-200",
                  "p-1.5 rounded-sm inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-500"
                )}
              >
                <HiOutlineBell className="text-white" fontSize={24} />
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
                  <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                    <strong className="text-gray-700 font-medium">Notifications</strong>
                    <div className="mt-2 py-1 text-sm">
                      This is the notification panel
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="ml-2 inline-flex">
              <span className="sr-only">Open User Menu</span>
              <div className="border-green-500 flex items-center justify-center gap-1">
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center gap-0.5">
                    <div>{capitalize(post?.firstName)}</div>
                    <div>{capitalize(post?.middleName)}</div>
                    <div>{capitalize(post?.lastName)}</div>
                  </div>
                  <div className="text-green-500 text-sm font-bold">{post?.role}</div>
                </div>
                <Image
                  className="mt-1 rounded-full cursor-pointer hover:outline hover:outline-lime-400"
                  src={userimage}
                  width="40"
                  height="40"
                  alt="user"
                  onClick={toggleModal}
                />
              </div>
              <span className="sr-only">screen reader</span>
            </Menu.Button>
          </div>
        </Menu>
      </div>

      {isModalOpen && <ProfileModal closeModal={toggleModal} />}
    </div>
  );
}

export default HeaderbarHelper;
