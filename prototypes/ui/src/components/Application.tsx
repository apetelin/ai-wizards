import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import { SettingForm, Settings } from './Settings';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useSendToAI } from './useSendToAi';
import { Loader } from './widgets/Loader';

const defaultTheme = createTheme();

const Application: React.FC = () => {

  const [loadState, response, sendRequest] = useSendToAI();
  const onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.target as HTMLFormElement);
    const theData = Object.fromEntries(formData.entries()) as unknown as SettingForm;
    e.preventDefault();
    e.stopPropagation();
    sendRequest(`generate jenkins config for ${theData['build-tool']}, ${theData['deployment-target']}, ${theData['integration-platform']}`);
  }, []);

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
              <div>AI Wizards almighty generator</div>
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
                  <form onSubmit={onSubmit}>
                      <Settings/>
                  </form>
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
                  {!loadState ? <div>Waiting for a unicorn to appear...</div> : loadState === "pending" ? <Loader /> : <pre>{response}</pre> }            
                  
            </Paper>
          </Grid>          
        </Grid>
      </Container>
    </Box>
</ThemeProvider>
  );
};

export default Application;

