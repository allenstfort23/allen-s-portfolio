import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div
        className="card bg-dark text-white p-4 rounded shadow-lg"
        style={{ maxWidth: "700px" }}>
        <h2 className="mb-3">Contact Me</h2>
        <p>Let's connect and build something amazing.</p>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name *</label>
            <input
              type="text"
              className="form-control bg-secondary text-white border-0"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          {/* Company Name */}
          <div className="mb-3">
            <label className="form-label">Company Name *</label>
            <input
              type="text"
              className="form-control bg-secondary text-white border-0"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Your company name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-control bg-secondary text-white border-0"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email address"
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="tel"
              className="form-control bg-secondary text-white border-0"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          {/* Checkbox */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label className="form-check-label">
              I agree to the privacy policy
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
