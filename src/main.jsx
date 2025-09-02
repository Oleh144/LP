import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {ChakraProvider, createSystem, defaultConfig, defineConfig} from '@chakra-ui/react'
import './index.css'
import App from "./App.jsx";


const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                primary: '#303031',
                secondary: '#71A894',
                gray: '#66645E'
            },
            fonts: {
                heading: {value: "Libre Bodoni, sans-serif"},
                body: {value: "Roboto, sans-serif"},
            },
            sizes: {
                container: '1392px',
                heading: '60px',
            },
            spacing: {
                sectionSpace: {value: "30px"},
                sectionSpaceMd: {value: "40px"},
                sectionSpaceLg: {value: "75px"},
            },
        },
    },
})

const system = createSystem(defaultConfig, config)

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider value={system}>
            <App/>
        </ChakraProvider>
    </StrictMode>,
)
