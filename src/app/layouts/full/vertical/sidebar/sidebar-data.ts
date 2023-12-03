import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'dashboard',
    route: 'academy/dashboard',
  },
  {
    displayName: 'Team',
    iconName: 'users-group',
    route: 'academy/team',
  },
  {
    navCap: 'Academy',
  },
  {
    displayName: 'Ninja Rules',
    iconName: 'message-2',
    route: 'academy/rules',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'academy/event',
  },
  {
    displayName: 'Quiz',
    iconName: 'zoom-question',
    route: 'academy/quiz',
  },
  {
    displayName: 'Mission',
    iconName: 'tank',
    route: 'academy/mission',
  },
 
 
  {
    displayName: 'Tickets',
    iconName: 'ticket',
    route: 'academy/tickets',
  },
];
