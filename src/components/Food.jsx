import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { Box, Grid } from '@mui/material';


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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title= {food.name}
        subheader="September 14, 2016"
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
        <IconButton aria-label="share">
          <AddShoppingCartIcon/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>:</Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography paragraph>
          {food.description}
                
          </Typography>
          <Typography >
         
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}