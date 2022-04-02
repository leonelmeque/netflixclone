import HeroHeader from "@/components/HeroHeader";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe('<HeroHeader />',()=>{
    test('renders successfuly',()=>{
        render(<HeroHeader />)
        expect(screen.getByTestId('hero-header')).toBeTruthy()
    })
})