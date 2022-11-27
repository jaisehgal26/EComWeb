// import React from "react";
// import { Route } from "react-router";
// import { shallow, mount } from "enzyme";
// import toJson from "enzyme-to-json";
// import Routes from "./Routes";
// import Home from "./Home";
// import Login from "./Login";
// import Cart from "./Cart";
// import Products from "./Products";

// test("should render correctly", () => {
//   const wrapper = toJson(shallow(<Routes />));
//   expect(wrapper).toMatchSnapshot();
// });

// test("renders correct route home", () => {
//   const wrapper = shallow(<Routes />);
//   console.log(wrapper);
//   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;
//   }, {});

//   expect(pathMap["/"]).toEqual(<Home />);
// });

// // test("renders correct route login", () => {
// //   const wrapper = shallow(<Routes />);
// //   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
// //     const routeProps = route.props();
// //     if (routeProps.component) {
// //       pathMap[routeProps.path] = routeProps.component;
// //     } else if (routeProps.render) {
// //       pathMap[routeProps.path] = routeProps.render({}).type;
// //     }
// //     return pathMap;
// //   }, {});

// //   expect(pathMap["/login"]).toEqual(<Login />);
// // });
// // test("renders correct route Cart", () => {
// //   const wrapper = shallow(<Routes />);
// //   const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
// //     const routeProps = route.props();
// //     pathMap[routeProps.path] = routeProps.component;
// //     return pathMap;
// //   }, {});

// //   expect(pathMap["/Cart"]).toBe(Cart);
// // });
