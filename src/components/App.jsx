import './App.css';
import { MainTitle } from './MainTitle/MainTitle';
import { EventBoard } from './EventBoard/EventBoard';
import eventsData from '../eventsData';

const App = () => {
  return (
    <div className="App">
      <MainTitle text="Intergalactic Conference" />
      <EventBoard events={eventsData} />
    </div>
  );
};

export { App };
