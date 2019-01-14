import React, { Component } from 'react';
import { Table,Label } from 'semantic-ui-react'

class Weather extends Component {

    render() {
        return (
            <div>
            <Label as='a' color='blue' image>
                {this.props.country}
                <Label.Detail>{this.props.city}</Label.Detail>
            </Label>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Temp</Table.HeaderCell>
                        <Table.HeaderCell>Temp Min</Table.HeaderCell>
                        <Table.HeaderCell>Temp Max</Table.HeaderCell>
                        <Table.HeaderCell>Humidity</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.props.temp} C°</Table.Cell>
                        <Table.Cell>{this.props.temp_min} C°</Table.Cell>
                        <Table.Cell>{this.props.temp_max} C°</Table.Cell>
                        <Table.Cell>{this.props.humidity}%</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='4'>
                            description : {this.props.description}
                            </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
            </div>
        );
    }
}

export default Weather;
