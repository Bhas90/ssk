import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Banner = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agreeTerms: false,
    ip: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Detect ?submitted=true */
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      setHasSubmitted(true);
    }
  }, []);

  /* Fetch IP Address */
  useEffect(() => {
    axios
      .get("https://api64.ipify.org?format=json")
      .then((response) => {
        setFormData((prev) => ({ ...prev, ip: response.data.ip }));
      })
      .catch(() => {
        setFormData((prev) => ({ ...prev, ip: "unknown" }));
      });
  }, []);

  const handleInputChange = (e) => {
    if (hasSubmitted) return;
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (hasSubmitted) return false;

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";

    const onlyDigits = formData.mobile.replace(/\D/g, "");
    if (onlyDigits.length < 10)
      newErrors.mobile = "Mobile must be at least 10 digits";

    if (!formData.agreeTerms)
      newErrors.agreeTerms = "You must agree to the terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post(
        "http://localhost:5000/home/send-email",
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile.replace(/\D/g, ""),
          ip: formData.ip,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      window.history.pushState({}, "", "?submitted=true");
      setHasSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Unable to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full px-4 py-12 md:px-6 bg-white">

      {/* CONTACT FORM BOX */}
      <div className="w-full bg-white p-6 md:p-8 ">

        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-4">
          REQUEST CALLBACK TODAY!
        </h2>

        {/* THANK YOU MESSAGE */}
        {hasSubmitted && (
          <div className="bg-green-100 text-green-700 text-center p-3 rounded mb-4 font-medium">
            Thank you! We have received your enquiry. Our team will contact you shortly.
          </div>
        )}

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleFormSubmit} noValidate>

          <input
            type="text"
            name="name"
            disabled={hasSubmitted}
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name*"
            className={`w-full p-3 border rounded ${
              hasSubmitted ? "bg-gray-200 cursor-not-allowed" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            disabled={hasSubmitted}
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email Address*"
            className={`w-full p-3 border rounded ${
              hasSubmitted ? "bg-gray-200 cursor-not-allowed" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <PhoneInput
            country="in"
            disabled={hasSubmitted}
            value={formData.mobile}
            onChange={(value) =>
              !hasSubmitted && setFormData((prev) => ({ ...prev, mobile: value }))
            }
            containerClass="w-full"
            inputClass={`py-4 bg-transparent ${
              hasSubmitted ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            inputProps={{ name: "mobile", required: true }}
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

          <div className="flex items-start text-sm">
            <input
              type="checkbox"
              name="agreeTerms"
              disabled={hasSubmitted}
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mr-2 mt-1"
            />
            <span>
              I authorize Sujay Infra to Call, SMS, Email or WhatsApp me. I also accept
              T&C and Privacy Policy.
            </span>
          </div>
          {errors.agreeTerms && (
            <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || hasSubmitted}
            className={`w-full text-white p-3 rounded text-lg 
              transition bg-gradient-to-r from-[#002954] to-[#fea611] hover:opacity-90 
              ${hasSubmitted ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {hasSubmitted
              ? "Submitted"
              : isSubmitting
              ? "Submitting..."
              : "Submit your request"}
          </button>
        </form>
      </div>

    </div>
  );
};

export default Banner;
