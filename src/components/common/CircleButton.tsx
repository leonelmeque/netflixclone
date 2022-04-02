import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"
import { IconNames } from "src/types"
import Icon, { IconProps } from "./Icon"

interface CircleButtonProps
	extends Pick<ButtonProps, "onClick" | "style"> {}
const CircleButton = (
	{onClick, size, iconName}: CircleButtonProps &
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
		onClick={onClick}
	>
		<Icon iconName={iconName} size={size} />
	</Button>
)

export default CircleButton
