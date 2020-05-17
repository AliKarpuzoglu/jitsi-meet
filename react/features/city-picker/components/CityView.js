// @flow

import React, { PureComponent } from 'react';
import {
    Button,
    Text,
    View
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';


import { JitsiModal } from '../../base/modal';
import { connect } from '../../base/redux';

import { CITY_VIEW_MODAL_ID, city_dict } from '../constants';
import { setActiveModalId } from '../../base/modal/actions';

import { updateSettings } from '../../base/settings';

import styles, { PLACEHOLDER_TEXT_COLOR } from '../../welcome/components/styles';

type Props = {

     /**
     * Invoked to update the URL
     */
    dispatch: Dispatch<any>,
}

/**
 * Implements a page that offers a city chooser
 */
class CityView extends PureComponent<Props> {
    
    constructor(props: Props) {
        super(props);
        this.state={
            selected : undefined,
            textFieldColor :'#FFFFFF'

        }
        this._onChangeText = this._onChangeText.bind(this);
        this._onClose = this._onClose.bind(this);
        this._done = this._done.bind(this)

    }

    /**
     * Implements {@code PureComponent#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        const { selected,textFieldColor } = this.state;
        // var textFieldColor = '#FFFFFF'
        let data = [];
      
        
        Object.keys(city_dict.map).forEach(function(key) {
        data.push({value:key})
        });

        return (
            <JitsiModal
                headerProps = {{
                    headerLabelKey: 'cityView.header'
                }}
                style={styles.cityPicker_main} 
                onClose={this._onClose}
                modalId = { CITY_VIEW_MODAL_ID }>
                    <View
                style={styles.cityPicker_content} >
                    <Text 
                      style={styles.cityPicker_text}>
                          Um die richtigen Einstellungen zu übernehmen, wähle bitte dein Medienzentrum aus.</Text>
                    <Dropdown 
                    label='Wählen Sie Ihr Medienzentrum aus'
                    baseColor={textFieldColor}
                    textColor='#FFFFFF'
                    selectedItemColor="#000000"
                    data={data}
                    onChangeText={this._onChangeText}
                    ></Dropdown> 
                    <Button
                    onPress={this._done}
                    color='#FFFFFF'
                    title="Fertig"></Button>
                    </View>
            </JitsiModal>
        );
    }


    /**
     * function that is called when the user tries to close the modal
     * returns true when the modal can be closed
     * otherwise stays open until the user chose a city
     */
    _onClose(){
        var { selected,textFieldColor }  = this.state;
        console.log(city_dict)
        if(selected){
            
            return true;
        }
        this.setState({
            textFieldColor: '#FF0000'
        })

    }


    _done(){
        const { dispatch } = this.props;
        console.log("done")
        if(this._onClose()){
            dispatch(setActiveModalId())
        }

    }
    /**
     * function that is called when a value was selected in the dropdown
     * @param {*} selected value of the selected item
     */
    _onChangeText(selected){
        const { dispatch } = this.props;
        this.setState({
            textFieldColor: '#FFFFFF'
        })
        this.setState({selected})
        let url =  city_dict.get(selected)
        console.log("selected" + url)
        // Store display name in settings
        dispatch(updateSettings({
            serverURL: url 
        }));
            

    }
}

/**
 * Maps part of the Redux state to the props of this component.
 *
 * @param {Object} state - The Redux state.
 * @returns {Props}
 */
function _mapStateToProps(state) {
    return {
        // _url: state['features/base/config'].helpCentreURL || DEFAULT_HELP_CENTRE_URL
    };
}

export default connect(_mapStateToProps)(CityView);
