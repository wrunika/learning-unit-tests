import {ManType} from "./Destructuring";


let man: ManType;
beforeEach( ()=>{
    man = {
        name: 'Ron',
        age: 33,
        lessons: [ {title: '1'}, {title: '2'}, {title: '3', name: 'react'} ],
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
    //xpect(lessons.length).toBe(2);
    expect(lessons.length).toBe(3);
    expect(nameStr).toBe('Mira street');

})

test('array destructing should be correct', () => {
    const lesson1 = man.lessons[0];
    const lesson2 = man.lessons[1];
    //const [l1, l2] = man.lessons;
    //const [ , l2] = man.lessons;
    const [ , , l3] = man.lessons;
    //const [l1] = man.lessons;
    const [l1, ...restLessons] = man.lessons;
    const [ , l2, ...restLs] = man.lessons;

    //expect(l1.title).toBe('1')
    //expect(l2.title).toBe('2')
    expect(l3.title).toBe('3')
    expect(restLessons.length).toBe(2)

    expect(restLs[0]).toStrictEqual({title: '3', name: 'react'})
    
    expect(restLs.length).toBe(1)
    expect(lesson1.title).toBe('1')
    expect(lesson2.title).toBe('2')
})