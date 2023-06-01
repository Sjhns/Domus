import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'

export interface ImmobileRepositoryContract<T, S> {
  save: (input: SaveImmobileDTOInput) => Promise<T>
  findAll: () => Promise<S[] | undefined>
  findOne: (id: string) => Promise<S | undefined>
  update: (id, input: SaveImmobileDTOInput) => Promise<T>
  remove: (id: string) => Promise<void>
}
