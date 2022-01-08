import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"
import { IconNames } from "src/types"
import Icon, { IconProps } from "./Icon"

interface CircleButtonProps
	extends Pick<ButtonProps, "onClick" | "style"> {}
const CircleButton = (
	props: CircleButtonProps &
		Pick<IconProps, "iconName" | "size">
): JSX.Element => (
	<Button
		role={"button"}
		aria-label='circular-button'
		padding={".5rem"}
		borderRadius={"99999px"}
		justifyContent={"center"}
		background={"none"}
		border={"1px solid brand.white"}
		onClick={props.onClick}
	>
		<Icon iconName={props.iconName} size={props.size} />
	</Button>
)

export default CircleButton
