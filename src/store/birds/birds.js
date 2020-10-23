const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";

//action
export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird
  };
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird
  };
}

const defaultBirds = [
  {
    name: "bird",
    views: 1
  }
];
//reducer accepts state and action
function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1
        }
      ];
    default:
      return state;
  }
}
