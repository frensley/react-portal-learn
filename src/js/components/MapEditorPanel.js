import React from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'react-bootstrap'
import LayerEditorTab from 'components/LayerEditorTab'



const tabs = layers => (
    layers.map((l,i) => <LayerEditorTab eventKey={i} title={l.title} content={`This is the content ${i}`}/>)
)

const MapEditorPanel = ({layers}) => (
    <Tabs>
        {tabs(layers)}
    </Tabs>
)

const mapStateToProps = store => ({ layers: store.layers })

export default connect(mapStateToProps)(MapEditorPanel)

