import {
    addNewBooksToUser, addNewCompany, CompaniesType,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse, removeBookToUser, updateBookToUser, updateCompanyTitle, updateCompanyTitle2,
    upgradeLaptopUser,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('reference type test', ()=>{
    let user: UserType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)
    user = awesomeUser;

    //expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})


test('change address', ()=>{
    let user: UserWithLaptopType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        }
    }

    const movedUser = moveUser(user, 'Gdansk')

    expect(movedUser).not.toBe(user);
    expect(movedUser.address.city).not.toBe(user.address.city);
    expect(movedUser.laptop).toBe(user.laptop);

})

test('upgrade laptop to Mac', ()=>{
    let user: UserWithLaptopType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        }
    }

    const upgradedLaptop = upgradeLaptopUser(user, 'Mac')

    expect(upgradedLaptop).not.toBe(user);
    expect(user.laptop.title).toBe('HP');
    expect(upgradedLaptop.laptop.title).toBe('Mac');
    expect(upgradedLaptop.address.city).toBe(user.address.city);
    expect(upgradedLaptop.laptop).not.toBe(user.laptop);

})

test('change house', ()=>{
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const changedHouseUser = moveUserToOtherHouse(user, 44)

    expect(changedHouseUser).not.toBe(user);
    expect(user.address.house).toBe(38);
    expect(changedHouseUser.address.house).toBe(44);
    expect(changedHouseUser.address).not.toBe(user.address);
    expect(changedHouseUser.books).toBe(user.books);

})

test('add new books to user', ()=>{
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userWithNewBooks = addNewBooksToUser(user, ['ts', 'reactNative'])

    expect(userWithNewBooks).not.toBe(user);
    expect(userWithNewBooks.address).toBe(user.address);
    expect(userWithNewBooks.laptop).toBe(user.laptop);
    expect(userWithNewBooks.books.length).toBe(6);
    expect(userWithNewBooks.books).not.toBe(user.books);

})

test('update js to ts', ()=>{
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userWithNewBook = updateBookToUser(user, 'js', 'ts')

    expect(userWithNewBook).not.toBe(user);
    expect(userWithNewBook.address).toBe(user.address);
    expect(userWithNewBook.laptop).toBe(user.laptop);
    expect(userWithNewBook.books.length).toBe(4);
    expect(userWithNewBook.books[2]).toBe('ts');
    expect(userWithNewBook.books).not.toBe(user.books);

})

test('remove js book', ()=>{
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        books: ['html', 'css', 'js', 'react']
    }

    const userWithoutJS = removeBookToUser(user, 'js')

    expect(userWithoutJS).not.toBe(user);
    expect(userWithoutJS.address).toBe(user.address);
    expect(userWithoutJS.laptop).toBe(user.laptop);
    expect(userWithoutJS.books.length).toBe(3);
    expect(userWithoutJS.books[2]).toBe('react');
    expect(userWithoutJS.books).not.toBe(user.books);

})

test('add new company', ()=>{
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        companies: [
            {id: 1, title: 'epam'},
            {id: 2, title: 'incubator'},
        ]
    }

    const userWithNewCompany = addNewCompany(user, 'google')

    expect(userWithNewCompany).not.toBe(user);
    expect(userWithNewCompany.address).toBe(user.address);
    expect(userWithNewCompany.laptop).toBe(user.laptop);
    expect(userWithNewCompany.companies.length).toBe(3);
    expect(user.companies.length).toBe(2);
    expect(userWithNewCompany.companies[2].title).toBe('google');

})

test('update company', ()=>{
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'incubator'},
        ]
    }

    const updatedCompany = updateCompanyTitle(user, 1, 'epam') as UserWithLaptopType & WithCompaniesType;

    expect(updatedCompany).not.toBe(user);
    expect(updatedCompany.address).toBe(user.address);
    expect(updatedCompany.companies).not.toBe(user.companies);
    expect(updatedCompany.companies.length).toBe(2);
    expect(user.companies.length).toBe(2);
    expect(updatedCompany.companies[0].title).toBe('epam');

})

test('update some company', ()=>{
    let user: UserWithLaptopType = {
        name: 'Max',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 38
        },
        laptop: {
            title: 'HP'
        },
    }

    let companies: CompaniesType = {
        'Max': [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'incubator'},
        ],
        'Artem': [
            {id: 3, title: 'incubator'}
        ]
    }

    const copy = updateCompanyTitle2(companies, 'Max', 1, 'epam');

    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Max']).not.toBe(companies['Max'])
    expect(companies['Artem'][0].id).toBe(3)
    expect(copy['Max'][0].title).toBe('epam')
    expect(copy['Artem']).toBe(companies['Artem'])
})