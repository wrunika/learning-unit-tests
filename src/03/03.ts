import {GovernmentBuildingsType, HousesType} from "../02/02-types";

export const addMoneyToBudget = (governmentBuilding: GovernmentBuildingsType, amount: number) => {
    governmentBuilding.budget += amount
}

export const repairHouse = (house: HousesType) => {
        house.repaired = true;
}

export const toFireStaff = (governmentBuilding: GovernmentBuildingsType, staff: number) => {
      governmentBuilding.staffCount -= staff;
}

export const toHireStaff = (governmentBuilding: GovernmentBuildingsType, staff: number) => {
        governmentBuilding.staffCount += staff;
}