import SideNavbar from '@/app/subadminui/dashboard/sidenavbar/SideNavbar'
import Headerbar from '@/app/subadminui/dashboard/headerbar/Headerbar'
import styles from '@/app/subadminui/dashboard/dashboard.module.css'
// import {getToken} from '@/app/api/CookieInfo/route'

// const jwtToken = getToken();
// console.log("jwt token in SUBADMINDASHBOARD::",jwtToken);

const Layout=({children})=>{

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideNavbar />
      </div>
      <div className={styles.content}>
        <Headerbar />
        <div className='border border-green-500 mt-3 '>
          {children} {/*its like the outlet in Reactjs.This is also the component*/}
        </div>
      </div>
    </div>
  )
}

export default Layout