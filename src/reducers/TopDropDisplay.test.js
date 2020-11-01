import topDropDisplay from "./TopDropDisplay";

const actionDefault = {
  type: "DEFAULT",
}

const actionHide = {
  type: "HIDE_TOP_DROP",
};

const actionShow = {
  type: "SHOW_TOP_DROP",
};

test("Correctly save state.", () => {
  let state = topDropDisplay(undefined, actionDefault);
  expect(state).toBeFalsy();
})

test("Correctly change drop state.", () => {
  let state = topDropDisplay(false, actionShow);
  expect(state).toBeTruthy();
  state = topDropDisplay(true, actionHide);
  expect(state).toBeFalsy();
});