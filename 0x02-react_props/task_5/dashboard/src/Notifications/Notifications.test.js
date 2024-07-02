import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('Notification tests', () => {
  it('renders Notification component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toBeDefined();
  });

  it('renders correct list items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
    expect(wrapper.find(NotificationItem).first().prop('value')).toEqual('New course available');
    expect(wrapper.find(NotificationItem).at(1).prop('value')).toEqual('New resume available');
    expect(wrapper.find(NotificationItem).last().prop('html')).toEqual({ __html: getLatestNotification() });
  });

  it('renders an unordered list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('ul').children()).toHaveLength(3);
  });

  it('renders correct text', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
  });

  it('displays menu item when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.menuItem').exists()).toBe(true);
    expect(wrapper.find('div.menuItem').html()).toEqual('<div class="menuItem"><p>Your notifications</p></div>');
  });

  it('does not display notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(false);
  });

  it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div.Notifications').exists()).toBe(true);
  });
});
