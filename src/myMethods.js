const prepareData = arr => {
  return arr.map(person => {
    const sortedPerson = {};

    sortedPerson.id = arr.indexOf(person) + 1;
    sortedPerson.name = person.name;
    sortedPerson.sex = person.sex;
    sortedPerson.born = person.born;
    sortedPerson.died = person.died;
    sortedPerson.age = person.died - person.born;
    sortedPerson.century = Math.ceil(person.died / 100);
    sortedPerson.mother = person.mother || ``;
    sortedPerson.father = person.father || ``;
    sortedPerson.children = findChildren(arr, person.name);
    
    return sortedPerson;
  });
};

let isSpecial = person => {
  let className = " ";

  className += `person--lived-in-${person.century}`;

  if (person.sex === `f`) {
    className += ` person--female`;

    if (person.children) {
      className += ` person--mother`;
    }
  } else {
    className += ` person--male`;

    if (person.children) {
      className += ` person--father`;
    }
  }

  if (person.age > 65) {
    className += " age--More--65";
  }

  return className;
};

const findChildren = (arr, name) => {
  const result = [];

  arr.forEach(person => {
    if (person.father === name || person.mother === name) {
      result.push(person.name);
    }
  });

  return result;
};

export { prepareData, isSpecial };
