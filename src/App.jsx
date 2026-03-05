

import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Banner from './Components/Banner/Banner'
import { Suspense, useState } from 'react'
import TicketContainer from './Components/TicketContainers/TicketContainer'
import { ToastContainer } from 'react-toastify';


const ticketFetched = async () => {
  const res = await fetch('/ticket.json');
  return res.json();
}



const ticketPromises = ticketFetched();





function App() {

  const [ticketCount, setTicketCount] = useState([]);
  const [resolveCount, setResolveCount] = useState([]);

  console.log('Tickets here to resolve', ticketCount);
  

  


  return (
    <>

      <div className='max-w-screen-xl mx-auto'>

        <Navbar></Navbar>
        <Banner ticketCount={ticketCount} resolveCount={resolveCount}></Banner>

        <div className='text-center my-16 '>

        <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
          <TicketContainer ticketPromises={ticketPromises} ticketCount={ticketCount} setTicketCount={setTicketCount} resolveCount={resolveCount} setResolveCount={setResolveCount}></TicketContainer>
        </Suspense>
        </div>


        <Footer></Footer>
      </div>


<ToastContainer position='top-center'/>

    </>
  )
}

export default App
