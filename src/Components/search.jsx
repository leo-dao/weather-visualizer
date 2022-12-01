import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Search = () => {

    const [location, setLocation] = React.useState({
        longitude: 0,
        latitude: 0
    })

    const [opacity, setOpacity] = React.useState(0)

    let data = require('../utils/worldcities.json');

    const API_KEY = process.env.REACT_APP_API_KEY

    const handleOnSelect = (item) => {
        setLocation({
            longitude: item.lng,
            latitude: item.lat
        })
    }

    const onClick = () => {
        console.log(location)
        setOpacity(0)
    }

    return (
        <div id='search-container'>
            <ReactSearchAutocomplete
                items={data}
                onSelect={handleOnSelect}
                onFocus={() => setOpacity(1)}
                placeholder='Search for a city'
                styling={{
                    zIndex: 1,
                    backgroundColor: `rgba(255, 255, 255, ${opacity})`,
                }}
            />
            <button onClick={onClick}>
                SEARCH
            </button>
        </div>
    );
}

export default Search;