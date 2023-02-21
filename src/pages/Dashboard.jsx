import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import  Header from "../components/Header";
import Food from "../components/Food";
import { db } from "../config/firebase";
import { Grid, Typography, Box  } from "@mui/material";


const Dashboard = () => {
  const [foods, setFoods] = useState([]);

  const load = async () => {
    const queryRef = query(
      collection(db, 'foods')
    );
    const data = (await getDocs(queryRef)).docs;
    const items = data.map(doc => doc.data());
    setFoods(items);
    console.log(items)
  }
  useEffect(() => {
    load();
  }, []);
  return (
    <>
      <Header/>
      <Box sx={{ m: 2 }}>
        <Typography align="center" variant="h2"> Nuestras Recetas </Typography>
        <Typography align="center"> Elige las recetas y recibe sus ingredientes exactos en tu domicilio </Typography>
      </Box>
      
      <Grid container spacing={2}>
        {
          foods.map((element, index) => {
            return(
              <Grid item xs={4} key={index}>
                <Food
                  food={element}
                />
              </Grid>
            )
          })
        }
        
      </Grid>
    </>
  );
};

export default Dashboard;
