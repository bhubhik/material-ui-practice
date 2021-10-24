import {
  AppBar,
  Card,
  Typography,
  Button,
  Container,
  Grid,
  Toolbar,
  CssBaseline,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classes = useStyles();
  return (
    <div className='App'>
      <CssBaseline />
      <AppBar position='relative' gutterBottom>
        <Toolbar>
          <PhotoCameraIcon className={classes.navTitle} />
          <Typography variant='h5'>Photo Album</Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth='sm' className={classes.title}>
            <Typography
              color='textPrimary'
              variant='h2'
              align='center'
              gutterBottom
            >
              Live Moments
            </Typography>
            <Typography
              variant='h5'
              color='textSecondary'
              align='center'
              paragraph
            >
              This a description about my photo album, which shoulf be displayed
              in paragraph. Thanks to material ui.
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See Photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    More Description
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      <Container maxWidth='md' className={classes.cardGrid}>
        <Grid container spacing={4}>
          {cards.map((cards) => (
            <Grid item key={cards} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image='https://source.unsplash.com/random'
                  title='Image Title'
                  className={classes.cardMedia}
                />
                <CardContent className={classes.CardContent}>
                  <Typography variant='h5' gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    This is the inforamtion about the picture. Used for the
                    display
                  </Typography>
                  <CardActions>
                    <Button size='small' color='primary'>
                      View Photo
                    </Button>
                    <Button size='small' color='error'>
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
