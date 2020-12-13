import React, { Component } from 'react'
import axios from 'axios'
import StudentList from './StudentList'

class StudentContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [],
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
  render() {
    return <StudentList students={this.state.students} />
  }
}

export default StudentContainer
