import React from 'react'
import { render } from 'react-dom'
import MapEditorPanel from './components/MapEditorPanel'

import store from './store'
import { Provider } from 'react-redux'

const wrapper = document.querySelector('#root')
console.log("store",store)
render(
    <Provider store={store}>
        <MapEditorPanel/>
    </Provider>,
    wrapper)

