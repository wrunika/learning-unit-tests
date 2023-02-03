import {ManType} from "./Destructuring";


let man: ManType;
beforeEach( ()=>{
    man = {
        name: 'Ron',
        age: 33,
        lessons: [ {title: '1'}, {title: '2'} ],
        address: {
            street: {
                nameStr: 'Mira street'
            }
        }
    }
} )


test('destructing should be correct', ()=>{

    //const lessons = man.lessons;
    //const age = man.age;
    const {age, lessons} = man;
    //const {age: a, lessons: l} = man;
    //const nameStr = man.address.street.nameStr
    const {nameStr} = man.address.street

    expect(age).toBe(33);
    expect(lessons.length).toBe(2);
    expect(nameStr).toBe('Mira street');

})