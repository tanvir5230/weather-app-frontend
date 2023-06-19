import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;

    // Send email using emailjs
    emailjs
      .send(
        "service_sblfe6c",
        "template_crg9k1i",
        {
          name,
          email,
          message,
        },
        "jjZAY5dKGrD8dQfqy"
      )
      .then(() => {
        // Email sent successfully
        setSuccessMsg("Email Sent Successfully. Wait to hear from me.");
        reset(); // Clear the form
        setTimeout(() => {
          setSuccessMsg("");
        }, 3000);
      })
      .catch((error) => {
        // Error occurred while sending email
        setErrorMsg("Your mail is not sent!!!");
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
      });
  };

  return (
    <div className="container py-3">
      <h2 className="mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <div className="invalid-feedback">Name is required</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div className="invalid-feedback">Email is required</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <div className="invalid-feedback">Message is required</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      {successMsg.length > 0 ? (
        <h5 className="text-success py-5">{successMsg}</h5>
      ) : null}
      {errorMsg.length >= 0 ? (
        <h5 className="text-danger py-5">{errorMsg}</h5>
      ) : null}
    </div>
  );
};

export { ContactMe };
