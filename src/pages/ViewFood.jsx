import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ThemeContext from '../context/ThemeContext';

function App() {
   const { id } = useParams();
   const [food, setFood] = useState({});
   const [ingredients, setIngredients] = useState([]);
   const navigate = useNavigate();
   const { addToCart } = useContext(ThemeContext);

   const load = async () => {
      const foodDoc = doc(db, 'foods', id)
      const snap = await getDoc(foodDoc);
      if (snap.exists()) {
         setFood(snap.data());
         const queryRef = query(
            collection(db, 'ingredients'),
            where('food_id', '==', foodDoc)
          );
          const data = (await getDocs(queryRef)).docs;
          const items = data.map(doc => {
            return {
              ... doc.data(),
              id: doc.id
            }
          });
         setIngredients(items)
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
  return (
   <Box>
      <Grid container spacing={3}>
         <Grid item xs={6} >
            <img
               src={food.image_url}
               style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
               }}
               alt={food.name}
            />
         </Grid>
         <Grid item xs={6} padding='4%'>
            <Typography variant="h3" component="h3">
               {food.name}
            </Typography>
            
            {
               food.rating && (
                  <Rating name="half-rating" defaultValue={5} value={food.rating} precision={0.5} readOnly />
               )
            }
            <Typography variant="p" component="p" textAlign="justify" >
               {food.description}
            </Typography>
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
            <Typography variant="p" component="h1">
               ${food.price}
            </Typography>
            <Button variant="contained" onClick={() => addToCart(food) }>Añadir al carrito</Button>
         </Grid>
      </Grid>
      <Box sx={{ m: 1 }}>

         <Typography gutterBottom variant="h5" component="div">
            Ingredientes
         </Typography>
         {
            ingredients?.map(element => {
               return(
                  <Card sx={{ maxWidth: 140 }} key={element.image_url}>
                     <CardMedia
                        sx={{ height: 140, width: 140 }}
                        image={element.image_url}
                        title={element.name}
                     />
                     <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                           {element.name}
                        </Typography>
                     </CardContent>
                  </Card>
               )
            })
         }
      </Box>
   </Box>
  );
};

   
 export default App;

 