import './styles/style.css';

import {Context} from "../../Context";
import {useContext} from "react";

const EasyMode = () => {
    const [context, setContext] = useContext(Context);

    function turnEasyModeOn() {
        setContext(() => ({...context, easyMode: !context.easyMode}));
    }

    return (
        <div className="easy-mode">
            <h4 className="easy-mode__title">Easy mode</h4>
            <input className="easy-mode__checkbox" type="checkbox" id="easy-mode__checkbox" checked={context.easyMode} onChange={turnEasyModeOn} />
        </div>
    );
}
 
export default EasyMode;
