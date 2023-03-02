import Nav from './Nav';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm';
import PresentationForm from './PresentationForm';


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="locations">
              <Route path="new" element={<LocationForm />} />
            </Route>
            <Route path="conferences">
              <Route path="new" element={<ConferenceForm/>} />
            </Route>
            <Route path="attendees">
              <Route path="list" element={<AttendeesList attendees={props.attendees}/>}/>
            </Route>
            <Route path="attendconference">
              <Route path="new" element={<AttendConferenceForm/>}/>
            </Route>
            <Route path="presentations">
              <Route path="new" element={<PresentationForm/>}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;
