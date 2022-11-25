import React from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Search = () => {

    const [location, setLocation] = React.useState({
        longitude: 0,
        latitude: 0
    })

    let data = require('./worldcities.json');

    const API_KEY = process.env.REACT_APP_API_KEY

    const handleOnSelect = (item) => {

        setLocation({
            longitude: item.lng,
            latitude: item.lat
        })
    }

    return (
        <ReactSearchAutocomplete
            items={data}
            onSelect={handleOnSelect}
            autoFocus
            styling={{
                zIndex: 1,
            }}
        />
    );
}

export default Search;