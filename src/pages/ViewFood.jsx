import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ThemeContext from '../context/ThemeContext';

function App() {
   const { id } = useParams();
   const [food, setFood] = useState({});
   const navigate = useNavigate();
   const { addToCart } = useContext(ThemeContext);

   const load = async () => {
      const snap = await getDoc(doc(db, 'foods', id));
      if (snap.exists()) {
         setFood(snap.data());
      }else{
         navigate('/');
      }
   }
   useEffect(() => {
      if(!id){
         navigate('/');
      }else{
         load();
      }
   }, [id]);
   console.log(food)
  return (
   <Box>
      <Grid container spacing={3}>
         <Grid item xs={6} >
            <img
               src={food.image_url}
            />
         </Grid>
         <Grid item xs={6} >
            <Typography variant="h1" component="h2">
               {food.name}
            </Typography>
            <Typography variant="h1" component="h2">
               {food.description}
            </Typography>
            {
               food.rating && (
                  <Rating name="half-rating" defaultValue={5} value={food.rating} precision={0.5} readOnly />
               )
            }
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
            <Typography variant="h1" component="h2">
               ${food.price}
            </Typography>
            <Button variant="contained" onClick={() => addToCart(food) }>Añadir al carrito</Button>
         </Grid>
      </Grid>
   </Box>
  );
};

   
 export default App;

 