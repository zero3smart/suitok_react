import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import CONST from '../../global/const'
import 'semantic-ui-css/semantic.min.css'
import './CustomDropdown.css'

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

        document.querySelector('div[role="combobox"] .message').addEventListener("click", this.noResultClick);
    }

    componentWillUnmount() {
        document.querySelector('div[role="combobox"] .message').removeEventListener("click", this.noResultClick);
    }

    noResultClick = (e) => {
        // e.target.setAttribute("style", "display: none");
        // document.querySelector('div[role="combobox"] input').blur();
        // document.querySelector('.form-container').click();
    }

    handleChange(event, data){
        document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");
        console.log('handleChange:', data);
        this.props.callbackBlur(data.value, true);
    }

    handleBlur(event, data) {
        event.preventDefault();
        console.log('handleBlur');
        document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");

        let postcode = document.querySelector('div[role="combobox"] input').value;

        if (postcode && postcode !== "" && data.options.length === 0)
            this.props.callbackBlur(document.querySelector('div[role="combobox"] .text').innerText, true);
        else
            this.props.callbackBlur(document.querySelector('div[role="combobox"] .text').innerText, true);
    }

    handleSearchChange(event, data){
        document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: block !important");
        console.log('handleSearchChange:', data);
        event.target.setAttribute("autocomplete", "off");
        this.props.callbackInputChange(data.searchQuery);
    }

    handleClick(event, data) {
        event.preventDefault();
        if (!data.options.length)
            document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: none !important");
        else {
            document.querySelector('div[role="combobox"] .menu.transition').setAttribute("style", "display: block !important");
        }

        let postcode = document.querySelector('div[role="combobox"] input').value;

        if (postcode && postcode !== "" && data.options.length === 0)
            this.props.callbackBlur(document.querySelector('div[role="combobox"] .text').innerText, false);
        else
            this.props.callbackBlur(document.querySelector('div[role="combobox"] .text').innerText, true);
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