export type UserType = {
    name: string
    hair: number
    address: {city: string; house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copyU = {...u}
    copyU.hair = copyU.hair / power
    return copyU
}

export function moveUser(user: UserWithLaptopType, city: string) {
    //const movedUser = {...user, address: {...user.address, city: city}};
    //return movedUser;
    return {...user, address: {...user.address, city: city}};
}

export function upgradeLaptopUser(user: UserWithLaptopType, laptop: string) {
    return {...user, laptop: {...user.laptop, title: laptop}}
}