import React,{Component} from 'react'
import { Button,  Form } from 'semantic-ui-react';
import './form.css';


class FormData extends Component {
    render() {
        return (
            <Form className='formSearch' onSubmit={this.props.getWeather}>
                <Form.Field>
                    <input name='city' placeholder='your city' />
                </Form.Field>
                <Form.Field>
                    <input name='country' placeholder='your country' />
                </Form.Field>
                <Button className='btnSearch' primary type='submit'>Get Weather</Button>
            </Form>
        );
    }
}

export default FormData;