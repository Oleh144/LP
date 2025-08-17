import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'
import {RouterProvider} from "react-router";
import router from "./Routing.jsx";


const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: '#303031',
        secondary: '#71A894'
      },
      fonts: {
        heading: {value: "Libre Bodoni, sans-serif"},
        text: {value: "Libre Bodoni, sans-serif"},
      },
      sizes: {
        container: '1392px',
      },
      shadows: {
        _nav: "0 32px 56px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>,
)
