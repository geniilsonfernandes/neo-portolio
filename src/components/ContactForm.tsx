"use client";

import { cn } from "@/utils";
import { IconAppWindow, IconDeviceMobile, IconDots, IconWorldPin } from "@tabler/icons-react";
import { useState } from "react";



const InputLabel = (props: React.LabelHTMLAttributes<HTMLLabelElement>) => <label
  className="block text-sm font-semibold text-slate-900 dark:text-white mb-2"
  {...props}
/>

const InputForm = (props: React.InputHTMLAttributes<HTMLInputElement>) => <input
  className="w-full px-4 py-3 border border-midnight-200 bg-midnight-900 text-white placeholder:text-midnight-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
  {...props}
/>

const InputTextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => <textarea
  className="w-full px-4 py-3 border border-midnight-200 bg-midnight-900 text-white placeholder:text-midnight-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200"
  {...props}
/>


export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
    isApp: false,
    isPWA: false,
    isWebApp: false,
    websiteClient: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the data - can be connected to an API later
    console.log("Form submitted:", formData);

    // Create mailto link with form data
    const subject = `New Project Inquiry: ${formData.projectType}`;
    const projectDetails = [];
    if (formData.isApp) projectDetails.push("Mobile App");
    if (formData.isPWA) projectDetails.push("PWA");
    if (formData.websiteClient) projectDetails.push(`Website Client: ${formData.websiteClient}`);

    if (formData.isWebApp) projectDetails.push("Web App");
    const detailsText = projectDetails.length > 0 ? `%0D%0AProject Details: ${projectDetails.join(", ")}` : "";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AProject Type: ${formData.projectType}${detailsText}%0D%0A%0D%0ADescription:%0D%0A${formData.description}`;
    window.location.href = `mailto:genilsonfernandes.dev@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <InputLabel
          htmlFor="name"
        >
          Name
        </InputLabel>
        <InputForm
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}

        />
      </div>

      <div>
        <InputLabel
          htmlFor="email"
        >
          Email
        </InputLabel>
        <InputForm
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}

        />
      </div>

      <div>
        <InputLabel
          htmlFor="websiteClient"
        >
          Website Client
        </InputLabel>
        <InputForm
          type="text"
          id="websiteClient"
          name="websiteClient"
          value={formData.websiteClient || ""}
          onChange={handleChange}
        />
      </div>


      <div>
        <InputLabel
          htmlFor="projectType"
        >
          Project Type
        </InputLabel>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {["Website", "Web App", "Mobile App", "Other"].map((type) => (
            <label
              key={type}
              className={cn(
                "relative flex flex-col items-center justify-center p-4 border cursor-pointer",
                "h-28 text-center",
                "border-midnight-200",
                "bg-midnight-900",
                "hover:border-teal-500",
                "transition-colors duration-200",
                formData.projectType === type
                  ? "border-teal-500 ring-2 ring-teal-500"
                  : ""
              )}
            >
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={formData.projectType === type}
                onChange={handleChange}
                className="sr-only" // Visually hide the radio button
                required
              />
              <div className="flex items-center justify-center mb-2 text-teal-500">
                {type === "Website" && (
                  <IconWorldPin strokeWidth={1} />
                )}
                {type === "Web App" && (
                  <IconAppWindow strokeWidth={1} />
                )}
                {type === "Mobile App" && (
                  <IconDeviceMobile strokeWidth={1} />
                )}

                {type === "Other" && (
                  <IconDots strokeWidth={1} />
                )}
              </div>
              <span className="text-sm font-medium text-slate-900 dark:text-white">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <InputLabel
          htmlFor="description"
        >
          Project Description
        </InputLabel>
        <InputTextArea
          id="description"
          name="description"
          required
          rows={6}
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className={cn(
          "w-full px-6 py-3 ",
          "bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600",
          "text-white font-semibold",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-midnight-900"
        )}
      >
        Send Message
      </button>
    </form>
  );
};
