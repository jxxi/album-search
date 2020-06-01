
import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';
import Album from './Album';


export default function Albums({ albums }) {
    return (
        <Grid fluid>
            {albums.map(album => {
                return <Album {...album} />;
            })}
        </Grid>
    );
}