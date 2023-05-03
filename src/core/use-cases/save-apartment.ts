/* eslint-disable no-redeclare */

export interface SaveApartment {
  save: (apartment: SaveApartment.Params) => Promise<void>
}

namespace SaveApartment {
  export type Params = {
    id: string
    address: string
    size: number
    numberOfRooms: number
    numberOfBathrooms: number
    rent: number
    availableDate: string | Date
  }
}
