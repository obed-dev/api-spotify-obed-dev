import { useState } from 'react'

import './App.css'

function App() {
  const [song, setSong] = useState('');
  const [songs, setSongs] = useState([])

function handleSearch(e) {
  e.preventDefault();
  if (song.trim() === ''   ) {
   alert ('You must type something to search');
    return
  } 

  
  setSong('');
  getSong(song);

}

  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1c0ae90396mshf1c95056e32296ap178cfcjsn03c421528779',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

async function getSong(song) {
 try {
  let url = `https://spotify23.p.rapidapi.com/search/?q=${song}&type=multi&offset=0&limit=20&numberOfTopResults=5`
  let data = await fetch (url , options);
  let res = await data.json();
  setSongs(res.tracks.items);

 

  
 } catch (error) {
  console.log('ups ...error: ${error}');
 }


}
  return (
    <>
    <h1>Obed-Dev Spotify Api </h1>
    <form onSubmit={handleSearch}>


    
    <input type="text" value={song} onChange={e => setSong(e.target.value)} />
    <button type='submit'>Search</button>
    </form>

    { songs.map ((song , index ) =>  ( 
    
     
        <>
         <div key={index}>
          <img src={song.data.albumOfTrack.coverArt.sources[0].url} alt="foto del album" />
          <h2>{song.data.name}</h2>
          <a href={song.data.uri}><button>Play Song</button></a>
         </div>

        </> 
        ))}




    </>
  )}


export default App
