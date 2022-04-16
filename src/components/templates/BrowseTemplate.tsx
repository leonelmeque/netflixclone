import FooterWeb from "-components/organisms/Footer/FooterWeb";
import Billboard from "-components/organisms/Billboard/Billboard";
import { VoidFunctionComponent } from "react";
import StreamingCatalogContainer from "-components/organisms/StreamingCatalog/StreamingCatalogContainer";

interface AppTemplateProps {
    
}
 
const AppTemplate: VoidFunctionComponent<AppTemplateProps> = () => {
    return ( <div className="bg-black h-screen">
        <Billboard />
        <StreamingCatalogContainer catalogName="Streaming now" resource="popular" />
        <FooterWeb />
    </div> );
}
 
export default AppTemplate;