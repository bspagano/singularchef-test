import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Box, Grid } from '@mui/material';
import ThemeContext from '../context/ThemeContext';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({food}) {
  const { state, addToCart } = React.useContext(ThemeContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title= {food.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={food.image_url}
        alt="Paella dish"
      />
      <Box sx={{ m: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <AccessTimeIcon/> {food.time}min
          </Grid>
          <Grid item xs={6}>
            <LocalDiningIcon/> {food.type}
          </Grid>
        </Grid>
      </Box>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <RemoveRedEyeIcon/>
        </IconButton> 
        <IconButton aria-label="share" onClick={() => addToCart(food)}>
          <AddShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}