import { AppBar, Grid, IconButton, Toolbar, Typography } from "@material-ui/core";
import ArrowIeft from "@material-ui/icons/ArrowBack";
import * as React from 'react';

class App extends React.Component {
  public render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container={true}>
              <Grid item={true} xs={3}>
                <IconButton color="inherit">
                  <ArrowIeft />
                </IconButton>
              </Grid>
              <Grid
                  container={true}
                  item={true}
                  xs={6}
                  alignItems="center"
                  justify={"center"}
              >
                <Typography variant="title" color="inherit">
                  { "没有标题"}
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
