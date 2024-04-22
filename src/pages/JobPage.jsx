import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
  // Fetching data using React-router DataLoader
  //   const { id } = useParams();
  const job = useLoaderData();

  return <h2>{job.title}</h2>;
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };

// using state to manage data fetching:

// import { useEffect, useState } from "react";
// import Spinner from "../components/Spinner";

//  const [job, setJob] = useState(null);
//  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await fetch(`/api/jobs/${id}`);
//         const data = await res.json();
//         setJob(data);
//         // console.log(data);
//       } catch (error) {
//         console.log("Error fetching data", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJob();
//   }, []);
