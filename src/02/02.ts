type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: TechnologiesType
}

type LocalAddressType = {
    street: string
    city: LocalCityType
}
type LocalCityType = {
    cityName: string
    country: string
}
type TechnologiesType = TechType[]
type TechType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 30,
    isActive: true,
    address: {
        street: 'Platonova 49',
        city: {
            cityName: 'Minsk',
            country: 'Belarus'
        },
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }
    ]
}

console.log(student.address.city.country)
console.log(student.technologies[0].title)