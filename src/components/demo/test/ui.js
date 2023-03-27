import React from 'react'
import { Switch } from 'antd'

export default class ui extends React.Component{
    constructor(props)
    {
        super(props)

        this.state = {}
    }

    onChange(checked) 
    {
        console.log(`switch to ${checked}`)
    }

    render()
    {
        return (
            <>
                UI组件调用示例
                <Switch defaultChecked onChange={this.onChange} />
            </>
        )
    }
}