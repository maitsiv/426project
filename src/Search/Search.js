import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { SearchOutput } from './SearchOutput/SearchOutput';
import { Results } from './Results/Results';
import useReactRouter from 'use-react-router';
import {useRestaurant} from '../reacthooks/yelp-api/useRestaurant';

export function Search() {
    //console.log("in search")
    const {location, history} = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, restaurantAmount, searchParams, performSearch] = useRestaurant(term, locationParam);
    //console.log(businesses)

    if (!term || !locationParam) {
        history.push('/');
    }

    function search(term, location) {
        //console.log('hi')
        //console.log(term)
        const encodedTerm = encodeURI(term);
        //console.log(encodedTerm)
        const encodedLocation = encodeURI(location);
        history.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
        //console.log(history)
        performSearch({term, location});
    }

    return (
        <div>
            <Navigation term={term} location={locationParam} search={search}/>
            
            <SearchOutput term={searchParams.term}
                                  location={searchParams.location}
                                  restaurantAmount={restaurantAmount}
            />
            <Results businesses={businesses}/>
        </div>
    );
}
