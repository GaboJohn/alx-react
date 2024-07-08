import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import Login from '../Login/Login';

describe('App component', () => {
  let logOutMock;
  let alertMock;

  beforeAll(() => {
    // Mock global objects
    global.document = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    };

    global.window = {
      alert: jest.fn(),
    };
  });

  beforeEach(() => {
    logOutMock = jest.fn();
    alertMock = jest.spyOn(global.window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications).exists()).toBe(true);
  });

  it('renders courselist if logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBe(true);
    expect(wrapper.find(Login).exists()).toBe(false);
  });

  it('calls logOut and displays alert when ctrl+h is pressed', () => {
    // Simulate a real DOM for mount
    const component = mount(<App logOut={logOutMock} />);
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });

    global.document.dispatchEvent(event);

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalled();
  });
});
