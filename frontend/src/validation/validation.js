// validateForm.js
export default function validateForm(formData) {
  const errors = {};

  // Regex Patterns
  const textRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const numberRegex = /^[0-9]+$/;

  if (!formData.title || !textRegex.test(formData.title)) {
    errors.title = "Title should contain only letters";
  }

  if (!formData.author || !textRegex.test(formData.author)) {
    errors.author = "Author should contain only letters";
  }

  if (!formData.publisher || !textRegex.test(formData.publisher)) {
    errors.publisher = "Publisher should contain only letters";
  }

  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = "Invalid email address";
  }

  if (!formData.age || !numberRegex.test(formData.age)) {
    errors.age = "Age must be a valid number";
  }

  if (!formData.description || formData.description.length < 10) {
    errors.description = "Description must be at least 10 characters";
  }

  return errors;
}
