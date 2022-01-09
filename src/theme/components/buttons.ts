
const button = {
    baseStyle: {
        fontWeight: 'bold',
        bg: 'brand.red',
        outline: 'hidden',
        padding: '12px 16px',
        'border-radius': '0.15rem',
        display: 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center',
        border: 'none',
        
    },
    variants: {
        primary: {
            bg: 'brand.red',
            color: 'brand.white',
            _hover: {
                bg: 'brand.red.hover'
            }
        },
        secondary: {
            bg: 'brand.white',
            color: 'brand.dark'
        },
        tertiary: {
            bg: 'grey',
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