import { VoidFunctionComponent } from "react";

interface StreamingCatalogProps {
    catalog: object
}
 
const StreamingCatalog: VoidFunctionComponent<StreamingCatalogProps> = ({catalog}) => {
    console.log(catalog)
    return ( <></> );
}
 
export default StreamingCatalog;