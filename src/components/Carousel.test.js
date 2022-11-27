import * as React from "react";

import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Carousel from "./Carousel";

test("should render correctly", () => {
  const wrapper = toJson(shallow(<Carousel />));
  expect(wrapper).toMatchSnapshot();
});
it("includes two paragraphs", () => {
  const wrapper = shallow(<Carousel />);
  expect(wrapper.find("p").length).toEqual(4);
});
