import {makeHairStyle, moveUser, upgradeLaptopUser, UserType, UserWithLaptopType} from "./10_01";



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