type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType

}

type GovernmentBuildingsType = {
    type: string
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