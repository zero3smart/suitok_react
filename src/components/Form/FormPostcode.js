import React, {Component} from 'react'
import CONST from '../../global/const'
import FormSelect from './FormSelect'

import CustomDropdown from './CustomDropdown'

import $ from 'jquery'

class FormPostcode extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            postcodes: [],
            dvalue:{
                // value: this.props.value,
                // label: this.props.value
                value: this.props.placeholder,
                label: this.props.placeholder
            }
        }
        this.callbackInputChange = this.callbackInputChange.bind(this);
        // this.callbackBlur = this.callbackBlur.bind(this);
    }

    componentDidMount(){
    }

    callbackInputChange(value){

        if(value == ''){
            this.setState({
                postcodes: []
            })
            return;
        }
        // var postcodes = this.state.postcodes;
        // postcodes.push({
        //     key: value,
        //     text: value,
        //     value: value
        // })

        // this.setState({
        //     postcodes: postcodes
        // });
        // return;
        var instance = this;
        $.ajax({
            url: CONST.API.BASE_URL + CONST.API.URLS.POSTCODE_SUGGEST,
            method: 'GET',
            type: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-API-KEY': CONST.API.KEY
            },
            data: {
                'q': value
            },
            dataType:"json",
            success: function(response){       
                if(response.status_text == CONST.API.RESP.SUCCESS.status_text){
                    var suggestions = response.suggestions;
                    var postcodes = [];
                    for(var sindex = 0; sindex < suggestions.length; sindex++){
                        postcodes.push({
                            key: suggestions[sindex],
                            text: suggestions[sindex],
                            value: suggestions[sindex]
                        })
                    }

                    instance.setState({
                        postcodes: postcodes
                    })
                }
                else{
                    instance.setState({
                        postcodes: [{
                            key: 0,
                            text: '',
                            value: 0
                        }]
                    })
                }
                
                console.log('postcodes', instance.postcodes);
            }
        })

    }
    
    render() {

        var wrap_class = "form-field-wrap";

        if(this.props.hasError || this.props.fieldError === CONST.FIELD_ERR.EMPTY){
            wrap_class = wrap_class + ' error--empty';
        }

        if(this.props.msgDesc && this.props.msgDesc !== ''){
            wrap_class = wrap_class + ' has--description';
        }

        var input_wrap_class="form-field__input-wrap";

        if(this.props.type === CONST.FORM_INPUT.PASSWORD){
            input_wrap_class = input_wrap_class + ' input--has-title';
        }

        return(
            <div className={wrap_class}>
                <label className="form-field__title">{this.props.label}</label>
                <div className="form-field-row hide--arrow">
                    {/* <FormSelect
                        isSearchable={true}
                        options={this.state.postcodes}
                        defaultValue={this.state.dvalue}
                        callbackInput={this.callbackInputChange}
                        callback={this.props.callback}
                        noOptionsMessage={(input) => "0 results found"}
                    /> */}
                    <CustomDropdown
                        options={this.state.postcodes}
                        callbackInputChange={this.callbackInputChange}
                    />
                </div>
                <label className="form-field__desc">{this.props.msgDesc}</label>
                <label className="form-field__error">{this.props.msgErrorEmpty}</label>
            </div>
        );
        
    }
}
export default FormPostcode