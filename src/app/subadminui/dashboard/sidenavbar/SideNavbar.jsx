import React from 'react'
import styles from '@/app/subadminui/dashboard/sidenavbar/sidenavbar.module.css'
import{ DASHBOARD_SIDEBAR_MENUITEMS} from './SideNavbarMenuItems'
import MenuLink from './menuLink/menuLink'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'
import logo from '@/components/Project-Image/oblique shape.jpg'
import Image from 'next/image'


// const linkClasses="flex items-center gap-2 font-light px-3, py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base"

function SideNavbar() {
  return (
    <div className="flex flex-col w-56">

       {/* logo */}
       <div className="flex items-center gap-2 px-1 py-1  border-red-500">
        <div className="w-10 h-10 relative">
          <Image className="rounded-full object-cover" src={logo} layout="fill" />
        </div>
        <span className='flex flex-col items-center text-left font-bold text-white mr-5 shadow-sm shadow-green-400'>Computer Sceince <span>Society, AMU</span></span>
        </div>
      
      {/* Display all the Sidebar Menu Items */}
      <div className='flex-1 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_MENUITEMS.map((items)=>(
          <div key={items.title}>
            {/* <span className={styles.items}>{items.title}</span> */}
            <MenuLink item={items} key={items.title}/>
            </div>
        ))}

          {/* <button className={styles.logout}
          >
            <span className='text-xl'><HiOutlineLogout /></span>
            Log out
         </button> */}

      </div>
      <button className={styles.logout}>
        <span className='text-xl'><HiOutlineLogout /></span>
          Log out
      </button>
    </div>
  )
}

export default SideNavbar
