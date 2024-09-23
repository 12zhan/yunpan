import { setTheme } from "mdui";
import { props } from "./type";

export default function index(props: props) {
    return (
        <mdui-top-app-bar style={{ position: 'relative' }}>
            <mdui-button-icon icon="menu" onClick={props.menuClick}></mdui-button-icon>
            <mdui-top-app-bar-title>Cloud Disk</mdui-top-app-bar-title>
            <div style={{ flexGrow: 1 }}></div>
            <mdui-button-icon icon="more_vert" onClick={() => setTheme('dark')}></mdui-button-icon>
        </mdui-top-app-bar >
    )
}
