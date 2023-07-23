'use client'

import Link from 'next/link';
import { useCallback, useState } from 'react';

import { Button, Paper, Typography } from '@mui/material';

import AddItem from '../Add/AddItem';

interface Page {
    name: string;
    component: JSX.Element;
  }
  
  const pages: Page[] = [
    {
      name: 'Add an Item',
      component: <AddItem/>
    },
    {
      name: 'Find an Item',
      component: <h1>TODO: Find</h1>
    },
    {
      name: 'Update an Item',
      component: <h1>TODO: update</h1>
    },
    {
      name: 'Remove an Item',
      component: <h1>TODO: remove</h1>
    }
  ];

export default function Home() {
    const [activeComponent, setActiveComponent] = useState<JSX.Element | null>(null);
    
    const handleClick = useCallback((page: Page) => {
        setActiveComponent(page.component);
    }, []);

    const goHome = useCallback(() => {
        setActiveComponent(null);
    }, []);
  
    return (
      <main style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Button onClick={goHome}>Go Home</Button>
        {activeComponent === null ? <>
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
                onClick={() => handleClick(page)}>
                    {page.name}
                </Button>)}
            </Paper>
        </> : activeComponent}
      </main>
    )
  }

interface ContentProps {

}

function Content(props: ContentProps) {
    return (
        <>
            
        </>
    );
}
