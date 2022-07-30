import Billboard from "-components/organisms/Billboard/Billboard";
import { render } from "@testing-library/react";

describe("<Billboard />",()=>{
    test("renders correctly",()=>{
        render(<Billboard />)
    })
    test.todo("Auto plays trailer after 5 seconds")
    test.todo("shows modal when user clicks more button")
    test.todo("restarts modal when trailer ends")
    test.todo("mutes and unmutes movie trailer audio")
})