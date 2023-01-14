import {GovernmentBuildingsType, HousesType} from "../02/02-types";

export const getStreetsTitlesOfGovernmentBuildings = (governmentBuilding: GovernmentBuildingsType[]) => {
  return governmentBuilding.map(building => building.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: HousesType[]) => {
  return houses.map(house => house.address.street.title);
}

export function createMessages(houses: HousesType[]) {
    return houses.map(h=>{
        return `Hello guys from ${h.address.street.title}`
    })
}