import React from 'react'
import { Card, Button } from 'semantic-ui-react'

function StudentList(props) {
  const students = props.students.map((student) => {
    return (
      <Card key={student.id}>
        <Card.Content>
          <Card.Header>{student.name}</Card.Header>
          <Card.Description>{student.registered_courses}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button>Delete Student</Button>
          <Button>Edit Student</Button>
        </Card.Content>
      </Card>
    )
  })
  return <Card.Group>{students}</Card.Group>
}

export default StudentList
