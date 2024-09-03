import { useState } from "react";
import { Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import axios from "axios";

interface MapProps {
    country: string
    city: string
}

interface Coordinates {
    lat: number
    lng: number
}

function MapComponent({ country, city }: MapProps) {
    
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null)

    const getLocation = async () => {
        try{
            const address = `${city}, ${country}`
            const res = await axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
                params: {
                    address: address,
                    key: "AIzaSyBWA5xuEmbqnw-_DHBhrSSW_6OGXLWYOJw"
                }
            })

            const results = res.data.results

            if(results.length > 0){
                const location = results[0].geometry.location
                setCoordinates(location)
            } else {
                console.error('Location not found')
            }
        }catch(error){
            console.error(error)
        }
    }

    getLocation()

    return (
        {/*
        <div className="map-container">
            { coordinates && <>
            <Map
                style={{ borderRadius: "20px", width: "100%", height: "400px" }}
                defaultZoom={13}
                gestureHandling="greedy"
                disableDefaultUI
                center={{ lat: coordinates.lat, lng: coordinates.lng}}
                initialViewState={{ lat: coordinates.lat, lng: coordinates.lng, zoom: 13 }}
                mapId={"DEMO_MAP_ID"}
            ></Map>
            <AdvancedMarker position={{ lat: coordinates.lat, lng: coordinates.lng}}></AdvancedMarker>
            </>}
        </div>
        */}
    );
}

export default MapComponent