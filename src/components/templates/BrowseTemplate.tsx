import FooterWeb from "-components/organisms/Footer/FooterWeb";
import Billboard from "-components/organisms/Billboard/Billboard";
import { VoidFunctionComponent } from "react";

interface AppTemplateProps {
    
}
 
const AppTemplate: VoidFunctionComponent<AppTemplateProps> = () => {
    return ( <div className="bg-black h-screen">
        <Billboard />
        
        <FooterWeb />
    </div> );
}
 
export default AppTemplate;