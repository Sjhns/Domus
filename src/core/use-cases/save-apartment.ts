export interface SaveApartmentInterface {
  insert: (apartment: SaveApartmentInterface.Params) => {}
}

namespace SaveApartmentInterface {
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
