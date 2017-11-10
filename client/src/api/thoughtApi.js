class ThoughtApi {
  static getAllThoughts() {
    return fetch('http://localhost:3001/api/Thoughts')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json());
    }


    static saveThought(thought) {
      thought = Object.assign({}, thought); // to avoid manipulating object passed in.
      return new Promise((resolve, reject) => {
          // Simulate server-side validation
          const minThoughtTitleLength = 1;
          if (thought.title.length < minThoughtTitleLength) {
            reject(`Title must be at least ${minThoughtTitleLength} characters.`);
          }

          resolve(thought);
      });
    }

    static deleteThought(thoughtId) {
      return new Promise((resolve, reject) => {
          resolve();
      });
    }

}

export default ThoughtApi;
