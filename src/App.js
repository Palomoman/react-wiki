import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';

function App() {
  let [pageNumber, setPageNumber] = useState(1)
  let [fetchedData, updateFetchedData] = useState([])
  let { info, results } = fetchedData
  let [search, setSearch] = useState("")
  let [status, setStatus] = useState("")
  let [gender, setGender] = useState("")
  let [species, setSpecies] = useState("")


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then(result => result.json())
      updateFetchedData(data)
    })()
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">Rick & Morty <span className="text-primary">Wiki</span></h1>

      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <Filters setGender={setGender} setSpecies={setSpecies} setStatus={setStatus} setPageNumber={setPageNumber} />
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
