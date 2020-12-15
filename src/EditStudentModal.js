import React from 'react'
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react'

const EditStudentModal = (props) => {
  console.log(props)
  return (
    <Modal open={props.open}>
      <Header>Edit Student</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
          <Label>Name</Label>
          <Form.Input
            type="text"
            name="name"
            value={props.studentToEdit.name}
            onChange={props.handleEditChange}
          />
          <Label>Registered Courses:</Label>
          <Form.Input
            type="text"
            name="registered_courses"
            value={props.studentToEdit.registered_courses}
            onChange={props.handleEditChange}
          />
          <Label>Email:</Label>
          <Form.Input
            type="text"
            name="email"
            value={props.studentToEdit.email}
            onChange={props.handleEditChange}
          />
          <Label>Balance Due:</Label>
          <Form.Input
            type="text"
            name="balance_due"
            value={props.studentToEdit.balance_due}
            onChange={props.handleEditChange}
          />
          <Modal.Actions>
            <Button color="green" type="submit">
              Edit Student
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default EditStudentModal
