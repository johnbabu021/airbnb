import { format } from 'date-fns'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'

export default function Search({ searchResults }) {

    const router = useRouter()
    const { location, endDate, startDate, noOfGuests } = router.query

    const formatedStartDate = format(new Date(startDate), 'dd MMM yy')
    const formatedEndDate = format(new Date(endDate), 'dd MMM yy')
    const range = `${formatedStartDate}-${formatedEndDate}`
    return (
        <div>
            <Header placeHolder={`${location} | ${range} | ${noOfGuests} ${noOfGuests > 1 ? 'guests' : 'guest'}`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className='text-xs'>300+ stays - {range} -  for {noOfGuests} number of {noOfGuests > 1 ? 'guests' : 'guest'}</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className="hidden 
                    lg:inline-flex 
                    mb-5 space-x-3
                     text-gray-800
                     whitespace-nowrap 
                     ">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms And Beds</p>
                        <p className="button">More Filters</p>


                    </div>


                    <div className="flex flex-col">

                        {searchResults && searchResults.map(({ img, location, title, description, star, price, total, long, lat }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                                long={long}
                                lat={lat}

                            />
                        ))}
                    </div>


                </section>
            </main>

            <Footer />
        </div>
    )
}


export async function getServerSideProps() {
    const searchResults = await fetch('https://links.papareact.com/isz').then(res => res.json())
    return {
        props: {
            searchResults
        }
    }
}