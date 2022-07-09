import React, { useEffect, useRef, useState } from 'react'
import "../Footer.css"
import { useDataLayerValue } from '../DataLayer'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlayListPlayIcon from '@mui/icons-material/PlaylistPlay';
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';


function Footer({ spotify }) {
    const [{ item, playing }, dispatch] = useDataLayerValue();

    
    const handlePlayPause = () => {
        updateInfo()
        if (playing) {
            spotify.pause();
            dispatch({
                type: "SET_PLAYING",
                playing: false,
            });
        } else {
            spotify.play();
            dispatch({
                type: "SET_PLAYING",
                playing: true,
            });
        }
    };
    
    let i = false
    const updateInfo = () => {
        i = !i
    }

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
            dispatch({
                type: "SET_ITEM",
                item: r.item,
            });
            dispatch({
                type: "SET_PLAYING",
                playing: r.is_playing,
            });
        });
    }, [spotify, updateInfo]);

    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__albumLogo"
                    src={item?.album.images[0].url}
                    alt={item?.name}
                    key={item?.album.images[0].url}/>
                {item ? (
                    <div className="footer__songInfo">
                        <h4>{item.name}</h4>
                        <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="footer__songInfo">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                )}
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container alignItems="center" spacing={3}>
                    <Grid item>
                        <PlayListPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer