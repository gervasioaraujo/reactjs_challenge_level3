import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface CustomLinkProps {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

const CustomNavLink: React.FC<CustomLinkProps> = ({
  label,
  to,
  activeOnlyWhenExact,
}: CustomLinkProps) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link to={to} className={match ? 'active' : ''}>
      {label}
    </Link>
  );
};

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <CustomNavLink to="/" label="Listagem" activeOnlyWhenExact />
        <CustomNavLink to="/import" label="Importar" />
      </nav>
    </header>
  </Container>
);

export default Header;
