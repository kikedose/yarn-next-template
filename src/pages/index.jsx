import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home({ data }) {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: 'background.paper',
    }}
    >
      <Image
        src={data.sprites.front_default}
        width={96}
        height={96}
      />
      <Typography
        variant="h4"
        color="primary.main"
      >
        Next.js & MUI
      </Typography>

      <Typography
        variant="caption"
        color="text.secondary"
      >
        Boilerplate by Enrique Domínguez and
        {' '}
        {`${data.name[0].toUpperCase()}${data.name.substring(1)}`}
      </Typography>
    </Box>
  );
}

Home.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.POKEAPI}/132`);

  return {
    props: { data: res.data },
  };
}
