export type StudentProps = {
  name: string
  email: string
  phoneNumber: string
  university: string
  course: string
}

export class Student {
  constructor(public props: StudentProps) {}
}
