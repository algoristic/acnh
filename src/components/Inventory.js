import { Component } from 'react'

import AppSettingsBar from './AppSettingsBar'

export default class Inventory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppSettingsBar active={{ slug: 'inventory', text: 'Mein 📦 Inventar' }} />
        );
    }
}
