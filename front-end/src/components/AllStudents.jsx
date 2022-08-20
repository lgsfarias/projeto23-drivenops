import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllStudents() {
  const [students, setStudents] = useState(null);

  async function getAllStudents() {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${API_URL}/students`);
      const students = response.data;
      if (students.length === 0) {
        alert('Putz! Não há estudantes cadastrados!');
      } else {
        setStudents(students);
      }
    } catch (error) {
      alert('Não foi localizar os alunos!');
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return students ? (
    <ul
      style={{
        listStyle: 'none',
      }}
    >
      {students.map((student) => (
        <li key={student.id}>
          <h1>{student.name}</h1>
        </li>
      ))}
    </ul>
  ) : (
    'Carregando...'
  );
}
