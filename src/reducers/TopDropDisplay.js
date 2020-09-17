const topDropDisplay = (state = false, action) => {
  switch (action.type) {
    case "SHOW_TOP_DROP":
      return true;
    case "HIDE_TOP_DROP":
      return false;
    default:
      return state;
  }
};

export default topDropDisplay;
