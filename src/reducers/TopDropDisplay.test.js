import topDropDisplay from "./TopDropDisplay";

const actionHide = {
  type: "HIDE_TOP_DROP",
};

const actionShow = {
  type: "SHOW_TOP_DROP",
};

test("Correctly change drop state.", () => {
  let state = topDropDisplay(false, actionShow);
  expect(state).toBeTruthy();
  state = topDropDisplay(true, actionHide);
  expect(state).toBeFalsy();
});