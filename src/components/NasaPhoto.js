import React, {useEffect, useState} from 'react'

export const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    const apikey = '';

    useEffect(() => {
        const fetchPhoto = async () => {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apikey}`
            );
            const data = await res.json();
            setPhotoData(data);
        };
        fetchPhoto();
    }, []);

    if(!photoData) return <div>Loading...</div>

    return (
        <div>
            <img 
                src={photoData.url}
                alt={photoData.title}
            />
        </div>
    )
}
