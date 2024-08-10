
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Cards from '../components/Cards'
import GivaEssential from '../components/GivaEssential'
import Productcard from '../components/Productcard';
import Shopbyprice from '../components/Shopbyprice'
import Explore from '../components/Explore'
import Customerstories from '../components/Customerstories';
import Footerbanner from '../components/Footerbanner';



export default function Home() {
    return(
    <>
    {/* <Header/> */}
    <Banner/>
    <Cards/>
    <GivaEssential/>
    <Productcard/>
    <Shopbyprice/>
    <Explore/>
    <Customerstories/>
    <Footerbanner/>
    {/* <Footer/> */}
    
    </>

  )
}