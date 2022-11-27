import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Service from "./Service";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Service />));
  expect(wrapper).toMatchSnapshot();
});
