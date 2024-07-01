// "use client"
// import React from 'react';
// import axios from 'axios';
// import styles from '@/app/subadminui/dashboard/sidenavbar/sidenavbar.module.css';
// import { DASHBOARD_SIDEBAR_MENUITEMS } from './SideNavbarMenuItems';
// import MenuLink from './menuLink/menuLink';
// import { HiOutlineLogout } from 'react-icons/hi';
// import logo from '@/components/Project-Image/oblique shape.jpg';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { useDispatch } from 'react-redux';
// import { logout } from '../features/authSlice';

// function SideNavbar() {

//   const dispatch = useDispatch();

//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/subadmin/logout', {}, {
//         withCredentials: true, // Include cookies in the request
//       });

//       if (response.status === 200) {
//         // Redirect to the login page after successful logout
//         router.push('/subadmin/subadminsignin');
//       } else {
//         console.error('Logout failed');
//       }
//       dispatch(logout());
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col w-56">
//       {/* logo */}
//       <div className="flex items-center gap-2 px-1 py-1 border-red-500">
//         <div className="w-10 h-10 relative">
//           <Image className="rounded-full object-cover" src={logo} layout="fill" />
//         </div>
//         <span className='flex flex-col items-center text-left font-bold text-white mr-5 shadow-sm shadow-green-400'>
//           Computer Science <span>Society, AMU</span>
//         </span>
//       </div>

//       {/* Display all the Sidebar Menu Items */}
//       <div className='flex-1 flex flex-col gap-0.5'>
//         {DASHBOARD_SIDEBAR_MENUITEMS.map((items) => (
//           <div key={items.title}>
//             <MenuLink item={items} key={items.title} />
//           </div>
//         ))}
//       </div>

//       <button className={styles.logout} onClick={handleLogout}>
//         <span className='text-xl'><HiOutlineLogout /></span>
//         Log out
//       </button>
//     </div>
//   );
// }

// export default SideNavbar;


// SideNavbar.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logout } from '../features/authSlice';
// import axios from 'axios';
// import styles from '@/app/subadminui/dashboard/sidenavbar/sidenavbar.module.css';
// import { DASHBOARD_SIDEBAR_MENUITEMS } from './SideNavbarMenuItems';
// import MenuLink from './menuLink/menuLink';
// import { HiOutlineLogout } from 'react-icons/hi';
// import logo from '@/components/Project-Image/oblique shape.jpg';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// function SideNavbar() {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/subadmin/logout', {}, {
//         withCredentials: true, // Include cookies in the request
//       });

//       if (response.status === 200) {
//         // Dispatch the logout action to update the Redux state
//         dispatch(logout());

//         // Redirect to the login page after successful logout
//         router.push('/subadmin/subadminsignin');
//       } else {
//         console.error('Logout failed');
//       }
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <div className="flex flex-col w-56">
//       {/* logo */}
//       <div className="flex items-center gap-2 px-1 py-1 border-red-500">
//         <div className="w-10 h-10 relative">
//           <Image className="rounded-full object-cover" src={logo} layout="fill" />
//         </div>
//         <span className='flex flex-col items-center text-left font-bold text-white mr-5 shadow-sm shadow-green-400'>
//           Computer Science <span>Society, AMU</span>
//         </span>
//       </div>

//       {/* Display all the Sidebar Menu Items */}
//       <div className='flex-1 flex flex-col gap-0.5'>
//         {DASHBOARD_SIDEBAR_MENUITEMS.map((items) => (
//           <div key={items.title}>
//             <MenuLink item={items} key={items.title} />
//           </div>
//         ))}
//       </div>

//       <button className={styles.logout} onClick={handleLogout}>
//         <span className='text-xl'><HiOutlineLogout /></span>
//         Log out
//       </button>
//     </div>
//   );
// }

// export default SideNavbar;



// SideNavbar.js
"use client"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/Redux/Features/authSlice';
import axios from 'axios';
import styles from '@/app/subadminui/dashboard/sidenavbar/sidenavbar.module.css';
import { DASHBOARD_SIDEBAR_MENUITEMS } from './SideNavbarMenuItems';
import MenuLink from './menuLink/menuLink';
import { HiOutlineLogout } from 'react-icons/hi';
import logo from '@/components/Project-Image/oblique shape.jpg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function SideNavbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:8080/subadmin/logout', {}, {
        withCredentials: true, // Include cookies in the request
      });

      if (response.status === 200) {

        // Dispatch the logout action to update the Redux state
        dispatch(logout());

        // Redirect to the login page after successful logout
        router.push('/subadmin/subadminsignin');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex flex-col w-56">
      {/* logo */}
      <div className="flex items-center gap-2 px-1 py-1 border-red-500">
        <div className="w-10 h-10 relative">
          <Image className="rounded-full object-cover" src={logo} layout="fill" />
        </div>
        <span className='flex flex-col items-center text-left font-bold text-white mr-5 shadow-sm shadow-green-400'>
          Computer Science <span>Society, AMU</span>
        </span>
      </div>

      {/* Display all the Sidebar Menu Items */}
      <div className='flex-1 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_MENUITEMS.map((items) => (
          <div key={items.title}>
            <MenuLink item={items} key={items.title} />
          </div>
        ))}
      </div>
        <button className={styles.logout} onClick={handleLogout}>
          <span className='text-xl'><HiOutlineLogout /></span>
          Log out
        </button>
    
    </div>
  );
}

export default SideNavbar;