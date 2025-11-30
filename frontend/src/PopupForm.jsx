import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PopupForm = ({ show: externalShow, onClose: externalOnClose }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
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

  // Detect if submitted=true exists in URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      setHasSubmitted(true);
    }
  }, []);

  // Fetch IP once on mount
  useEffect(() => {
    axios
      .get("https://api64.ipify.org?format=json")
      .then((res) => setFormData((prev) => ({ ...prev, ip: res.data.ip })))
      .catch(() => setFormData((prev) => ({ ...prev, ip: "unknown" })));
  }, []);

  // Show popup after 10s — ONLY IF not submitted before
  useEffect(() => {
    if (hasSubmitted) return;

    if (typeof externalShow === "undefined") {
      const timer = setTimeout(() => setShowPopup(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [externalShow, hasSubmitted]);

  const handleClose = () => {
    setShowPopup(false);
    if (externalOnClose) externalOnClose();
  };

  const isShown =
    typeof externalShow === "boolean" ? externalShow : showPopup;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await axios.post("https://api.sujay-sierra.com/home/send-email", {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile.replace(/\D/g, ""),
        ip: formData.ip,
      });

      window.history.pushState({}, "", "?submitted=true");
      setHasSubmitted(true);
      setShowPopup(false);
      setShowThankYou(true);

      setFormData((prev) => ({
        name: "",
        email: "",
        mobile: "",
        agreeTerms: false,
        ip: prev.ip,
      }));
    } catch (err) {
      alert("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Do not show main popup if already submitted
  if (hasSubmitted) {
    return showThankYou ? (
      <ThankYouModal onClose={() => setShowThankYou(false)} />
    ) : null;
  }

  // Hide popup if user closes
  if (!isShown) return null;

  return (
    <>
      {/* ⭐ PHONE INPUT STYLES ⭐ */}
      <style>{`
        .phone-wrapper {
          border: 1px solid #d1d5db;
          border-radius: 8px;
          padding: 6px;
          background: #ffffff;
          display: flex;
          align-items: center;
          transition: 0.2s ease-in-out;
        }
        .phone-wrapper:focus-within {
          border-color: #002954;
          box-shadow: 0 0 0 3px rgba(0, 41, 84, 0.15);
        }
        .phone-input {
          width: 100% !important;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          font-size: 15px !important;
          padding-left: 50px !important;
          padding-top: 10px !important;
          padding-bottom: 10px !important;
        }
        .phone-dropdown {
          border: none !important;
          background: transparent !important;
        }
        .react-tel-input .form-control {
          border: none !important;
          background: transparent !important;
        }
      `}</style>

      {/* Lead Form Popup */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-lg relative">

          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
          >
            &times;
          </button>

          <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
            Get a Call Back
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name*"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address*"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            {/* ⭐ UPDATED MOBILE NUMBER UI ⭐ */}
            <div className="space-y-1">
              <label className="text-gray-700 font-medium text-sm">
                Mobile Number*
              </label>

              <div className="phone-wrapper">
                <PhoneInput
                  country="in"
                  value={formData.mobile}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, mobile: value }))
                  }
                  inputProps={{ name: "mobile", required: true }}
                  containerClass="w-full"
                  inputClass="phone-input"
                  buttonClass="phone-dropdown"
                />
              </div>

              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <div className="flex items-start text-sm">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mr-2 mt-1"
                required
              />
              <span>I accept T&C and Privacy Policy.</span>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500 text-sm">{errors.agreeTerms}</p>
            )}

            <button
              type="submit"
              className="w-full text-white p-3 rounded text-lg bg-[#fea611] hover:bg-[#002954] transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit your request"}
            </button>
          </form>
        </div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && <ThankYouModal onClose={() => setShowThankYou(false)} />}
    </>
  );
};

// THANK YOU MODAL
const ThankYouModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-[9999] flex items-center justify-center px-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-sm w-full text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-3">Thank You!</h2>
        <p className="text-gray-600 mb-6">
          Your details have been submitted successfully. Our team will contact you shortly.
        </p>

        <button
          onClick={onClose}
          className="w-full py-2 bg-[#fea611] hover:bg-[#002954] text-white rounded transition"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
