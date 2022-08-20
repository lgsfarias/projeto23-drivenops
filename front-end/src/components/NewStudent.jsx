import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewStudent() {
  const [students, setStudents] = useState(['']);
  const refToLast = React.createRef();

  useEffect(() => {
    refToLast.current.focus();
  });

  async function handleSubmit() {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
      await axios.post(`${API_URL}/students`, {
        students: students
          .filter((student) => student)
          .map((student) => {
            return { name: student };
          }),
      });
      setStudents(['']);
    } catch (error) {
      alert('Não foi possível cadastrar o aluno!');
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {students.map((student, index) => (
        <input
          type="text"
          placeholder="Nome do aluno"
          value={students[index]}
          onChange={(e) => {
            setStudents(
              students.map((student, i) => {
                if (i === index) {
                  return e.target.value;
                }
                return student;
              }),
            );
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setStudents([...students, '']);
            }
          }}
          ref={refToLast}
        />
      ))}
      <button onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
}
