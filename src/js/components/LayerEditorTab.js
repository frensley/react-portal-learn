import React from 'react'
import {Tab} from 'react-bootstrap'


const LayerEditorTab =  ({eventKey, title, content}) => {
   return <Tab eventKey={eventKey} title={title}>{content}</Tab>
}

export default LayerEditorTab

