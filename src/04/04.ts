import {CityType, GovernmentBuildingsType} from "../02/02-types";

export const demolishHousesOnTheStreet = (city: CityType, someStreet: string) => {
  city.houses = city.houses.filter(c => c.address.street.title !== someStreet)
}

export const getBuildingsWithStaffCountGreaterThen = (governmentBuilding: GovernmentBuildingsType[], staff: number) => {
  return governmentBuilding.filter(building => building.staffCount > staff)
}