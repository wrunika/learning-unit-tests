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

export type UserWithBooksType = UserType & {
    books: string[]
}

export type CompanyType = {
    id: number
    title: string
}

export type WithCompaniesType = UserType & {
    companies: CompanyType[]
}

export type CompaniesType = {
    [key: string]: CompanyType[]
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

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...user, address: {...user.address, house}};
}

export function addNewBooksToUser(user: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {...user, books: [...user.books, ...newBooks]};
}

export function updateBookToUser(user: UserWithLaptopType & UserWithBooksType,oldBook: string, newBook: string) {
    return {...user, books: user.books.map(b => b === oldBook ? newBook : b)};
}

export function removeBookToUser(user: UserWithLaptopType & UserWithBooksType, oddBook: string) {
    return {...user, books: user.books.filter(b => b !== oddBook)};
}

export function addNewCompany(user: UserWithLaptopType & WithCompaniesType, company: string) {
    return {...user, companies: [...user.companies, {id: 3, title: company}]};
}

export function updateCompanyTitle(user: WithCompaniesType, id: number, company: string) {
    return {...user, companies: user.companies.map(c => c.id === id ? {...c, title: company} : c)};
}

export function updateCompanyTitle2(companies: CompaniesType,
                                    userName: string,
                                    companyID: number,
                                    newTitle: string) {
    return {...companies, [userName]: companies[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)}
    //let companyCopy = {...companies};
    //companyCopy[userName] = companyCopy[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)
    //return companyCopy;
}