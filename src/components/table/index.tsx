import { props } from "./type";

export default function index(props: props) {
    return (
        <table style={{ width: '100%', margin: '10px 15px' }}>
            <thead>
                <tr>
                    {
                        props.header.map((item) => {
                            return <th align='left' key={item.key}>{item.name}</th>
                        })
                    }
                </tr>
            </thead>

            <tbody>
                {
                    props.data.map((item, index) => {
                        return (
                            <tr style={{ height: 40 }} key={index}>
                                {
                                    Object.keys(item).map((key) => {
                                        return <td align='left' key={key}>{item[key]}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
    )
}
