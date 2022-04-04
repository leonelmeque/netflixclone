import HeroHeader from "-components/organisms/Header/HeaderWeb";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe('<HeroHeader />',()=>{
    test('renders successfuly',()=>{
        render(<HeroHeader />)
        expect(screen.getByTestId('header-web')).toBeTruthy()
    })
})