import { SaveImmobileDTOInput } from '@/application/dtos/input-save-immobile'
import { ImmobileOutput } from '@/application/dtos/output-immobile'

export interface SaveImmobileUseCaseContract {
  execute: (input: SaveImmobileDTOInput) => Promise<ImmobileOutput>
}

export interface FindImmobileUseCaseContract {
  all: () => Promise<ImmobileOutput[]>
  one: (id: string) => Promise<ImmobileOutput>
}
