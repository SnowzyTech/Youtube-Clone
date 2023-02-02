import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';


const ChannelDetail = () => {
   const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
    const { id } = useParams();

    console.log(channelDetail)

    useEffect(() => {
        fetchFromAPI(`channels?path="snippet&id=${id}`)
         .then((data) => setChannelDetail(data?.items[0]));

         fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
         .then((data) => setVideos(data?.items))
    }, [id])
    return(

           <Box minHeight="95vh">
             <Box>
                <div style={{
                    background: 'linear-gradient(90deg, rgba(0,238, 247,1) 0%,rgba(206,3,184,1) 100%, rgba(0,212,225,1) 100%)',
                    zIndex: 10,
                    height: '300px',
                    width: '100%'
                }}
                />

                  <ChannelCard  channelDetail={channelDetail} marginTop="-110px"/>
             </Box>
             <Box display="flex" justifyContent="center" alignItems="center" p="2">
                <Box  sx={{ mr: { xs: '0px', sm: '70px', xl: '-10px' }, display: 'flex', justifyContent: 'center',
                alignItems: 'center', ml: { xs: '20px',  lg: '200px'}}} />
                <Videos videos={videos} />
            </Box>
           </Box>
        
    )
}

export default ChannelDetail
