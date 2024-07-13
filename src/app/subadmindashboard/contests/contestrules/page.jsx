"use client"
import React, { useState } from 'react'

function page() {
  const [isLive, setLive] = useState(false);
  return (
    isLive ? (
      <div>
      <div>Contest Rules: Outline the rules participants must follow.</div>
      <div>Eligibility Criteria: Specify who can participate (age, skill level,etc)</div>
      <div>Registration Deadline: When participants need to sign up b</div>
      <div>Contact Information: For participants to reach out with quesstions</div>
      <div>Judging Criteria: How entries will be evaluated.</div>
      <div>Number of Participants: Maximum or minimum number of participant allowed</div>
      <div>Schedule of Events: Outline the timeline for the contest day</div>
      <div>Sponsorship Information: Any sponsors involved in the contest</div>
      <div>Social Media Links: For promoting the contest or sharing results</div>
      <div>FAQs: Frequently asked questions about the contest.</div>
      <div>Cancellation Policy: What happens if the contest is canceled or resscheduled</div>
      <div>Website/Link: A link to more information or registration details.</div>
    </div>
    ):(
      <div className="text-yellow-700 px-4 py-3 rounded relative" role="alert">
        <strong className="text-red-500 text-lg font-bold">No contest is currently live.</strong>
        <span className="text-white font-semibold block sm:inline"> Kindly create a contest before proceeding.</span>
        <span className="text-yellow-500 font-semibold block sm:inline"> Note: You cannot add Contest Rules until a contest is live.</span>
      </div>
    )
  )
}

export default page
