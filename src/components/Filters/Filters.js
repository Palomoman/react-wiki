import React from 'react'
import Gender from './Categories/Gender'
import Species from './Categories/Species'
import Status from './Categories/Status'

const Filters = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
    let clear = () => {
        setStatus("")
        setPageNumber("")
        setGender("")
        setSpecies("")
        window.location.reload(false)
    }
    return (
        <div className='col-3'>
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div
                onClick={clear}
                style={{ cursor: "pointer" }}
                className="text-center text-primary text-decoration-underline mb-4"
            >
                Clear Filters
            </div>

            <div className="accordion" id="accordionExample">
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Status setPageNumber={setPageNumber} setStatus={setStatus} />
            </div>
        </div>
    )
}

export default Filters