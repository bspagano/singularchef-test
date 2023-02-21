import React from 'react'
import useInitialState from './hooks/useInitialState';
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { router } from "./config/router";
import ThemeContext from './context/ThemeContext';
export default function App() {
    const initialState = useInitialState();
    return (
        <ThemeContext.Provider value={initialState}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeContext.Provider>
    )
}
