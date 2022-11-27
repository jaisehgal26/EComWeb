import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Home from "./Home";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Home />));
  expect(wrapper).toMatchSnapshot();
});
