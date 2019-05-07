import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import CONST from '../../global/const'
import 'semantic-ui-css/semantic.min.css'
import './CustomDropdown.css'

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
    { key: 'bm', value: 'bm', flag: 'bm', text: 'Bermuda' },
    { key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan' },
    { key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia' },
    { key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia' },
    { key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana' },
    { key: 'bv', value: 'bv', flag: 'bv', text: 'Bouvet Island' },
    { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
    { key: 'vg', value: 'vg', flag: 'vg', text: 'British Virgin Islands' },
    { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
    { key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria' },
    { key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso' },
    { key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi' },
    { key: 'tc', value: 'tc', flag: 'tc', text: 'Caicos Islands' },
    { key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },
    { key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon' },
    { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
]

class CustomDropdown extends Component {
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        document.querySelector('div[role="combobox"] .search').setAttribute("autocomplete", "off");
        document.querySelector('div[role="combobox"] .search').setAttribute("autocorrect", "off");
    }

    handleChange(event, data){
        // document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");
        console.log('handleChange:', data);
        this.props.callbackBlur(data.value);
    }

    handleBlur(event, data) {
        event.preventDefault();
        console.log('handleBlur');
        // document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");

        if (document.querySelector('div[role="combobox"] .text').innerText != "")
            this.props.callbackBlur(document.querySelector('div[role="combobox"] .text').innerText);
    }

    handleSearchChange(event, data){
        // document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: block !important");
        console.log('handleSearchChange:', data);
        event.target.setAttribute("autocomplete", "off");
        this.props.callbackInputChange(data.searchQuery);
    }

    handleClick(event, data) {
        event.preventDefault();
        // if (!data.options.length)
        //     document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");
        // else {
        //     document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: block !important");

        //     var nodes = document.querySelectorAll('div[role="combobox"] div[role="listbox"] div[role="option"]');

        //     if (nodes)
        //         for (var i = 0; i < nodes.length; i++) {
        //             nodes[i].parentNode.removeChild(nodes[i]);
        //         }

        //     // var node = document.querySelector('div[role="combobox"] .default.text');
        //     // if (node)
        //     //     node.parentNode.removeChild(node);
        // }
    }

    render() {
        var options = this.props.options;

        return(
            <div className="custom-dropdown-container">
                <Dropdown
                    placeholder='e.g. TW19 5NW'
                    fluid
                    search
                    selection
                    options={options}
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    onSearchChange={this.handleSearchChange}
                    onBlur={this.handleBlur}
                    noResultsMessage="0 results found"
                />
                {/* <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={options}
                /> */}
            </div>
        );
    }
}

CustomDropdown.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    callbackInputChange: PropTypes.func.isRequired,
    callbackBlur: PropTypes.func.isRequired
}

export default CustomDropdown