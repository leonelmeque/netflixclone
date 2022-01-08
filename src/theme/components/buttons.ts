import { BoxProps } from "@chakra-ui/react"

const center_div: BoxProps = {
    justifyContent: 'center',

}
const button = {
    baseStyle: {
        fontWeight: 'bold',
        bg: 'brand.red',
        outline: 'hidden',
        padding: '0 1rem',
        'border-radius': '0.15rem',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        border: 'none'
    },
    variants: {
        primary: {
            backgroundColor: 'brand.red',
            color: 'brand.white',
            _hover: {
                backgroundColor: 'brand.red.hover'
            }
        },
        secondary: {
            backgroundColor: 'brand.white',
            color: 'brand.dark'
        },
        tertiary: {
            backgroundColor: 'grey',
            border: '1px solid grey',
            color: 'brand.white',
            _hover: {
                borderColor: 'brand.white',
                color: 'white'
            }
        }
    }
}

export default button