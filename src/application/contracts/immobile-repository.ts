import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'
import { ImmobileOutput } from '../dtos/output-immobile'

export interface ImmobileRepositoryContract {
  save: (input: SaveImmobileDTOInput) => Promise<ImmobileOutput>
  findAll: () => Promise<ImmobileOutput[] | void>
  findOne: (id: string) => Promise<ImmobileOutput | void>
  update: (id, input: SaveImmobileDTOInput) => Promise<ImmobileOutput>
  remove: (id: string) => Promise<void>
}
