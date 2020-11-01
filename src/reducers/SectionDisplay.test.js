import { TestScheduler } from "jest";
import sectionDisplay from "./SectionDisplay";

const initialState = {
  about: true,
  education: false,
  experience: false,
  projects: false,
  skills: false,
};

const actionDefault = {
  type: "DEFAULT"
}

const aboutTF = {
  type: "SECTION_CHANGE",
  payload: {
    id: "about",
    isIntersecting: false,
  },
};

const aboutFT = {
  type: "SECTION_CHANGE",
  payload: {
    id: "about",
    isIntersecting: true,
  },
}

test("Correctly save state.", () => {
  let state = sectionDisplay(undefined, actionDefault);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false
  });
});

test("Correctly change about state.", () => {
  let state = sectionDisplay(undefined, aboutTF);
  expect(state).toEqual({
    about: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
  state = sectionDisplay(initialState, aboutFT);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
});

const educationTF = {
  type: "SECTION_CHANGE",
  payload: {
    id: "education",
    isIntersecting: false,
  },
};

const educationFT = {
  type: "SECTION_CHANGE",
  payload: {
    id: "education",
    isIntersecting: true,
  },
}

test("Correctly change education state.", () => {
  let state = sectionDisplay(undefined, educationTF);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
  state = sectionDisplay(undefined, educationFT);
  expect(state).toEqual({
    about: true,
    education: true,
    experience: false,
    projects: false,
    skills: false,
  });
});

const experienceTF = {
  type: "SECTION_CHANGE",
  payload: {
    id: "experience",
    isIntersecting: false,
  },
};

const experienceFT = {
  type: "SECTION_CHANGE",
  payload: {
    id: "experience",
    isIntersecting: true,
  },
}

test("Correctly change experience state.", () => {
  let state = sectionDisplay(undefined, experienceTF);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
  state = sectionDisplay(undefined, experienceFT);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: true,
    projects: false,
    skills: false,
  });
});

const projectsTF = {
  type: "SECTION_CHANGE",
  payload: {
    id: "projects",
    isIntersecting: false,
  },
};

const projectsFT = {
  type: "SECTION_CHANGE",
  payload: {
    id: "projects",
    isIntersecting: true,
  },
}

test("Correctly change projects state.", () => {
  let state = sectionDisplay(undefined, projectsTF);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
  state = sectionDisplay(undefined, projectsFT);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: true,
    skills: false,
  });
});

const skillsTF = {
  type: "SECTION_CHANGE",
  payload: {
    id: "skills",
    isIntersecting: false,
  },
};

const skillsFT = {
  type: "SECTION_CHANGE",
  payload: {
    id: "skills",
    isIntersecting: true,
  },
}

test("Correctly change skills state.", () => {
  let state = sectionDisplay(undefined, skillsTF);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: false,
  });
  state = sectionDisplay(undefined, skillsFT);
  expect(state).toEqual({
    about: true,
    education: false,
    experience: false,
    projects: false,
    skills: true,
  });
});