import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllStudents from './components/AllStudents';
import NewStudent from './components/NewStudent';
import Random from './components/Random';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Random />} />
        <Route path="/all" element={<AllStudents />} />
        <Route path="/new" element={<NewStudent />} />
      </Routes>
    </Router>
  );
}
