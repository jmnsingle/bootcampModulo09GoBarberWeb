import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import logoHeader from '~/assets/logoHeader.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logoHeader} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <Notifications />
            <div>
              <strong>Juliano Nogueira</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Juliano Nogueira"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
