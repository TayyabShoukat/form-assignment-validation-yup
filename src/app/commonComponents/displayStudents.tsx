import { log } from "console";
import { studentType } from "../../../types/commonTypes";

export default function DisplayStudents(props: { studentData: studentType[] }) {
  console.log(props.studentData.map((item)=>item.name))

  return (
    <table className="table-auto border">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Father Name</th>
          <th className="border px-4 py-2">Address</th>
          <th className="border px-4 py-2">CNIC</th>
          <th className="border px-4 py-2">Date of Birth</th>
          <th className="border px-4 py-2">Student Mobile Number</th>
          <th className="border px-4 py-2">Father Mobile Number</th>
          <th className="border px-4 py-2">Session</th>
          <th className="border px-4 py-2">Section</th>
          <th className="border px-4 py-2">Class</th>
        </tr>
      </thead>
      <tbody>
        {props.studentData.map((item, index) => (
          <tr key={index} className="border">
            <td className="border px-4 py-2">{item.name}</td>
            <td className="border px-4 py-2">{item.fatherName}</td>
            <td className="border px-4 py-2">{item.address}</td>
            <td className="border px-4 py-2">{item.cnic}</td>
            <td className="border px-4 py-2">{item.dob}</td>
            <td className="border px-4 py-2">{item.studentMobile}</td>
            <td className="border px-4 py-2">{item.fatherMobile}</td>
            <td className="border px-4 py-2">{item.session}</td>
            <td className="border px-4 py-2">{item.section}</td>
            <td className="border px-4 py-2">{item.class}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
