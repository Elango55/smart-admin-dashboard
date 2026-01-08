import { useQuery } from "@apollo/client/react";
import { GET_STUDENTS } from "../graphql/queries";
import type { StudentsQueryData } from "../type/students";

export default function StudentsTable() {
  const { data, loading, error } = useQuery<StudentsQueryData>(GET_STUDENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data?.students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
