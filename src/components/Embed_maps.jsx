import React from "react";

const GOOGLE_MAPS_API = import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY;
const query = "paroquia+são+josé+5W7P+49 São José das Palmeiras, Paraná";
const zoom_center = "-24.8373358,-54.0640999"
const zoom_level = 19
const maptype = "satellite"


export default function Embed_maps(){
    return(
        <iframe
            width="1238"
            height="469"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API}&q=${query}&center=${zoom_center}&zoom=${zoom_level}&maptype=${maptype}`}>
        </iframe>
    )
}