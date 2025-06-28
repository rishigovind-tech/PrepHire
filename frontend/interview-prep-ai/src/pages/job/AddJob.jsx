import React, { useContext, useEffect, useRef, useState } from "react";
import Quill from "quill";
import { JobCategories, JobLocations } from "../../assets/assets";
import axios from "axios";
import { AppContext } from "../../context/jobContext/AppContext";
import toast from "react-hot-toast";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");

  const [salary, setSalary] = useState(0);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const { backendUrl, companyToken } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const description = quillRef.current.root.innerHTML;

      console.log("Sending token:", companyToken);

      const { data } = await axios.post(
        backendUrl + "api/company/post-job",
        { title, description, location, salary, category, level },
        { headers: { token:companyToken } }

      );

      console.log(data);

      if (data.success) {
        toast.success(data.message)

        setTitle('')
        setSalary(0)
        setLevel('')
        setLocation('')
        setCategory('')
        quillRef.current.root.innerHTML=""
        
      }else{
        toast.error(data.message)
        
      }
    } catch (error) {

        toast.error(error.message)
        
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
      });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className=" container p-4 flex flex-col w-full items-start gap-3"
      action=""
    >
      <div className="w-full">
        <p className="mb-2">Job Title</p>
        <input
          type="text"
          placeholder="Type Here"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
          className=" w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded"
        />
      </div>

      <div className="w-full max-w-lg">
        <p className=" my-2 ">Job Description</p>
        <div ref={editorRef}></div>
      </div>

      <div className=" flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Job Category</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option disabled value={""} >Not Selected</option>
            {JobCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2">Job Location</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          >
            <option disabled value={""} >Not Selected</option>
            {JobLocations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="mb-2">Job Level</p>
          <select
            className=" w-full px-3 py-2 border-2 border-gray-300 rounded"
            onChange={(e) => setLevel(e.target.value)}
            value={level}
          >
            <option disabled value={""} >Not Selected</option>
            <option value="Beginner level">Beginner level</option>
            <option value="Intermediate level">Intermediate level</option>
            <option value="Senior level">Senior level</option>
          </select>
        </div>
      </div>
      <div>
        <p className="mb-2">Job Salary</p>
        <input
          min={0}
          className=" w-full px-3 py-2 border-2 border-gray-300 rounded sm:w-[120px]"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
          type="Number"
          placeholder="2500"
        />
      </div>

      <button className="w-28 py-3 mt-4 bg-orange-200 text-orange-600 rounded-2xl">
        ADD
      </button>
    </form>
  );
};

export default AddJob;
