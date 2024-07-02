import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";

describe("Course List Row component test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);
    expect(wrapper.find("tr").children()).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toBe(2);
    expect(wrapper.find("th").text()).toBe("test");
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />);
    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("th").at(0).text()).toBe("test");
    expect(wrapper.find("th").at(1).text()).toBe("test");
  });

  it("should render two td cells when isHeader is false", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);
    expect(wrapper.find("tr").children()).toHaveLength(2);
    expect(wrapper.find("td").at(0).text()).toBe("test");
    expect(wrapper.find("td").at(1).text()).toBe("test");
  });
});
