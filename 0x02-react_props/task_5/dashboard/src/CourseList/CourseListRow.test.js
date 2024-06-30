import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders two cells when textSecondCell is present and isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two td elements within a tr element when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});
