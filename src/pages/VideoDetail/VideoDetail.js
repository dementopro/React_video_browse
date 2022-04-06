import React, { useRef, useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import {
  Container,
  Box,
  Grid,
  Tooltip,
} from '@mui/material'
import { Player, BigPlayButton } from 'video-react'
import RelatedVideoSection from './RelatedVideoSection'

const videos = [
  {
    src: '/Video.mp4',
    id: 1
  },
  {
    src: '/Video-fe.mp4',
    id: 2
  }
]

const VideoDetail = (props) => {
  const videoRef = useRef(null)
  const location = useLocation()
  const [currentVideo, setCurrentVideo] = useState(videos[0])

  useEffect(() => {
    const video = location.pathname.split('/')[2]

    setCurrentVideo(videos.find(item => item.id === parseInt(video)))
  }, [location])


  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Tooltip title={`This is ${currentVideo.src}`}>
            <Box ref={videoRef}>
              <Player
                style={{ width: '100%' }}
                src={currentVideo?.src}
              >
                <BigPlayButton position="center" />
              </Player>
            </Box>
          </Tooltip>
        </Grid>

        <Grid item md={4} xs={12}>
          <RelatedVideoSection height={360} />
        </Grid>
      </Grid>
    </Container >
  )
}

export default VideoDetail
