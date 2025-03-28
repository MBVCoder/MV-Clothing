
import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Newsletterbox from '../components/NewsLetterbox'
import OurPollicy from "../components/OurPollicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <BestSeller />
      <OurPollicy />
      <Newsletterbox />
    </div>
  )
}

export default Home