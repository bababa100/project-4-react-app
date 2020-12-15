import React, { Component } from 'react'
import axios from 'axios'
import StudentList from './StudentList'
import CreateStudentForm from './CreateStudentForm'
import { Grid } from 'semantic-ui-react'
import EditStudentModal from './EditStudentModal'

class StudentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
      studentToEdit: {
        name: '',
        registered_courses: '',
        email: '',
        balance_due: '',
        id: '',
      },

      showEditModel: false,
    }
  }
  componentDidMount() {
    this.getStudents()
  }
  getStudents = async () => {
    try {
      const parsedStudents = await axios(
        process.env.REACT_APP_FLASK_API_URL + '/api/v1/students/',
      )
      console.log(parsedStudents.data.data)
      await this.setState({
        students: parsedStudents.data.data,
      })
    } catch (err) {
      console.log(err)
    }
  }

  openAndEdit = (studentFromTheList) => {
    console.log(studentFromTheList, ' studentToEdit ')

    this.setState({
      showEditModal: true,
      studentToEdit: {
        ...studentFromTheList,
      },
    })
  }
  handleEditChange = (e) => {
    this.setState({
      studentToEdit: {
        ...this.state.studentToEdit,
        [e.currentTarget.name]: e.currentTarget.value,
      },
    })
  }
  closeAndEdit = async (e) => {
    e.preventDefault()
    try {
      const editResponse = await axios.put(
        process.env.REACT_APP_FLASK_API_URL +
          '/api/v1/students/' +
          this.state.studentToEdit.id,
        this.state.studentToEdit,
      )
      console.log(editResponse, ' parsed edit')

      const newStudentArrayWithEdit = this.state.students.map((student) => {
        if (student.id === editResponse.data.data.id) {
          student = editResponse.data.data
        }

        return student
      })

      this.setState({
        showEditModal: false,
        students: newStudentArrayWithEdit,
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Grid
        columns={2}
        divided
        textAlign="center"
        style={{ height: '100%' }}
        verticalAlign="top"
        stackable
      >
        <Grid.Row>
          <Grid.Column>
            <StudentList
              students={this.state.students}
              deleteStudent={this.deleteStudent}
              openAndEdit={this.openAndEdit}
            />
          </Grid.Column>
          <Grid.Column>
            <CreateStudentForm addStudent={this.addStudent} />
          </Grid.Column>
          <EditStudentModal
            handleEditChange={this.handleEditChange}
            open={this.state.showEditModal}
            studentToEdit={this.state.studentToEdit}
            closeAndEdit={this.closeAndEdit}
          />
        </Grid.Row>
      </Grid>
    )
  }
}
export default StudentContainer
