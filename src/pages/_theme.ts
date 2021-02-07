
import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
    // initialColorMode: "light",
    useSystemColorMode: true,
    styles: {
        global: {
            "html": {
                height: "100%",
            },
            "body": {
                fontSize: "sm",
                color: "gray.600",
                lineHeight: "tall",
                minHeight: "100%",
                width: "100%",
            },
            a: {
                color: "teal.500",
            },
        },
    },
}

const theme = extendTheme({ config })
export default theme