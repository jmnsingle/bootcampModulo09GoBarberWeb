import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import socketio from 'socket.io-client';
import {
  format,
  addDays,
  subDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function Dashboard() {
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedue() {
      const response = await api.get('/schedule', {
        params: { date },
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedue();
  }, [date]);

  //const userId = useSelector(state => state.user.profile.id);
  //const socket = useMemo(
  //  () => socketio(`http://localhost:3333/my-namespace`),
  //  []
  //);

  useEffect(() => {
    const socket = socketio(`http://localhost:3333/my-namespace`);

    socket.on('hello', data => {
      console.log('Começou a ouvir ');
      console.log('mensagen recebida: ', data);
    });
  }, []);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft color="#fff" size={36} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight color="#fff" size={36} />
        </button>
      </header>

      <ul>
        {schedule.map(time => (
          <Time key={time.time} past={time.past} available={time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
        <Time available>
          <strong>09:00</strong>
          <span>Juliano Nogueira</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Juliano Nogueira</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Juliano Nogueira</span>
        </Time>
      </ul>
    </Container>
  );
}
