"use strict";

const form = document.getElementById("talent-form");
const success = document.getElementById("success");
const statusMessage = document.getElementById("form-status");
const counter = document.getElementById("comments-counter");
const touched = new Set();

const messages = {
  "full-name": "Name must contain at least first and last name",
  email: "Enter a valid email (example: name@company.com)",
  phone: "Phone must include country code (example: +34 612 345 678)",
  "country-of-residence": "Select your country of residence",
  "years-of-experience": "Years of experience must be between 0 and 50",
  "sector-of-interest": "Select your sector of interest",
  "english-level": "Indicate your English level",
  availability: "Select your availability",
  linkedin: "If you include LinkedIn, it must be a valid URL",
  "additional-comments": "Comments cannot exceed 500 characters",
  "data-policy": "You must accept the data processing policy to continue"
};

const validators = {
  "full-name": value => value.trim().split(/\s+/).filter(Boolean).length >= 2,
  email: value => /^[^\s@<>]+@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z]{2,}$/i.test(value.trim()),
  phone: value => {
    const phone = value.trim();
    const digits = phone.replace(/\s/g, "").slice(1);
    return /^\+[1-9]\d*(?: \d+)*$/.test(phone) && digits.length >= 7 && digits.length <= 15;
  },
  "country-of-residence": value => ["Spain", "United States", "Other"].includes(value),
  "years-of-experience": value => value.trim() !== "" && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= 50,
  "sector-of-interest": value => ["Technology", "Retail", "Financial Services", "Consulting", "Other"].includes(value),
  "english-level": value => ["Basic", "Intermediate", "Advanced", "Native"].includes(value),
  availability: value => ["Immediate", "1 month", "2-3 months", "Just exploring"].includes(value),
  linkedin: value => {
    if (!value.trim()) return true;
    try {
      const url = new URL(value.trim());
      return /^https?:\/\//i.test(value.trim()) && ["http:", "https:"].includes(url.protocol) && Boolean(url.hostname);
    } catch {
      return false;
    }
  },
  "additional-comments": value => value.length <= 500,
  "data-policy": value => value === true
};

function controlsFor(fieldName) {
  if (fieldName === "availability") return [...form.querySelectorAll('[name="availability"]')];
  return [document.getElementById(fieldName)];
}

function valueFor(fieldName) {
  if (fieldName === "availability") return form.querySelector('[name="availability"]:checked')?.value ?? "";
  const control = document.getElementById(fieldName);
  return control.type === "checkbox" ? control.checked : control.value;
}

function validateField(fieldName) {
  const value = valueFor(fieldName);
  const valid = validators[fieldName](value);
  const error = document.getElementById(`${fieldName}-error`);
  error.textContent = valid ? "" : messages[fieldName];
  if (!valid && fieldName === "additional-comments") {
    error.textContent += ` (${500 - value.length} remaining)`;
  }
  error.hidden = valid;
  for (const control of controlsFor(fieldName)) {
    if (valid) control.removeAttribute("aria-invalid");
    else control.setAttribute("aria-invalid", "true");
    control.classList.toggle("border-red-700", !valid);
    control.classList.toggle("bg-red-50", !valid);
  }
  return valid;
}

function updateCounter() {
  const remaining = 500 - document.getElementById("additional-comments").value.length;
  counter.textContent = `${remaining} characters remaining`;
}

function handleEdit(event) {
  const fieldName = event.target.name;
  if (!Object.hasOwn(validators, fieldName)) return;
  success.hidden = true;
  if (fieldName === "additional-comments") updateCounter();
  if (event.type === "change" || event.type === "blur") touched.add(fieldName);
  if (touched.has(fieldName)) validateField(fieldName);
}

form.addEventListener("blur", handleEdit, true);
form.addEventListener("change", handleEdit);
form.addEventListener("input", handleEdit);

form.addEventListener("submit", event => {
  event.preventDefault();
  success.hidden = true;
  const invalidFields = [];
  for (const fieldName of Object.keys(validators)) {
    touched.add(fieldName);
    if (!validateField(fieldName)) invalidFields.push(fieldName);
  }
  if (invalidFields.length) {
    statusMessage.textContent = `Please correct ${invalidFields.length} field${invalidFields.length === 1 ? "" : "s"} before continuing.`;
    controlsFor(invalidFields[0])[0].focus();
    return;
  }
  statusMessage.textContent = "Your demonstration application has been validated.";
  success.hidden = false;
  document.getElementById("success-heading").focus();
});

form.addEventListener("reset", () => {
  queueMicrotask(() => {
    touched.clear();
    success.hidden = true;
    statusMessage.textContent = "";
    for (const fieldName of Object.keys(validators)) {
      const error = document.getElementById(`${fieldName}-error`);
      error.hidden = true;
      error.textContent = "";
      for (const control of controlsFor(fieldName)) {
        control.removeAttribute("aria-invalid");
        control.classList.remove("border-red-700", "bg-red-50");
      }
    }
    counter.textContent = "500 characters remaining";
    document.getElementById("full-name").focus();
  });
});

form.noValidate = true;
document.getElementById("submit-application").disabled = false;