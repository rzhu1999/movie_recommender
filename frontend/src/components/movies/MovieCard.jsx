import React from 'react';
// import { Link } from 'react-router-dom';
import {
  makeStyles,
  // Avatar,
  // Box,
  // Divider,
  // Paper,
  // Hidden,
  // List,
  // Typography
} from '@material-ui/core';
import apiConfig from '../../api/apiConfig';

const useStyles = makeStyles(() => ({
  moviecard: {
    position: 'relative',
    'background-position': 'top',
    'background-repeat': 'no-repeat',
    'background-size': 'cover',
    'padding-top': '160%',
    // "border-radius": $border-radius,
    'margin-bottom': '1rem',

    // @media (hover: hover) and (pointer: fine) {
    // &:hover::before {
    //     opacity: 0.8;
    // }

    // &:hover .btn {
    //     transform: translate(-50%, -50%) scale(1);
    // }
    // }
  },
}));

const MovieCard = (props) => {
  const classes = useStyles();
  const { item } = props;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
  return (
    // <Link to={link}>
    <div>
      <div className={classes.moviecard} style={{ backgroundImage: `url(${bg})` }} />
      <h3>{item.title || item.name}</h3>
    </div>
    // </Link>
  );
};

export default MovieCard;
