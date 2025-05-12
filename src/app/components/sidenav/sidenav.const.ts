import { faBook, faCashRegister, faDashboard, faMoneyBill, faMoneyBillAlt, faPeopleArrows, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { ISidenavItem } from './sidenav.interface';

export const SIDENAV_ITENS: ISidenavItem[] = [
  {
    label: 'Dashboard',
    href: '/',
    icon: faDashboard,
  },
  {
    label: 'Sales',
    href: '/sales',
    icon: faCashRegister,
  },
  {
    label: 'Finances',
    href: '/finance',
    icon: faBook,
  },
  {
    label: 'Human Resources',
    href: '/human-resources',
    icon: faPeopleGroup,
  },
];
