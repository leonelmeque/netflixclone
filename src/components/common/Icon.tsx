import React, { ComponentPropsWithoutRef } from "react"
import { IconNames } from "src/types"
import * as Feather from "react-feather"

export interface IconProps
	extends ComponentPropsWithoutRef<"button"> {
	iconName: IconNames<typeof Feather>;
	size?:number | string
}

const Icon = (props: IconProps): JSX.Element => {
	if (props.iconName.length === 0) {
		throw new Error("Please provide an icon name")
	}
	const Element:Feather.Icon = Feather[props.iconName]
	return <Element aria-label={`${props.iconName} icon`} size={!props.size ? 24 : props.size}/>
}

export default Icon