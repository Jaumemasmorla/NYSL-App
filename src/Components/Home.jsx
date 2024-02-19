import React from "react";

export const HeaderHome = {
  title: 'Northside Youth Soccer League'
};

export const UpcomingEvents = {
  'title': 'Upcoming Events',
  'events': {
    '1': {
      'id': '1',
      'meets': 'August 4',
      'title': 'NYSL Fundraiser'
    },
    '2': {
      'id': '2',
      'meets': 'August 16',
      'title': 'Season Kick-off: Meet the Teams'
    },
    '3': {
      'id': '3',
      'meets': 'September 1',
      'title': 'First Game of the Season (Check Game Schedule for details)'
    },
  }
};

export const Home = () => {
  const events = Object.values(UpcomingEvents.events);

  return (
    <div>
      <div className="Title-2">
        <h2>{UpcomingEvents.title}</h2>
      </div>
      <div className="Upcoming-events-container">
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <strong>{event.meets}</strong> 
              <p style={{ marginLeft: '20px' }}>{event.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
