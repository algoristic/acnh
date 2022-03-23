import { Component } from 'react'

import Info from '../context/Info'

import SizeInfo from './SizeInfo'

class InfoWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { sizeInfo: undefined };
        this.toggleSizeInfo = this.toggleSizeInfo.bind(this);
    }

    toggleSizeInfo(size) {
        if(size) {
            let newSize = size;
            if(this.state.sizeInfo) {
                newSize = undefined;
            }
            this.setState({ sizeInfo: newSize });
        }
    }

    render() {
        const { children } = this.props;
        const { sizeInfo } = this.state;
        return (
            <div className="app bootstrap-wrapper">
                { sizeInfo && (
                    <SizeInfo size={sizeInfo} toggle={this.toggleSizeInfo} />
                )}
                <Info.Provider value={{ sizeInfo: this.toggleSizeInfo }}>
                    { children }
                </Info.Provider>
            </div>
        );
    }
}

export default InfoWrapper;
