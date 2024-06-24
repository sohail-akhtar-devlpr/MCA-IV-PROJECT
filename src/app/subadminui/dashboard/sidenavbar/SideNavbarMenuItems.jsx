import { CgProfile } from 'react-icons/cg';
import { LuTrophy } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa";
import { BsPatchQuestion } from "react-icons/bs";
import { GrAnnounce } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";


export const DASHBOARD_SIDEBAR_MENUITEMS = [
          {
            title:"Dashboard",
            // label:"profile",
            path:"/subadmindashboard",
            icon:<RxDashboard />
          },
          {
            title:"Profile",
            // label:"profile",
            path:"/subadmindashboard/profile",
            icon:<CgProfile />
          },

          {
            title:"Contests",
            // label:"competitions",
            path:"/subadmindashboard/contests",
            icon:<LuTrophy />
          },

          {
            title:"Previousquestions",
            // label:"previous questions",
            path:"/subadmindashboard/previousquestions",
            icon:<BsPatchQuestion />
          },

          {
            title:"Announcements",
            // label:"announcements",
            path:"/subadmindashboard/announcements",
            icon:<GrAnnounce />
          },

          {
            title:"Sponsorships",
            // label:"sponsors",
            path:"/subadmindashboard/sponsorships",
            icon:<FaHandshake />
          },
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  // {
  //   key:"settings",
  //   label:"Settings",
  //   path:"/settings",
  //   icon:<HiOutlineCog />
  // },

  // {
  //   key:"support",
  //   label:"Help & Support",
  //   path:"/support",
  //   icon:<HiOutlineQuestionMarkCircle />
  // }
]

// export const COMPETITION_LINKS=[
//   {
//     key:"generatequestion",
//     label:"Generate Questions",
//     path:"generatequestions"
//   },
  
// ]
 