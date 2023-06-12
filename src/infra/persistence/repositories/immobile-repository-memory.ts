import { ImmobileRegistrationInput } from '@/application/dtos/immobile-registration-input'

import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileModel } from '@/application/contracts/immobile-model'
import { ImmobileSchemaOutput } from '@/application/dtos/immobile-schema-output'
import { ImmobileAdapter } from '@/infra/adapters/immobile-adapter'

export class ImmobileRepositoryMemory implements ImmobileRepositoryContract {
  private database: ImmobileModel[] = []

  async save(input: ImmobileRegistrationInput): Promise<ImmobileSchemaOutput> {
    this.database.push(input)
    return ImmobileAdapter.toDomain(input)
  }

  async findAll(): Promise<ImmobileSchemaOutput[] | void> {
    const immobile = this.database

    if (!immobile) {
      return
    }

    return ImmobileAdapter.toDomainList(immobile)
  }

  async findOne(id: string): Promise<ImmobileSchemaOutput | void> {
    const immobile = this.database.find((user) => user.id === id)

    if (!immobile) {
      return
    }

    return ImmobileAdapter.toDomain(immobile)
  }

  async update(
    id: string,
    input: ImmobileRegistrationInput,
  ): Promise<ImmobileSchemaOutput> {
    const index = this.database.findIndex((immobile) => immobile.id === id)

    if (index !== -1) {
      this.database[index] = input
      return ImmobileAdapter.toDomain(input)
    }
  }

  async remove(id: string): Promise<void> {
    const immobile = this.database.find((user) => user.id === id)
    const index = this.database.indexOf(immobile)
    if (index !== -1) {
      this.database.splice(index, 1)
    }
  }
}
