import React from 'react'
import Header from './Header'
import "../Body.css"
import { useDataLayerValue } from '../DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue()

    const playPlaylist = () => {
        spotify
          .play({
            context_uri: `spotify:playlist:37i9dQZEVXcEUaxWGG6aNP`,
          })
          .then(() => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

      const playSong = (id) => {
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then(() => {
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };

    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={discover_weekly?.images[0].url} key={discover_weekly?.images[0].url} alt="" />
                <div className='body__infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons"></div>
                <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist}/>
                <FavoriteIcon fontSize="large" className='body__icon--img' />
                <MoreHorizIcon className='body__icon--img' />
            </div>

            {discover_weekly?.tracks.items.map((item) => (
                <SongRow playSong={playSong} track={item.track} key={item.id} />
            ))}

        </div>
    )
}

export default Body