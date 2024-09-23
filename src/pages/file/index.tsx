import Table from '../../components/table'
import style from './index.module.scss'

export default function index() {
    return (
        <div className={style.container}>
            <mdui-fab icon="edit" style={{ position: 'absolute', bottom: 20, right: 20 }}></mdui-fab>

            <div className='search'>
                <div>
                    <mdui-text-field icon="search" style={{ width: 300, marginLeft: 15 }} variant="outlined" label="搜索文件"></mdui-text-field>
                    <mdui-segmented-button-group selects="single" value="week">
                        <mdui-segmented-button value="day">Day</mdui-segmented-button>
                        <mdui-segmented-button value="week">Week</mdui-segmented-button>
                        <mdui-segmented-button value="month">Month</mdui-segmented-button>
                    </mdui-segmented-button-group>
                </div>
                <div>
                    <mdui-button-icon icon='auto_awesome_mosaic'></mdui-button-icon>
                </div>
            </div>

            <Table header={[
                { name: '文件名', key: 'name' },
                { name: '建议原因', key: 'openTime' },
                { name: '所有者', key: 'owner' },
                { name: '位置', key: 'locahost' },
            ]} data={[
                {
                    name: <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><mdui-icon name='picture_as_pdf' />tiecode.exe</div>,
                    openTime: '你打开过该文件.2022-01-01',
                    owner: 'admin',
                    locahost: '/home'
                }, {
                    name: <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}><mdui-icon name='picture_as_pdf' />tiecode.exe</div>,
                    openTime: '你打开过该文件.2022-01-01',
                    owner: 'admin',
                    locahost: '/home'
                },
            ]} />

        </div>
    )
}
