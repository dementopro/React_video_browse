import React from 'react'
import { useHistory } from 'react-router'
import {
  Box,
  Typography,
  Stack,
  Divider,
} from '@mui/material'
import { Scrollbar } from 'components/Scrollbar'

const relatedVideos = [
  {
    src: '/video.mp4',
    id: 1
  },
  {
    src: '/video-fe.mp4',
    id: 2
  }
]

const RelatedVideoSection = ({ height, relatedVideoLoading }) => {
  const history = useHistory()

  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#141414", fontWeight: 500, mb: 3 }}>
        Related
      </Typography>

      <Scrollbar style={{ height }}>
        {
          <Stack direction="column" divider={<Divider sx={{ my: 2 }} />}>
            {
              relatedVideos.map((item, index) => (
                <Box onClick={() => history.push(`/video/${item.id}`)} key={index}>
                  {item.src}
                </Box>
              ))
            }
          </Stack>
        }
      </Scrollbar>
    </Box >
  )
}

export default RelatedVideoSection
