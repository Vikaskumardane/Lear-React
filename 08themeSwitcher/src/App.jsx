
import { useEffect, useState } from 'react'
import './App.css'
import {ThemeProvider} from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode,setThemeMode] = useState("light")  // THIS is the state for chaning the theme

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  /********ACTUAL CHANGING IN THE THEME */
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")

    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  return (
    <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>

     
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme btn */}
                        <ThemeBtn />
                    </div>
                        {/* Card */}
                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                       
                    </div>
                </div>
            </div>

    
    </ThemeProvider>
  )
}

export default App
