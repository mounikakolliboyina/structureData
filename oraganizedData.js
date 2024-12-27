const people = [
  {
    name: "Rahul",
    place: "Pune",
    age: 0,
    profession: "software engineer",
    hasCar: true,
    interstingBooks: [],
    hobbies: ["playing chess", "gardening"],
    isEmployed: true,
    education: { major: "computerEngineering", minor: "" },
    pets: [
      {
        type: "dog",
        name: "max",
        age: 4,
        isFullyVaccinated: true,
        isVaccinated: true,
        favoriteActivities: ["loves playing fetch in the park"],
        about: [],
      },
    ],
  },
  {
    name: "Ananya",
    place: "Bangalore",
    age: 30,
    profession: "",
    hasCar: false,
    interstingBooks: [],
    hobbies: ["cooking", "expermenting Italian dishes"],
    isEmployed: false,
    education: { major: "computerEngineering", minor: "graphic design" },
    pets: [
      {
        type: "parrot",
        name: "kiwi",
        age: 4,
        isFullyVaccinated: false,
        isVaccinated: true,
        favoriteActivities: [],
        about: ["mimics ananya voice", "knows 20 phrases"],
      },
    ],
  },
  {
    name: "Ramesh",
    place: "Jaipur",
    age: 45,
    profession: "bussinessMan",
    hasCar: false,
    interstingBooks: ["historical ficition"],
    hobbies: ["gardening", "reading"],
    isEmployed: true,
    education: { major: "", minor: "" },
    pets: [
      {
        type: "cat",
        name: "Bella",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: true,
        favoriteActivities: ["love lounging in the sun"],
        about: [],
      },
      {
        type: "cat",
        name: "leo",
        age: 3,
        isFullyVaccinated: true,
        isVaccinated: true,
        favoriteActivities: ["love lounging in the sun"],
        about: [],
      },
    ],
  },

  {
    name: "Kavya",
    place: "Chennai",
    age: 28,
    profession: "",
    hasCar: false,
    interstingBooks: ["fantasy novels"],
    hobbies: ["binge-watching sci-fi", "reading"],
    isEmployed: false,
    education: { major: "", minor: "" },
    pets: [
      {
        type: "rabbit",
        name: "snowy",
        age: 2,
        isFullyVaccinated: false,
        isVaccinated: true,
        favoriteActivities: [
          "enjoys hopping around her backyard",
          "nibbling on carrots",
        ],
        about: [],
      },
    ],
  },
];

//20. Which individuals do not own any pets?

const peopleNamesWithOutPets = function () {
  return people
    .filter((person) => person.pets.length === 0)
    .map((person) => person.name);
};

peopleNamesWithOutPets();

//19. How many individuals live in cities starting with the letter "B"?

const countCitiesStartWithB = function () {
  return people.filter((person) => person.place[0] === "B").length;
};
countCitiesStartWithB();

//18. What types of books are mentioned as interests, and who reads them?

const interstingBooksNamesWithPeople = function () {
  return people
    .filter((person) => person.interstingBooks.length !== 0)
    .map((person) => [person.interstingBooks, person.name]);
};

interstingBooksNamesWithPeople();

//17.Which pet is the youngest, and what is its name?

const getYoungestPet = function () {
  const petDetials = people.flatMap((person) => person.pets);
  const sortedPetAges = petDetials
    .map((pet) => pet.age)
    .toSorted((a, b) => a - b);

  return petDetials
    .filter((pet) => pet.age === sortedPetAges[0])
    .map((x) => x.name);
};

getYoungestPet();
//16.How many individuals share at least one hobby with Ramesh?

const getHobbies = (nameOfPerson) => {
  return people.filter((person) => person.name === nameOfPerson)[0].hobbies;
};

const countPeopleWhoShareHobbiesWithRamesh = function () {
  const rameshHobbies = getHobbies("Ramesh");
  const otherHobbies = people
    .filter((person) => person.name !== "Ramesh")
    .map((person) => getHobbies(person.name));

  return otherHobbies.filter((hobby) =>
    hobby.some((x) => rameshHobbies.includes(x))
  ).length;
};

countPeopleWhoShareHobbiesWithRamesh();

//15.How many individuals have more than two hobbies?

const peopleWithMoreThanTwoHobbies = function () {
  return people.filter((person) => person.hobbies.length > 2);
};

