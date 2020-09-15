const topNavDropDisplay = (state = false, action) => {
  switch (action.key) {
    case "SHOW_DROP":
      return true;
    case "HIDE_DROP":
      return false;
    default:
      return state;
  }
};

export default topNavDropDisplay;
