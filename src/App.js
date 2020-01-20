import React,{Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios';
import Song from './components/Song';
import Artist from './components/Artist';

function App() {

  const [search, saveSearch] = useState({});
  const [lyrics, saveLyrics] = useState('');
  const [artistInfo, saveArtistInfo] = useState({});

  useEffect(()=>{
    if(Object.keys(search).length === 0) return ;
    

    const searchLyric = async () => {
      const {artist, song} = search;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [songInfo, artistData] = await Promise.all([
        axios(url),
        axios(artistUrl)
      ]);

      console.log(songInfo);
      console.log(artistData);

      saveLyrics(songInfo.data.lyrics);
      
      saveArtistInfo(artistData.data.artists[0]);

    }

    searchLyric();

  },[search] );

  return (
    <Fragment>
      <Form saveSearch={saveSearch}/>
      
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist artistInfo={artistInfo} />
          </div>
          <div className="col-md-6">
            <Song lyrics={lyrics} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
