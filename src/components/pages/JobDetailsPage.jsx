import React from "react";
import Navbar from "../Navbar";
import Footer from "../Foooter";
import { json, useParams } from "react-router-dom";
import JobDeatlis from "../JobDeatilsComponent/jobDeatlis";

function JobDetailsPage() {
  const { jobName } = useParams();
  return <div className=" min-h-screen bg-black">
    <Navbar />
    <JobDeatlis jobName={jobName} />
    <Footer />
  </div>;
}

export default JobDetailsPage;
