import { it, describe, expect } from 'vitest'
import { Student } from './student'

describe('Student test', () => {
  it('Should create new instace of Student', () => {
    const dataStudent = {
      id: 'dkdk&&9oo3o',
      name: 'John Barbosa',
      email: 'john@email.com',
      phoneNumber: '(75) 91234-5678',
      university: 'Universidade do sudoste da Bahia',
      course: 'Ciência da computação',
    }

    const newStudent = new Student(dataStudent)

    expect(newStudent).toBeTruthy()
    expect(newStudent).toBeDefined()
    expect(newStudent).toBeInstanceOf(Student)
    expect(newStudent.props).toStrictEqual(dataStudent)
  })
})
