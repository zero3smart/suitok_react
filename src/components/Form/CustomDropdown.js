import React, {Component} from 'react'
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import './CustomDropdown.css'

class CustomDropdown extends Component {
    
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    componentDidMount(){
        
    }

    handleChange(event, data){
        console.log('handleChange:', data);
    }

    handleSearchChange(event, data){
        console.log('handleSearchChange:', data);
        this.props.callbackInputChange(data.searchQuery);
    }
    
    render() {
        var options = [
            {
                key: 'key1',
                text: 'text1',
                value: 'value1',
            },
            {
                key: 'key2',
                text: 'text2',
                value: 'value2',
            },
            {
                key: 'key3',
                text: 'text3',
                value: 'value3',
            },
            {
                key: 'key4',
                text: 'text4',
                value: 'value4',
            },
            {
                key: 'key5',
                text: 'text5',
                value: 'value5',
            },
            {
                key: 'key6',
                text: 'text6',
                value: 'value6',
            },
            {
                key: 'key7',
                text: 'text7',
                value: 'value7',
            },
            {
                key: 'key8',
                text: 'text8',
                value: 'value8',
            },
            {
                key: 'key9',
                text: 'text9',
                value: 'value9',
            },
            {
                key: 'key10',
                text: 'text10',
                value: 'value10',
            },
            {
                key: 'key11',
                text: 'text11',
                value: 'value11',
            },
            {
                key: 'key12',
                text: 'text12',
                value: 'value12',
            },
            {
                key: 'key13',
                text: 'text13',
                value: 'value13',
            },
            {
                key: 'key14',
                text: 'text14',
                value: 'value14',
            },
            {
                key: 'key15',
                text: 'text15',
                value: 'value15',
            }
        ]

        options = this.props.options;

        return(
            <div className="custom-dropdown-container">
                <Dropdown
                    placeholder='e.g. TW19 5NW'
                    fluid
                    search
                    selection
                    options={options}
                    onChange={this.handleChange}
                    onSearchChange={this.handleSearchChange}
                    noResultsMessage="0 results found"
                />
            </div>
        );
        
    }
}
export default CustomDropdown