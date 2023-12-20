// import { useContext,createContext } from "react";



// export const ThemeContext = useContext({
//     themeMode:"light",
//     darkTheme:()=>{},
//     lightTheme:()=>{},

// })

// export const ThemeProvider = ThemeContext.Provider;


// //********This is the custom useTheme hook for current theme mode  */
// export default function useTheme(){
//     return useContext(ThemeContext)
// }

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}