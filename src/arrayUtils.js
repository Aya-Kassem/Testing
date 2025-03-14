export function filterAdults(people) {
    return people.filter(person => person.age >= 18);
}
