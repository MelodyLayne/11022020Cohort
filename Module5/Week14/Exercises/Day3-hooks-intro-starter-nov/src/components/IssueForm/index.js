import { useState } from 'react';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

const IssueForm = () => {

  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [level, setLevel] =useState('')
  const [issue, setIssue] =useState('')
  const [issuesArray, setIssuesArray] = useState('')

  const handleSubmit = (e) => {
    e.prevent.default();
    
  }
  console.log(name, email, level, issue)
  return (
		<div>
			<h2>Make A Complaint</h2>
			<form>
				<div>
					<label htmlFor="name">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text" />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text" />
				</div>
				<div>
					<label htmlFor="level">Urgency Level:</label>
          <select onChange={(e) => setEmail(e.target.value)}
            value={level}
            name="level">
						<option value='' disabled>Select</option>
						<option value='urgent'>Urgent</option>
						<option value='not urgent'>Not Urgent</option>
					</select>
				</div>
				<div>
					<label htmlFor="issue">Issue:</label>
					<br />
					<textarea
						onChange={(e) => setIssue(e.target.value)}
						value={issue}
            rows="10"
						cols="50"
					></textarea>
				</div>

				<button type="submit">Submit</button>
			</form>

			<hr />
			<h2>List of Issues:</h2>
		</div>
	);
};

export default IssueForm;
