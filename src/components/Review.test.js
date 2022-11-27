import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Review from "./Review";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Review />));
  expect(wrapper).toMatchSnapshot();
});
