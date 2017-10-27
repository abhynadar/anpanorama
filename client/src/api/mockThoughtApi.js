import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const thoughts = [
  {
    id: "everyone-wants-gift",
    title: "Everyone wants gift",
    description: "Everyone wants gift but not the giver.",
    watchHref: "https://abhynadar.github.io/arcanvas/thought/everyone-wants-gift/"
  },
  {
    id: "traditions-of-men",
    title: "Traditions of men",
    description: "Traditions of men make The Word of God of null effect.",
    watchHref: "https://abhynadar.github.io/arcanvas/thought/traditions-of-men/"
  },
  {
    id: "when-vilest-men-are-exalted",
    title: "When vilest men are exalted",
    description: "The wicked walk on every side, when the vilest men are exalted. (Psalm 12:8)",
    watchHref: "https://abhynadar.github.io/arcanvas/thought/when-vile-are-exalted/"
  },
  {
    id: "prince-of-peace",
    title: "Prince of Peace",
    description: "Everyone wants peace, but they do not want to come to Jesus - The Prince of Peace.",
    watchHref: "https://abhynadar.github.io/arcanvas/thought/prince-of-peace/"
  },
  {
    id: "faith-comes-by-hearing",
    title: "Faith comes by hearing",
    description: "Faith comes by hearing, yes hearing, yes once again hearing, and hearing the Word of God(Romans 10:17).",
    watchHref: "https://abhynadar.github.io/arcanvas/thought/faith-comes-by-hearing/"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (thought) => {
  return replaceAll(thought.title, ' ', '-');
};

class ThoughtApi {
  static getAllThoughts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], thoughts));
      }, delay);
    });
  }

  static saveThought(thought) {
    thought = Object.assign({}, thought); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minThoughtTitleLength = 1;
        if (thought.title.length < minThoughtTitleLength) {
          reject(`Title must be at least ${minThoughtTitleLength} characters.`);
        }

        if (thought.id) {
          const existingThoughtIndex = thoughts.findIndex(a => a.id == thought.id);
          thoughts.splice(existingThoughtIndex, 1, thought);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          thought.id = generateId(thought);
          thought.watchHref = `http://www.pluralsight.com/courses/${thought.id}`;
          thoughts.push(thought);
        }

        resolve(thought);
      }, delay);
    });
  }

  static deleteThought(thoughtId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfThoughtToDelete = thoughts.findIndex(thought => {
          thought.id == thoughtId;
        });
        thoughts.splice(indexOfThoughtToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ThoughtApi;
