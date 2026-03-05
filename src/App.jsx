

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Banner from './Components/Banner/Banner'
import { Suspense } from 'react'
import TicketContainer from './Components/TicketContainers/TicketContainer'


const ticketFetched = async () => {
  const res = await fetch('/ticket.json');
  return res.json();
}



const ticketPromises = ticketFetched();





function App() {


  return (
    <>

      <div className='max-w-screen-xl mx-auto'>

        <Navbar></Navbar>
        <Banner></Banner>

        <div className='text-center '>

        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <TicketContainer ticketPromises={ticketPromises}></TicketContainer>
        </Suspense>
        </div>


        <Footer></Footer>
      </div>




    </>
  )
}

export default App
