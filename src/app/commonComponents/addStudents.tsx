"use client";
import React, { useState } from "react";
import { onChangeEventType, studentType } from "../../../types/commonTypes";
import DisplayStudents from "./displayStudents";
import * as yup from "yup";
import { Session } from "inspector";

const AddStudents = () => {
  const [students, setStudents] = useState<studentType>({
    name: "",
    fatherName: "",
    address: "",
    cnic: 0,
    dob: "",
    studentMobile: 0,
    fatherMobile: 0,
    session: "",
    section: "",
    class: "",
  });

  const [errors, setError] = useState<string[]>([]);
  const [studentList, setstudentList] = useState<studentType[]>([]);
  const onChangeHandler = (e: onChangeEventType) => {
    let userDetails = {
      ...students,
      [e.target.name]: e.target.value,
    };
    setStudents(userDetails);
  };

  //Validation
  const contactInfoSchema = yup.object().shape({
    name: yup.string().required().max(20),
    fatherName: yup.string().required().max(20),
    address: yup.string().required().min(3, 'must be at least 3 characters long').max(50),
    cnic: yup.number().required().positive().integer(),
    dob: yup.date().default(() => new Date()),
    studentMobile: yup.number().required().positive().integer(),
    fatherMobile: yup.number().positive().integer(),
    session: yup.string().required(),
    section: yup.string().required(),
    class: yup.string().required(),
  });

  const onClickHandler = async () => {
    try {
      const result = await contactInfoSchema.validate(students);
      console.log(result);

      if (!result) {
        return;
      }

      let newContactList: studentType[] = [...studentList, students];
      setstudentList(newContactList);
      setError([]);
      setStudents({
        name: "",
        fatherName: "",
        address: "",
        cnic: 0,
        dob: "",
        studentMobile: 0,
        fatherMobile: 0,
        session: "",
        section: "",
        class: "",
      });
    } catch (err: any) {
      setError(err.errors);

      console.log("error", err.errors);
    }
  };

  const handleSubmit = (event: any) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  };
  return (
    <>
      <h1 className="text-center text-4xl my-5">Student Management System</h1>
      <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          {/* <!-- Input Field 1 --> */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              value={students.name}
              onChange={onChangeHandler}
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 2 --> */}
          <div className="mb-4">
            <label
              htmlFor="fathername"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Father Name:
            </label>
            <input
              value={students.fatherName}
              onChange={onChangeHandler}
              type="text"
              id="fathername"
              name="fatherName"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Repeat the above pattern htmlFor the remaining 8 fields --> */}

          {/* <!-- Input Field 3 --> */}
          <div className="mb-4">
            <label
              htmlFor="Address"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address:
            </label>
            <input
              value={students.address}
              onChange={onChangeHandler}
              type="text"
              id="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 4 --> */}
          <div className="mb-4">
            <label
              htmlFor="cnin"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              CNIC:
            </label>
            <input
              value={students.cnic}
              onChange={onChangeHandler}
              type="number"
              id="cnic"
              name="cnic"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 5 --> */}
          <div className="mb-4">
            <label
              htmlFor="Dob"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Date of Birth:
            </label>
            <input
              value={students.dob}
              onChange={onChangeHandler}
              type="text"
              id="dob"
              name="dob"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 6 --> */}
          <div className="mb-4">
            <label
              htmlFor="studentmobile"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Student Mobile Number:
            </label>
            <input
              value={students.studentMobile}
              onChange={onChangeHandler}
              type="number"
              id="studentmobile"
              name="studentMobile"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 7 --> */}
          <div className="mb-4">
            <label
              htmlFor="fathernumber"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Father Mobile Number:
            </label>
            <input
              value={students.fatherMobile}
              onChange={onChangeHandler}
              type="number"
              id="fatherMobile"
              name="fatherMobile"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 8 --> */}
          <div className="mb-4">
            <label
              htmlFor="session"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Session:
            </label>
            <input
              value={students.session}
              onChange={onChangeHandler}
              type="text"
              id="session"
              name="session"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 9 --> */}
          <div className="mb-4">
            <label
              htmlFor="section"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Section:
            </label>
            <input
              value={students.section}
              onChange={onChangeHandler}
              type="text"
              id="section"
              name="section"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* <!-- Input Field 10 --> */}
          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Class:
            </label>
            <input
              value={students.class}
              onChange={onChangeHandler}
              type="text"
              id="class"
              name="class"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {errors.map((item) => {
            return (
              <div style={{ color: "red" }}>
                <h1>{item}</h1>
              </div>
            );
          })}
          {/* <!-- Submit Button --> */}
          <div className="mt-6">
            <button
              onClick={onClickHandler}
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <DisplayStudents studentData={studentList} />
    </>
  );
};

export default AddStudents;
