import { Immobile } from '@/domain/entities/immobile'
import { ImmobileRepository } from '@/infra/persistence/repositories/immobile-repository'

type ImmobileOutput = {
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

type ImmobileRegisterInput = {
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

export class ImmobileRegisterCase {
  constructor(private readonly immobileRepository: ImmobileRepository) {}

  async execute(input: ImmobileRegisterInput): Promise<ImmobileOutput> {
    const immobile = Immobile.create(input)

    if (immobile.getErrors.length > 0) {
      throw new Error(immobile.getErrors.join('\n'))
    }

    await this.immobileRepository.save(immobile)

    return {
      id: immobile.props.id,
      ownerId: immobile.props.ownerId,
      cep: immobile.props.cep,
      number: immobile.props.number,
      complement: immobile.props.complement,
      rentMoney: immobile.props.rentMoney,
      isRent: immobile.props.isRent,
      createdAt: immobile.props.createdAt,
      updatedAt: immobile.props.updatedAt,
    }
  }
}
