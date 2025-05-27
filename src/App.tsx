import { Routes, Route } from 'react-router-dom';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

