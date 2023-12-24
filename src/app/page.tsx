import AddStudents from "./commonComponents/addStudents";
import DisplayStudents from "./commonComponents/displayStudents";

export default function Home() {
  return (
    <div className="flex justify-between p-5">
      <div className="">
        <AddStudents />
      </div>
    </div>
  );
}
