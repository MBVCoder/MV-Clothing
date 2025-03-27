
import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPollicy from "../components/OurPollicy"

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection />
      <BestSeller />
      <OurPollicy />
    </div>
  )
}

export default Home