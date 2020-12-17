import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

class CreateStudentForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      registered_courses: '',
      email: '',
      balance_due: '',
    }
  }
  handleChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value })
  }
  render() {
    return (
      <Segment>
        <h4>Create Student</h4>
        <Form onSubmit={(e) => this.props.addStudent(e, this.state)}>
          <Label>Student:</Label>
          <Form.Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <Label>Enrolled Courses:</Label>
          <Form.Input
            type="text"
            name="registered_courses"
            value={this.state.registered_courses}
            onChange={this.handleChange}
          />

          <Label>Email:</Label>
          <Form.Input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Label>Balance Due:</Label>
          <Form.Input
            type="boolean"
            name="balance_due"
            value={this.state.balance_due}
            onChange={this.handleChange}
          />
          <Button color="blue" type="Submit">
            Create Student
          </Button>
        </Form>
      </Segment>
    )
  }
}
export default CreateStudentForm
