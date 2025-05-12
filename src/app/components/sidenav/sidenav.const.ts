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
    href: '/',
    icon: faCashRegister,
  },
  {
    label: 'Finances',
    href: '/',
    icon: faBook,
  },
  {
    label: 'Human Resources',
    href: '/',
    icon: faPeopleGroup,
  },
];
