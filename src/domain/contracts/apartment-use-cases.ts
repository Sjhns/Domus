import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'
import { ImmobileOutput } from '@/application/dtos/output-immobile'

export interface SaveApartmentUseCaseContract {
  execute: (input: SaveImmobileDTOInput) => Promise<ImmobileOutput>
}

export interface FindApartmentUseCaseContract {
  all: () => Promise<ImmobileOutput[]>
  one: (id: string) => Promise<ImmobileOutput>
}
