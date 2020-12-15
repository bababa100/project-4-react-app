import React from 'react'
import { Card, Button, Image } from 'semantic-ui-react'

function StudentList(props) {
  const students = props.students.map((student) => {
    return (
      <Card key={student.id}>
        <Card.Content>
          <Image
            floated="right"
            size="mini"
            src="https://tse1.mm.bing.net/th?id=OIP.B82knUJwJLqXndMYvreoLwHaFP&pid=Api&P=0&w=237&h=169"
            wrapped
            ui={false}
          />
          <Card.Header>
            <Card.Header>{student.name}</Card.Header>
            <Card.Meta>{student.email}</Card.Meta> <br></br>
          </Card.Header>
          <Card.Description>
            <h3> Enrolled Courses: </h3>
            <b> {student.registered_courses}</b>
            {student.balance_due}
            <br></br>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button onClick={() => props.deleteStudent(student.id)}>
            Delete Student
          </Button>
          <Button onClick={() => props.openAndEdit(student)}>
            Edit Student
          </Button>
        </Card.Content>
      </Card>
    )
  })
  return <Card.Group>{students}</Card.Group>
}

export default StudentList
