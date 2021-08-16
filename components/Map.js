import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter'
import { LocationMarkerIcon } from "@heroicons/react/outline"


function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})
    const coordinates = searchResults.map(item => ({
        latitude: item.lat,
        longitude: item.long
    }))


    const center = getCenter(coordinates)
    const [viewPort, setViewPort] = useState({
        width: '100%',
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 8
    })


    return (
        <ReactMapGL
            mapStyle='mapbox://styles/johnbabu021/ckse5t57447bk17nzdx52gsor'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewPort}
            onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}

        >

            {searchResults.map(result => (
                <div key={result.longitude}>

                    <Marker
                        latitude={result.lat}
                        longitude={result.long}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        {selectedLocation.long === result.long && selectedLocation.lat === result.lat ? (
                            <Popup
                                className="w-[400px]"
                                onClose={() => setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={selectedLocation.lat}
                                longitude={selectedLocation.long}


                            >{result.title}</Popup>
                        ) : (
                            false
                        )


                        }
                        <LocationMarkerIcon
                            onClick={() => { setSelectedLocation(result) }}
                            className="text-red-400  w-5 h-5 cursor-pointer animate-bounce "
                        />
                    </Marker>

                </div>

            ))}

        </ReactMapGL>
    )
}

export default Map
