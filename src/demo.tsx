import React from "react"
import ReactDOM from "react-dom"
import { BasicUsage, MultipleLevels, MultipleProviders } from "./ContextMenu.stories"
import './demo.scss'

const root = document.createElement('div')
document.body.append(root)
ReactDOM.render(<>
    <h3>Basic usage</h3>
    <BasicUsage/>
    <h3>Multiple levels</h3>
    <MultipleLevels/>
    <h3>Multiple providers</h3>
    <MultipleProviders/>
</>, root)