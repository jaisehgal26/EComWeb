import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Facts from "./Facts";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Facts />));
  expect(wrapper).toMatchSnapshot();
});
