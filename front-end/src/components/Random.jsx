import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Random() {
  const [student, setStudent] = useState(null);

  async function getRandomStudent() {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      const response = await axios.get(`${API_URL}/students/random`);
      const student = response.data;
      if (!student) {
        alert('Putz! Não há estudantes cadastrados para o sorteio!');
      } else {
        setStudent(student);
      }
    } catch (error) {
      alert('Não foi possível realizar o sorteio!');
    }
  }

  useEffect(() => {
    getRandomStudent();
  }, []);

  return student ? <h1>{student.name}</h1> : 'Carregando...';
}
