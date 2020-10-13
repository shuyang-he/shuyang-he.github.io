const initialState = {
  about: true,
  education: false,
  experience: false,
  projects: false,
  skills: false,
};

const sectionDisplay = (state = initialState, action) => {
  switch (action.type) {
    case "SECTION_CHANGE":
      const newState = { ...state };
      newState[action.payload.id] = action.payload.isIntersecting;
      return newState;
    default:
      return state;
  }
};

export default sectionDisplay;
