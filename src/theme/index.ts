import { extendTheme } from '@chakra-ui/react'
import colors from './foundations/colors'
import Button from './components/buttons'


const overrides = {
    colors: colors,
    components: {
        Button
    }
}

export default extendTheme(overrides)