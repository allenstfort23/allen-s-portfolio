import { useState } from "react";
import { API_URL } from "../../config";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setFormData({ fullName: "", company: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100 d-flex align-items-center">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <h1 className="display-5 fw-bold mb-2">Let's Connect</h1>
            <p className="text-secondary mb-4">
              Have a role, project, or idea? I'd love to hear from you.
            </p>

            {status === "success" && (
              <div className="alert alert-success">
                Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger">
                Something went wrong. Please try again or email me directly at{" "}
                <a href="mailto:allenstfort1@gmail.com">allenstfort1@gmail.com</a>.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-control bg-secondary bg-opacity-25 text-white border-secondary"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Company</label>
                  <input
                    type="text"
                    className="form-control bg-secondary bg-opacity-25 text-white border-secondary"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company (optional)"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control bg-secondary bg-opacity-25 text-white border-secondary"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control bg-secondary bg-opacity-25 text-white border-secondary"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Optional"
                  />
                </div>
                <div className="col-12">
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-control bg-secondary bg-opacity-25 text-white border-secondary"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={status === "sending"}>
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
