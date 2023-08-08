import { ImmobileRegistrationInput } from '@/application/dtos/immobile-registration-input'
import { ImmobileSchemaOutput } from '@/application/dtos/immobile-schema-output'

export interface ImmobileRegistrationUseCaseContract {
  execute: (input: ImmobileRegistrationInput) => Promise<ImmobileSchemaOutput>
}

export interface ImmobileGetUseCaseContract {
  getAllImmobile: () => Promise<ImmobileSchemaOutput[] | void>
  getOneImmobile: (id: string) => Promise<ImmobileSchemaOutput | void>
}
