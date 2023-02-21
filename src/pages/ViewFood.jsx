import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { db } from '../config/firebase';
function App() {
   const { id } = useParams();
   const [food, setFood] = useState({});
   const navigate = useNavigate();
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
         load()
      }
   }, [id])
  return (
   <div>
      dasda
   </div>
  );
};

   
 export default App;

 