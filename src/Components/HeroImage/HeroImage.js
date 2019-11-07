import React, {useState, useEffect} from 'react';
import axios from 'axios';

const HeroImage = () {
  const [apod, setApod] = useState('');
  const endpoint = "https://api.nasa.gov/planetary/apod?api_key=9c73Q6Mf7hA7aSdegCd85R4aYTyLPhAeupzLdSom";

  useEffect(() = {
    axios
      .get(endpoint)
      .then(response => {
        const data = response.data;
        setApod(data);
      })
      .catch(error => console.log("Error occurred during API call.", error))
  }, []);

  return (
    <div className='heroImgContainer'>
      <img className='heroImg' src={apod.hdurl} alt={apod.title} />
      <p className='apodDesc'>{apod.explanation}</p>
    </div>
  )
}

export default HeroImage;