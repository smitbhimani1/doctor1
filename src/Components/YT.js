import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import React from 'react'
import '../Styles/YT.css';
import "../Styles/Info.css";

const YT = () => {
    const [isGraterThan] = useMediaQuery('(min-width: 800px)')
    return (
        <Box>
            <Flex justifyContent={'center'}>
                <h3 className="info-title">
                    <span>Our Channel</span>
                </h3>
            </Flex>
            {isGraterThan ? <>
                <Flex flexWrap={'wrap'} width={'100%'} justifyContent={'space-between'} p={30}>
                    {/* <iframe width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Flex>
            </> : <>
                <Flex flexWrap={'wrap'} width={'100%'} justifyContent={'space-between'} p={30}>
                    {/* <iframe className="ytvideos" width="100%" height="315" src="https://www.youtube.com/embed/gNGa9p_x0EI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe className="ytvideos" width="49%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/MgJYRHgq2G4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    {/* <iframe className="ytvideos" width="100%" height="315" src="https://www.youtube.com/embed/gNGa9p_x0EI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                </Flex>
            </>}
        </Box>
    )
}

export default YT