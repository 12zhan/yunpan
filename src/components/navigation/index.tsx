import { NavigationProps } from "./type";
import style from './index.module.scss'
import icon from '../../assets/icon.svg'
import { useNavigate } from "react-router-dom";

export default function index(_: NavigationProps) {
    const nav = useNavigate()
    function to(path: string) {
        nav(path)
    }

    return (
        <div className={style.container}>
            <div className='icon'>
                <img src={icon} />
                <span>Cloud Disk</span>
            </div>

            <mdui-collapse>
                <mdui-collapse-item>
                    <mdui-list-item rounded slot="header" icon="insert_drive_file">
                        我的文件
                        <mdui-icon slot="end-icon" name="keyboard_arrow_down"></mdui-icon>
                    </mdui-list-item>
                    <div style={{ paddingLeft: '2rem' }}>
                        <mdui-list-item rounded onClick={() => to('/file/video')} icon="video_file">视频</mdui-list-item>
                        <mdui-list-item rounded onClick={() => to('/file/photo')} icon="photo">图片</mdui-list-item>
                        <mdui-list-item rounded onClick={() => to('/file/music')} icon="library_music">音乐</mdui-list-item>
                        <mdui-list-item rounded onClick={() => to('/file/snippet')} icon="text_snippet">文档</mdui-list-item>
                    </div>
                </mdui-collapse-item>
            </mdui-collapse>
        </div>
    )
}