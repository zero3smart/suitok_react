import React, {Component} from 'react'
import FormSelect from './FormSelect'
import CONST from '../../global/const'

class FormDate extends Component {
    
    constructor(props){
        super(props);
        
        this.days = [];
        this.days.push({
            value: 0,
            label: 'Day'
        });
        var day_label = 'Day';
        for(var day = 1; day < 32; day++){
            this.days.push({
                value: day,
                label: day
            });

            if(day == this.props.value.day){
                day_label = day;
            }
        }

        this.months = [
            { value: 0, label: 'Month'}, 
            { value: 1, label: 'January'}, 
            { value: 2, label: 'February'}, 
            { value: 3, label: 'March'}, 
            { value: 4, label: 'April'}, 
            { value: 5, label: 'May'}, 
            { value: 6, label: 'June'}, 
            { value: 7, label: 'July'}, 
            { value: 8, label: 'August'}, 
            { value: 9, label: 'September'}, 
            { value: 10, label: 'October'}, 
            { value: 11, label: 'November'}, 
            { value: 12, label: 'December'}
        ];
        var month_label = '';
        for(var mindex = 0; mindex < this.months.length; mindex++){
            if(this.months[mindex].value === this.props.value.month){
                month_label = this.months[mindex].label;
            }
        }

        this.years = [];
        this.years.push({
            value: 0,
            label: 'Year'
        });

        var year_label = 'Year';
        for(var year = this.props.yearMax; year >= this.props.yearMin; year--){
            this.years.push({
                value: year,
                label: year
            });
            if(this.props.value.year === year){
                year_label = year;
            }
        }

        this.state = {
            value: this.props.value,
            day: {
                value: this.props.value.day,
                label: day_label
            },
            month: {
                value: this.props.value.month,
                label: month_label
            },
            year: {
                value: this.props.value.year,
                label: year_label
            }
        };

        this.callbackDay = this.callbackDay.bind(this);
        this.callbackMonth = this.callbackMonth.bind(this);
        this.callbackYear = this.callbackYear.bind(this);
    }

    componentDidMount(){

    }

    callbackDay(data){
        this.props.callback({
            year: this.state.year.value,
            month: this.state.month.value,
            day: data.value
        });
        this.setState({
            day: data
        });
    }

    callbackMonth(data){
        this.props.callback({
            year: this.state.year.value,
            month: data.value,
            day: this.state.day.value,
        });
        this.setState({
            month: data
        });
    }

    callbackYear(data){
        this.props.callback({
            year: data.value,
            month: this.state.month.value,
            day: this.state.day.value,
        });
        this.setState({
            year: data
        });
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
                <div className="form-field-row">
                    <div className="form-field-col-3">
                        <FormSelect
                            defaultValue={this.state.day}
                            options={this.days}
                            isSearchable={false}
                            callback={this.callbackDay}
                        />
                    </div>
                    <div className="form-field-col-3">
                        <FormSelect
                            defaultValue={this.state.month}
                            options={this.months}
                            isSearchable={false}
                            callback={this.callbackMonth}
                        />
                    </div>
                    <div className="form-field-col-3">
                        <FormSelect
                            defaultValue={this.state.year}
                            options={this.years}
                            isSearchable={false}
                            callback={this.callbackYear}
                        />
                    </div>
                </div>
                <label className="form-field__error">{this.props.msgErrorEmpty}</label>
            </div>
        );
        
    }
}
export default FormDate