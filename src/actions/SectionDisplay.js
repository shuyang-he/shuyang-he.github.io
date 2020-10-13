export const handleSectionDisplay = ({ id, isIntersecting }) => {
  return {
    type: "SECTION_CHANGE",
    payload: {
      id: id,
      isIntersecting: isIntersecting,
    },
  };
};
