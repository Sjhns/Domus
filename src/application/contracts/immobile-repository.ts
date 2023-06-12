import { ImmobileRegistrationInput } from '@/application/dtos/immobile-registration-input'
import { ImmobileSchemaOutput } from '../dtos/immobile-schema-output'

export interface ImmobileRepositoryContract {
  save: (input: ImmobileRegistrationInput) => Promise<ImmobileSchemaOutput>
  findAll: () => Promise<ImmobileSchemaOutput[] | void>
  findOne: (id: string) => Promise<ImmobileSchemaOutput | void>
  update: (
    id: string,
    input: ImmobileRegistrationInput,
  ) => Promise<ImmobileSchemaOutput>
  remove: (id: string) => Promise<void>
}
