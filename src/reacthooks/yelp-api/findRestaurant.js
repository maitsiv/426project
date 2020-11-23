import {useState, useEffect} from 'react';
import * as api from './yelp_api';

export function useRestaurant(term, location) {
    const [businesses, setBusinesses] = useState([]);
    const [amountResults, setAmountResults] = useState();
    const [searchParams, setSearchParams] = useState({term, location});

    useEffect(() => {
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const autoComp = await api.get('/autocomplete?text='+searchParams.term+'&latitude=37.786882&longitude=-122.399972');
                const rawData = await api.get('/businesses/search?categories=indpak&location='+searchParams.location, searchParams);
                const resp = await rawData.json();
                setBusinesses(resp.businesses);
                setAmountResults(resp.total);
            } catch(e) {
                console.error(e);
            }
        };
        fetchData();
    }, [searchParams]);
    return [businesses, amountResults, searchParams, setSearchParams];
}