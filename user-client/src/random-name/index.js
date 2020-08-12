const randomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const firstNames = [
    'Mitchell',
    'Genevieve',
    'Tanner',
    'Daanish',
    'Olivier',
    'Eben',
    'Hallam',
    'Phebe',
    'Johnny',
    'Dawood',
    'Julius',
    'Sarah',
    'Karl',
    'Joey',
    'Pola',
    'Eman',
    'Kendall',
    'Eamonn',
    'Roshni',
    'Aneesa',
    'Roberta',
    'Summer',
    'Andrei',
    'Aleksandra',
    'Annika'
]

const lastNames = [
    'Lam',
    'Rivera',
    'Rogers',
    'Gonzalez',
    'Bassett',
    'Mclellan',
    'Mohammed',
    'Bradshaw',
    'Simmons',
    'Good',
    'Rowe',
    'Jayne',
    'Suarez',
    'Barrera',
    'Glass',
    'Huang',
    'Kendall',
    'Moran',
    'Nolan',
    'Spencer',
    'Atkinson',
    'Gardner',
    'Bevan',
    'Lowry',
    'Hutchings',
    'Finch'
]

export const randomName = () => {
    const firstName = firstNames[randomInt(firstNames.length)]
    const lastName = lastNames[randomInt(lastNames.length)]
    return `${firstName} ${lastName}`
}