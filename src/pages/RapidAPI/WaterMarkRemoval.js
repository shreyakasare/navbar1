import axios from 'axios';
import React, { useEffect, useState } from 'react'

const options = {
    method: 'GET',
    url: 'https://site-scrapper.p.rapidapi.com/fetchsitetitle',
    params: {
        url: 'http://www.bbc.co.uk'
    },
    headers: {
        'X-RapidAPI-Key': '18d1ee238dmsheffffeb32d7c714p1329f7jsnf39e789f1df3',
        'X-RapidAPI-Host': 'site-scrapper.p.rapidapi.com'
    }
};

const WaterMarkRemoval = () => {

    const [dataSite, getdataSite] = useState([]);
    const siteTitle = async () => {
        try {
            debugger
            const response = await axios.request(options);
            getdataSite(response)
            console.log(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        siteTitle()
    })

    return (
        <>
            <div>WaterMarkRemoval</div>
            <div>{dataSite.data}</div>
        </>
    )
}

export default WaterMarkRemoval