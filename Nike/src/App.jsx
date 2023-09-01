import {
  Hero, Footer, CustomerReview, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} 
from './Sections'

import Nav from './components/Nav'

import './App.css'

function App() {


  return (
    <>
      <main className='relative p-0 m-0'>
          
        <Nav />

        <section className='xl:padding-l wide: padding-r padding-b'>
          <Hero />
        </section>

        <section className='padding'>
          <PopularProducts />
        </section>

        <section className='padding'>
          <SuperQuality />
        </section>

        <section className='padding-x py-10'>
          <Services/>
        </section>

        <section className='padding'>
          <SpecialOffer />
        </section>

        <section className="bg-[#F5F6FF] padding">
          <CustomerReview />
        </section>


        <section className='padding-x sm:py-32 py-16 w-full'>
          <Subscribe/>
        </section>

        <section className=' bg-black padding-x padding-t pb-8'>
          <Footer />
        </section>


        </main> 
    </>
  )
}

export default App
