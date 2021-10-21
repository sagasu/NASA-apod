import React, {useEffect, useState} from 'react'

const apikey = process.env.REACT_APP_NASA_KEY;

export const NasaPhoto = () => {
    const [photoData, setPhotoData] = useState(null);
    

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

    let {title, url, date, explanation, media_type} = photoData;
    return (
        <div>
            {media_type === "image" ? (<img 
                src={url}
                alt={title}
            />) : (
                <iframe 
                    title="space-video"
                    src={url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )}
            
            <div>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{explanation}</p>
            </div>
        </div>
    )
}
