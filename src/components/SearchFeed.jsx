import React, {useState, useEffect} from 'react'
import { Box, Typography } from '@mui/material';
import { Videos} from './'

import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
const SearchFeed = () => {
   
   
     const [videos, setVideos] = useState([])

     const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
        .then((data) => setVideos(data.items))
    }, [searchTerm])
    return(
        <Box p={2} sx={{ overflow: 'hidden', height: '100vh', width: '100%', flex: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            Search Results for:  <span style={{ color: '#f31503'}}>{ searchTerm}</span> videos
            </Typography>

            <Videos videos={videos}/>
        </Box>
    )
}

export default SearchFeed
