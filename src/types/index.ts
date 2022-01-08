import * as Icons from 'react-feather'

const iconNames = [...Object.keys(Icons).map(name => name)] as const

export type IconNames = typeof iconNames[number] 