peopleWithMoreThanTwoHobbies();
//14.What is the most common type of pet among the group?

const getPetCount = function (petDetials) {
  return petDetials.reduce((init, pet) => {
    const count = init[pet] || 0;
    init[pet] = count + 1;
    return init;
  }, {});
};

const mostCommonPet = function () {
  const petDetials = people
    .flatMap((person) => person.pets)
    .map((pet) => pet.type);

  const petCount = getPetCount(petDetials);

  return Object.entries(petCount).reduce(
    (max, pair) => {
      return pair[1] > max[1] ? pair : max;
    },
    ["", -Infinity]
  )[0];
};

mostCommonPet();

//13. How many vaccinated pets belong to people who do not own a car?

const countVacccinatedPetsOfPeopleWithOutCar = function () {
  return people
    .filter((user) => !user.hasCar)
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isVaccinated).length;
};

countVacccinatedPetsOfPeopleWithOutCar();

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?

const namesOfPeopleInBangaloreChennai = function () {
  return people
    .filter(
      (person) => person.place === "Bangalore" || person.place === "Chennai"
    )
    .flatMap((person) => person.pets)
    .map((pet) => pet.name);
};

namesOfPeopleInBangaloreChennai();

//11.Which pets are associated with specific favorite activities?

const whoHasFavActivities = function () {
  const petDetials = people.flatMap((person) => person.pets);
  const petWithFavActivities = petDetials.filter(
    (pet) => pet.favoriteActivities.length > 0
  );

  return petWithFavActivities.map((pet) => pet.name);
};

whoHasFavActivities();

//10. How many individuals own more than one pet?

const countWhoHasMorePets = function () {
  return people.filter((person) => person.pets.length > 1).length;
};

console.log = countWhoHasMorePets();

//9.How many individuals have education computer science, and how many of them have pets?
const countPetsOfPeopleWhoHasStudiedCSE = function () {
  const cseStudents = people.filter(
    (person) => person.education.major === "computerEngineering"
  );

  const cseStudentsWithoutPets = cseStudents.filter(
    (person) => person.pets.length !== 0
  );

  return cseStudents.length, cseStudentsWithoutPets.length;
};

countPetsOfPeopleWhoHasStudiedCSE();

//8.What is the average age of the individuals mentioned in the passage?

const averageAgeOfPeople = function () {
  const peopleAge = people.map((person) => person.age);

  return peopleAge.reduce((sum, number) => sum + number, 0) / peopleAge.length;
};

averageAgeOfPeople();

//7.How many pets belong to people who are currently unemployed?

const countPetsOfUmemployed = function () {
  return people
    .filter((person) => !person.isEmployed)
    .flatMap((unemployedPerson) => unemployedPerson.pets.map((pet) => pet.name))
    .length;
};

countPetsOfUmemployed();

//6.How many hobbies are shared across the group? What are they?

const getUniqueHobbies = function () {
  const allHobbies = people.flatMap((person) => person.hobbies);

  const uniqueHobbies = allHobbies.reduce((hobbies, hobby) => {
    if (!hobbies.includes(hobby)) {
      hobbies.push(hobby);
    }
    return hobbies;
  }, []);
  return [uniqueHobbies, uniqueHobbies.length];
};

getUniqueHobbies();

//5.Which cities do the individuals live in?

const cityNames = function () {
  return people.map((person) => [person.name, person.place]);
};

cityNames();

//4.What are the names of all the pets, and what type of animal is each?

const petNameAndType = function () {
  const petDetials = people.flatMap((person) => person.pets);

  return petDetials.map((pet) => [pet.type, pet.name]);
};

petNameAndType();

//3.How many pets are fully vaccinated?

const countFullyVaccinatedPets = function () {
  return people
    .flatMap((person) => person.pets)
    .filter((pet) => pet.isFullyVaccinated).length;
};

countFullyVaccinatedPets();

//2.How many people own a car?

const countWhoHasCar = function () {
  return people.filter((person) => person.hasCar).length;
};

console.log(countWhoHasCar());

//1.How many individuals are currently employed?

//people.filter(({ isEmployed }) => isEmployed).length;

const countEmployees = function () {
  return people.filter((person) => person.isEmployed).length;
};

console.log(countEmployees());
