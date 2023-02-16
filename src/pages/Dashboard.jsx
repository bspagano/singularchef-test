import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import  Header from "../components/Header";
import Food from "../components/Food";
import { db } from "../config/firebase";
import { Grid } from "@mui/material";

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
      <h1>Nuestras Recetas</h1>
      <p>Elige las recetas y recibe sus ingredientes exactos en tu domicilio </p>
      <Grid>
        <Grid>
        <div>
          <button>Platos Principales(31)</button>
        </div>
        </Grid>
       <Grid>
          <div>
            <button>Desayuno(4)</button>
          </div>
        </Grid>
       <Grid>
          <div>
            <button>Detox(1)</button>
          </div>
       </Grid>
        <Grid>
          <div>
            <button>Postres(4)</button>  
          </div>
        </Grid>
        <Grid>
          <div>
            <button>Otros(8)</button>
          </div>
        </Grid>
        <Grid>
          <div>
             <button>Kinds Approved(27)</button>
          </div>
        </Grid>
      </Grid>
      
     

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
