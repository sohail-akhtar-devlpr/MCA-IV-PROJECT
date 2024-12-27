import HomepageFirst from '@/components/HomepageFirst'
import HomepageSecond from '@/components/HomepageSecond'
import Hero from '@/components/Hero'

export const metadata={
  title:"Home-LetUsCode",
}

export default function Home() {
  return(
    <div className="border-2 border-red-700 overflow-x-hidden">
      <HomepageFirst />
      {/* <HomepageSecond /> */}
      <Hero />
   </div>
  )
}