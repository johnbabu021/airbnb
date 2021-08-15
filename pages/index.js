import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCards from '../components/LargeCards'
import MediumCards from '../components/MediumCards'
import SmallCard from '../components/SmallCard'
export default function Home({ expoloreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />


      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">

        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {expoloreData?.map(({ img, location, distance }) => (
              <SmallCard key={img} img={img} location={location} distance={distance} ></SmallCard>
            ))}
          </div>


        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCards key={img} img={img} title={title} />

            ))}


          </div>
        </section>

        <LargeCards
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists created by Airbnb"
          buttonText="Get Inspired"
        />


      </main>
      <Footer />
    </div >
  )
}

export async function getStaticProps() {
  const expoloreData = await fetch('https://links.papareact.com/pyp')
    .then(
      (res) => res.json()
    )
  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(
      (res) => res.json()
    )


  return {
    props: {
      expoloreData,
      cardsData,
    }
  }
}

