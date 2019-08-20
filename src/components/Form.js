import React, { Fragment } from 'react'
import { Form, Input, Select, Button, Divider } from 'antd';

const { Option } = Select;
// class PersonPicker extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {style: {display: 'none'}}
//     }
//     handleChange = (value) => {
//         if (value === 'jack') {
//         const {dispatch} = this.props
//         this.setState({
//             style: {
//                 display: 'block'
//             }
//         })
//         console.log('value', value)
        
//         dispatch({
//             type: 'example/getcontente',
//             payload: value,
//         })
//     } else {
//         this.setState({
//             style: {
//                 display: 'none'
//             }
//         })
//     }
//       }
//     render(){
//     return (
//         <Fragment>
//     <Select style={{ width: 120 }} onChange={this.handleChange}>
//     <Option value="jack">Jack</Option>
//     <Option value="lucy">Lucy</Option>
//     <Option value="disabled" disabled>
//       Disabled
//     </Option>
//     <Option value="Yiminghe">yiminghe</Option>
//   </Select>
//   <Select  style={{ width: 120 }} disabled>
//     <Option value="lucy">Lucy</Option>
//   </Select>
//   <Select  style={{ width: 120 }} loading>
//     <Option value="lucy">Lucy</Option>
//   </Select>
//       </Fragment>)
// }
// }

class PriceInput extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };

  handleCurrencyChange = currency => {
    // iuygvufgh
    if (!('value' in this.props)) {
      this.setState({ currency });
    }
    this.triggerChange({ currency });
  };


  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        ...this.state,
        ...changedValue,
      });
    }
  };

  render() {
    const { size } = this.props;
    const { currency, number } = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>

        <Divider/>
      </span>
    );
  }
}

class Demo extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            disable : false,
        }
    }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };
  handleChange = (value) => {
    if (value === 'jack') {
    const {dispatch} = this.props
    this.setState({
        disable: true,
    })
    console.log('value', value)
    
    dispatch({
        type: 'example/getcontente',
        payload: value,
    })
} else {
    this.setState({
        disable: false,
    })
}
  }

  render() {
      console.log(this.props)
      const {disable} = this.state
      const {example} = this.props
    // const exdis = {
    //     example:this.props.example,
    //     dispatch: this.props.dispatch,
    //   }
    const { getFieldDecorator } = this.props.form;
    console.log('form props', this.props)
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Price">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' }
            /* rules: [{ validator: this.checkPrice }], */
          })(<PriceInput />)}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('person', {
            initialValue:''
        })(  
    <Select style={{ width: 120 }} onChange={this.handleChange}>
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="disabled" disabled>
      Disabled
    </Option>
    <Option value="Yiminghe">yiminghe</Option>
  </Select>)}
        </Form.Item>
        {disable=== true ?(
            <Form.Item>
            {getFieldDecorator('kjnjk', {
                initialValue: example.content
            })( <Input />)}
            </Form.Item>
        ):('')}
        
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrapedCom = Form.create({ name: 'customized_form_controls' })(Demo);
export default WrapedCom;
