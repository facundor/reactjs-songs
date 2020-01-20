import React,{useState} from "react";
import Error from "./Error";

function Form({saveSearch}) {

  const [search, setSearch] = useState({
    artist: '',
    song: ''
  });

  const [error, setError] = useState(false);

  const {artist, song} = search;

  const updateSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name] : e.target.value
    });
  };

  const searchInfo = (e) => {
    e.preventDefault();
    if(song === '' || artist === '') {
      setError(true);
      return;
    }
    setError(false);

    saveSearch(search);
  }

  const showError = (error) ? <Error msg="Todos los campos son obligatorios"/> : null;

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={searchInfo}>
            {showError}

            <fieldset>
              <legend className="text-center">Songs Lyrics Finder</legend>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Artista">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artist"
                      placeholder="Artist Name"
                      onChange={updateSearch}
                      value={artist}/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Artista">Song</label>
                    <input
                      type="text"
                      className="form-control"
                      name="song"
                      placeholder="Song Name"
                      onChange={updateSearch}
                      value={song}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-primary float-right">Search</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
