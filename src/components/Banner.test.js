import Banner from "./Banner";
import { shallow } from "enzyme";
import * as React from "react";
import toJson from "enzyme-to-json";

test("renders Banner caption", () => {
  const wrapper = shallow(<Banner />);
  expect(wrapper.find("h1").text()).toContain("The Best Bakery In Your City");
});
test("includes two paragraphs", () => {
  const wrapper = shallow(<Banner />);
  expect(wrapper.find("p").length).toEqual(2);
});
test("should render correctly", () => {
  const wrapper = toJson(shallow(<Banner />));
  expect(wrapper).toMatchSnapshot();
});
