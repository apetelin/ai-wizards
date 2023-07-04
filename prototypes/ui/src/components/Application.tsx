import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { Settings } from './Settings';

import logo from '@assets/images/logo.png';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const defaultTheme = createTheme();

const Application: React.FC = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
    <Box component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}>
      <Toolbar>
          <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <div>AI Wizzards almighty generator</div>
            </Typography>
      </Toolbar>
      <Container maxWidth={false} sx={{flexGrow: 1}}>
        <Grid container spacing={3} sx={{height: "100%"}}>
          <Grid item xs={6}>
            <Grid container rowSpacing={3} sx={{height: 'calc(100% - 20px)'}}>
              <Grid item xs={12}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 'calc(100% - 32px)',
                    }}
                  >
                  <Settings/>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 'calc(100% - 8px)',
                    }}
                  >
                  <div>Terminal</div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100% - 32px)',
                  }}
                >
            <div>Generated result</div>
            </Paper>
          </Grid>          
        </Grid>
      </Container>
    </Box>
</ThemeProvider>
  );
};

export default Application;

