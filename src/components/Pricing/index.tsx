"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import useIsNigeria from "../hooks/useIsNigeria";

const Pricing = () => {
  const [isStudent, setIsStudent] = useState(true);

  const { isNigeria, error } = useIsNigeria();

  if (error) {
    return <p>Error: {error}</p>;
  }

  console.log("NIGGGGG", isNigeria)

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Our pricing plans are designed to fit any budget, offering all the essential features you need without breaking the bank. Get powerful tools at a price that works for your school."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsStudent(true)}
              className={`${
                isStudent
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Students
            </span>
            <div
              onClick={() => setIsStudent(!isStudent)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isStudent ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsStudent(false)}
              className={`${
                isStudent
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Schools
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Starter Plan"
            price={isNigeria ? 
              isStudent ? "₦1000" : "₦0.00" : 
              isStudent ? "$10.00" : "$0.00"
            }
            duration={isStudent ? "Term" : "Term"}
            subtitle="Access to essential study tools, limited features, and basic support."
          >
            {isStudent ? (
              <>
                <OfferList
                  text="Integrated Student Dashboard"
                  status="active"
                />
                <OfferList text="Integrated Parent Dashboard" status="active" />
                <OfferList text="Payment tracking" status="active" />
                <OfferList text="Access to CBT" status="active" />
                <OfferList text="Access to live class" status="active" />
              </>
            ) : (
              <>
               <OfferList text="Integrated Admin Dashboard" status="active" />
                <OfferList
                  text="Integrated Teacher Dashboard"
                  status="active"
                />
                <OfferList text="Complete school setup " status="active" />
                <OfferList text="Teachers Enrolment " status="active" />
                <OfferList text="Student enrollment " status="active" />
                <OfferList
                  text="Parent enrollment and linkup "
                  status="active"
                />
                <OfferList
                  text="Custom Live class integration "
                  status="active"
                />
                <OfferList text="CBT Assessment Setup" status="active" />
                <OfferList text="Grade metric setup" status="active" />
                <OfferList text="School time table" status="active" />
                <OfferList text="Class time table" status="active" />
                <OfferList text="School Fees payment" status="active" />
                <OfferList text="Behavioural Assessment Report" status="active" />
                <OfferList text="Student Progress Reports" status="active" />
                <OfferList text="Lesson Plan Management" status="active" />
                <OfferList text="Lesson Note Management" status="active" />
                <OfferList text="Lessons Tracking" status="active" />
              </>
            )}
          </PricingBox>
          <PricingBox
            packageName="Standard Plan"
            price={
              isNigeria ?
              isStudent ? "₦2,000" : "₦50,000" :
              isStudent ? "$50.00" : "$200.00"
            }
            duration={isStudent ? "Term" : "Term"}
            subtitle=" Includes all Basic Plan features plus additional resources, extended storage, and priority support"
          >
            {isStudent ? (
              <>
                <OfferList
                  text="Integrated Student Dashboard"
                  status="active"
                />
                <OfferList text="Integrated Parent Dashboard" status="active" />
                <OfferList text="Parent school communication" status="active" />
                <OfferList text="Payment tracking" status="active" />
                <OfferList text="Access to CBT" status="active" />
                <OfferList text="Access to live class" status="active" />
                <OfferList text="Accessment Record" status="active" />
                <OfferList text="Attendance record" status="active" />
                {/* <OfferList text="Access to CBT" status="active" /> */}
                <OfferList
                  text="Criteria-reference performance chart"
                  status="active"
                />
                <OfferList text="Behavioral performance" status="active" />
                <OfferList text="Formative performance chart" status="active" />
                <OfferList text="Sumative performance chart" status="active" />
              </>
            ) : (
              <>
                <OfferList text="Integrated Admin Dashboard" status="active" />
                <OfferList
                  text="Integrated Teacher Dashboard"
                  status="active"
                />
                <OfferList text="Complete school setup " status="active" />
                <OfferList text="Teachers Enrolment " status="active" />
                <OfferList text="Student enrollment " status="active" />
                <OfferList
                  text="Parent enrollment and linkup "
                  status="active"
                />
                <OfferList
                  text="Custom Live class integration "
                  status="active"
                />
                <OfferList text="CBT Assessment Setup" status="active" />
                <OfferList text="Grade metric setup" status="active" />
                <OfferList text="School time table" status="active" />
                <OfferList text="Class time table" status="active" />
                <OfferList text="School Fees payment" status="active" />
                <OfferList text="Behavioural Assessment Report" status="active" />
                <OfferList text="Student Progress Reports" status="active" />
                <OfferList text="Lesson Plan Management" status="active" />
                <OfferList text="Lesson Note Management" status="active" />
                <OfferList text="Lessons Tracking" status="active" />
                <OfferList text="In app Messenger" status="active" />
                <OfferList text="Time table analysis" status="active" />
                <OfferList text="Exam script analysis" status="active" />
                <OfferList
                  text="Students' Performance Analysis"
                  status="active"
                />
                <OfferList
                  text="School Fees Payment Analysis"
                  status="active"
                />
                <OfferList text="Subject Attendance" status="active" />
                <OfferList text="Class Attendance" status="active" />
                <OfferList
                  text="Attendance Report & Analysis"
                  status="active"
                />
                <OfferList text="Event manager" status="active" />
                <OfferList text="Todo Manager" status="active" />
                <OfferList text="Active CBT Assessment" status="active" />
              </>
            )}
          </PricingBox>
          <PricingBox
            packageName="Premium Plan"
            price={
              isNigeria ? 
              isStudent ? "₦20,000" : "₦500,000" :
              isStudent ? "$100.00" : "$500.00"
            }
            duration={isStudent ? "Term" : "Term"}
            subtitle=" All Standard Plan features plus advanced tools, unlimited storage, and personalized support."
          >
            {isStudent ? (
              <>
                <OfferList text="Ai lesson assistant" status="active" />
                <OfferList text="Ai group discusion" status="active" />
                <OfferList text="Ai test and exam simulation" status="active" />
                <OfferList
                  text="Integrated Student Dashboard"
                  status="active"
                />
                <OfferList text="Integrated Parent Dashboard" status="active" />
                <OfferList text="Parent school communication" status="active" />
                <OfferList text="Payment tracking" status="active" />
                <OfferList text="Access to CBT" status="active" />
                <OfferList text="Behavioral performance" status="active" />
                <OfferList text="Attendance record" status="active" />
                <OfferList
                  text="Criteria-reference performance chart"
                  status="active"
                />
                <OfferList
                  text="Norn-reference performance chart"
                  status="active"
                />
                <OfferList text="Formative performance chat" status="active" />
                <OfferList text="IpSative performance chart" status="active" />
                <OfferList text="Sumative performance chart" status="active" />
                <OfferList
                  text="Cumulative performance chart"
                  status="active"
                />
                <OfferList text="Task Manager" status="active" />
                <OfferList text="Accessment Record" status="active" />
                <OfferList text="Access to live class" status="active" />
              </>
            ) : (
              <>
                 <OfferList text="Integrated Admin Dashboard" status="active" />
                <OfferList
                  text="Integrated Teacher Dashboard"
                  status="active"
                />
                <OfferList text="Complete school setup " status="active" />
                <OfferList text="Teachers Enrolment " status="active" />
                <OfferList text="Student enrollment " status="active" />
                <OfferList
                  text="Parent enrollment and linkup "
                  status="active"
                />
                <OfferList
                  text="Custom Live class integration "
                  status="active"
                />
                <OfferList text="CBT Assessment Setup" status="active" />
                <OfferList text="Grade metric setup" status="active" />
                <OfferList text="School time table" status="active" />
                <OfferList text="Class time table" status="active" />
                <OfferList text="School Fees payment" status="active" />
                <OfferList text="Behavioural Assessment Report" status="active" />
                <OfferList text="Student Progress Reports" status="active" />
                <OfferList text="Lesson Plan Management" status="active" />
                <OfferList text="Lesson Note Management" status="active" />
                <OfferList text="Lessons Tracking" status="active" />
                <OfferList text="In app Messenger" status="active" />
                <OfferList text="Time table analysis" status="active" />
                <OfferList text="Exam script analysis" status="active" />
                <OfferList
                  text="Students' Performance Analysis"
                  status="active"
                />
                <OfferList
                  text="School Fees Payment Analysis"
                  status="active"
                />
                <OfferList text="Subject Attendance" status="active" />
                <OfferList text="Class Attendance" status="active" />
                <OfferList
                  text="Attendance Report & Analysis"
                  status="active"
                />
                <OfferList text="Event manager" status="active" />
                <OfferList text="Todo Manager" status="active" />
                <OfferList text="Active CBT Assessment" status="active" />
                <OfferList
                  text="Integrated Student Dashboard"
                  status="active"
                />
                <OfferList
                  text="In App live class inegration"
                  status="active"
                />
                <OfferList text="Ai lesson planner" status="active" />
                <OfferList text="Ai lesson assitant" status="active" />
                <OfferList text="Ai Assessment Simulation" status="active" />
                <OfferList text="Task Manager" status="active" />
              </>
            )}
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
