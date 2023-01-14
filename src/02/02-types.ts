type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType

}

export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: {
        street: StreetType
    }
}

export type CityType = {
    title: string
    houses: HousesType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}