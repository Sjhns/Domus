import { SaveApartmentDTOInput } from '@/application/dtos/input-save-apartment'
import { ApartmentOutput } from '@/application/dtos/output-apartment'

export interface SaveApartmentUseCaseContract {
  execute: (input: SaveApartmentDTOInput) => Promise<ApartmentOutput>
}

export interface FindApartmentUseCaseContract {
  all: () => Promise<ApartmentOutput[]>
  one: (id: string) => Promise<ApartmentOutput>
}
