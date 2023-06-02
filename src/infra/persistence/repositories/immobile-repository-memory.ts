import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'

import { ImmobileRepositoryContract } from '@/application/contracts/immobile-repository'
import { ImmobileModel } from '@/application/contracts/immobile-model'
import { ImmobileOutput } from '@/application/dtos/output-immobile'
import { ImmobileAdapter } from '@/infra/adapters/immobile-adapter'

export class ImmobileRepositoryMemory implements ImmobileRepositoryContract {
  private database: ImmobileModel[] = []

  async save(input: SaveImmobileDTOInput): Promise<ImmobileOutput> {
    this.database.push(input)
    return ImmobileAdapter.adaptaOne(input)
  }

  async findAll(): Promise<ImmobileOutput[] | void> {
    const immobile = this.database

    if (!immobile) {
      return
    }

    return ImmobileAdapter.adaptaArray(immobile)
  }

  async findOne(id: string): Promise<ImmobileOutput | void> {
    const immobile = this.database.find((user) => user.id === id)

    if (!immobile) {
      return
    }

    return ImmobileAdapter.adaptaOne(immobile)
  }

  async update(
    id: string,
    input: SaveImmobileDTOInput,
  ): Promise<ImmobileOutput> {
    const index = this.database.findIndex((immobile) => immobile.id === id)

    if (index !== -1) {
      this.database[index] = input
      return ImmobileAdapter.adaptaOne(input)
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
