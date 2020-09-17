export const handleTopDropDisplay = (topDropDisplay) => {
  if (topDropDisplay) {
    return {
      type: "HIDE_TOP_DROP",
    };
  } else {
    return {
      type: "SHOW_TOP_DROP",
    };
  }
};
