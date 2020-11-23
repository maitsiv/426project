import {useState, useEffect} from 'react';
import * as yelp_api from './yelp_api';

export function useRestaurant(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setBusinesses([]);
        const getRestaurants = async () => {
            try {
               // const autoComp = await api.get('/autocomplete?text='+searchParams.term+'&latitude=37.786882&longitude=-122.399972');
                const rawData = await yelp_api.get('/businesses/search?categories=indpak&location='+searchParams.location, searchParams);
                const restInfo = await rawData.json();
                setBusinesses(restInfo.businesses);
                setAmountResults(restInfo.total);
            } catch(e) {
                console.error(e);
            }
        };
        getRestaurants();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}