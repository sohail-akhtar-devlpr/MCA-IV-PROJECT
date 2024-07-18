"use client"
import React from 'react'
import { useState } from 'react';

function PostContestpage() {
  const [isLive, setLive] = useState(true);
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
        <strong className="text-red-500 text-lg font-bold">No Contest to Post.</strong>
        <span className="text-white font-semibold block sm:inline"> Kindly create a Contest.</span>
        <span className="text-yellow-500 font-semibold block sm:inline"> Note: You cannot post a Contest until atleast a  Contest had been created.</span>
      </div>
    )
  )

}

export default PostContestpage
