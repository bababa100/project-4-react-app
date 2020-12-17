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
            src="https://tse1.mm.bing.net/th?id=OIP.dWmHrp7uXx6xx0WmhfaA1AHaF-&pid=Api&P=0&w=199&h=162"
            alt="Student Pic"
            //style="width:100px;height:200px; "
            wrapped
            ui={false}
          />
          <Card.Header>
            <Card.Header>
              <h1>{student.name}</h1>
            </Card.Header>
            <Card.Meta>{student.email}</Card.Meta> <br></br>
          </Card.Header>
          <Card.Description>
            <h3> Enrolled Courses: </h3>
            <b> {student.registered_courses}</b>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            basic
            color="red"
            onClick={() => props.deleteStudent(student.id)}
          >
            Delete Student
          </Button>
          <Button
            Button
            basic
            color="green"
            onClick={() => props.openAndEdit(student)}
          >
            Edit Student
          </Button>
        </Card.Content>
      </Card>
    )
  })
  return <Card.Group>{students}</Card.Group>
}

export default StudentList
