import React, { useState } from 'react';
 
import '../style/contact.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [eventType, setEventType] = useState('small-business');
  const [showForm, setShowForm] = useState(true);

  const buildURL = () => {
    const teamPage = 'acme-company-sales-team';
    return `https://calendly.com/${teamPage}/${eventType}`;
  };

  const showCalendly = (e) => {
    e.preventDefault();
    const generatedURL = buildURL();
    setShowForm(false);

    window.Calendly.initInlineWidget({
      url: generatedURL,
      prefill: {
        firstName: firstName,
        lastName: lastName,
        email: email,
      },
    });
  };

  return (
    <main>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>

      <div id="main-container" style={{ display: showForm ? 'block' : 'none' }}>
        <div id="custom-form-container">
          <form onSubmit={showCalendly} autoComplete="off">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            /><br />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            /><br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br />
            Require Qut:
            <select
              id="event-type-selection"
              className="select-css"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              <option value="small-business">1-9</option>
              <option value="small-business">10–19</option>
              <option value="small-business">20–29</option>
              <option value="small-business">30–39</option>
              <option value="small-business">40–49</option>
              <option value="enterprise">50–59</option>
              <option value="enterprise">60–69</option>
              <option value="enterprise">70–79</option>
              <option value="enterprise">80–89</option>
              <option value="enterprise">90+</option>
            </select>
            <br />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
