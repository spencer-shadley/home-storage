'use client'

import { useCallback } from 'react';

import { Button, Paper, Typography } from '@mui/material';

interface Pages {
  name: string;
  page: string;
}

const pages: Pages[] = [
  {
    name: 'Add an Item',
    page: '/add'
  },
  {
    name: 'Find an Item',
    page: '/search'
  },
  {
    name: 'Update an Item',
    page: '/update'
  },
  {
    name: 'Remove an Item',
    page: '/remove'
  }
];

export default function Home() {
  
  const handleClick = useCallback((page: string) => {
  }, []);

  return (
    <main style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Typography variant="h1">Welcome!</Typography>
      <Paper sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flexGrow: 1,
      }}>
        {pages.map(page => 
          <Button 
            sx={{ flexGrow: 1 }}
            key={page.name} 
            onClick={() => handleClick}>
            {page.name}
          </Button>)}
      </Paper>
    </main>
  )
}
