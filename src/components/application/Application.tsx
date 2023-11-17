import React from 'react'

const Application = () => {
  return (
      <>
      <h1>Welcome to React-Testing</h1>
      <h2>Section 1</h2>
      <p>All Fields are Mandatory</p>
      <img src="/public/logo512.png" alt="Alternate text" />
     <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'placeholder='FullName' value='Felix' />
            <label htmlFor="bio">Bio</label>
            <input type="text" id='bio' />
        </div>
        <div>
            <label htmlFor="job-location">Name</label>
            <select name="" id="job-location">
                <option value="">Select a Country</option>
                <option value="US">United States</option>
                <option value="GB">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="IN">India</option>
                <option value="AU">Australia</option>
            </select>
        </div>
        <div>
            <label>
                <input type="checkbox" id='terms' /> I agree to the terms and conditions
            </label>
            <button>Submit</button>
        </div>
     </form>
     </>

  )
}

export default Application
