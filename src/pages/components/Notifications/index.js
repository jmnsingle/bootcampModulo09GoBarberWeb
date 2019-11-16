import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnRead>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>
      <NotificationList>
        <Scroll>
          <Notification unRead>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unRead>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification unRead>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Um novo agendamento para amnhã</p>
            <time>há 2 dias</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
