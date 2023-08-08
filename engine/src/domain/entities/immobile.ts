type ImmobileProps = {
  id: string
  ownerId: string
  cep: string
  number: number
  complement: string
  rentMoney: number
  isRent: boolean
  createdAt: Date
  updatedAt: Date
}

export class Immobile {
  private errors: string[] = []

  private constructor(public readonly props: ImmobileProps) {
    Object.assign(this, props)

    this.validate()
  }

  public static create(props: ImmobileProps): Immobile {
    const immobile = new Immobile(props)
    return immobile
  }

  private validate(): void {
    if (!this.props.cep || !this.props.cep.trim()) {
      this.errors.push('CEP é obrigatório.')
    }
    if (!this.props.number || this.props.number <= 0) {
      this.errors.push(
        'Número do imóvel é obrigatório e deve ser um valor positivo.',
      )
    }

    if (!this.props.isRent) {
      if (!this.props.rentMoney || this.props.rentMoney <= 0) {
        this.errors.push(
          'Valor da renda é obrigatório e deve ser um valor positivo.',
        )
      }
    }
  }

  get getErrors(): string[] {
    return this.errors
  }
}
