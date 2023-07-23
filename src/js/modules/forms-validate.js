const forms = [...document.querySelectorAll("form")];

if (forms.length > 0) {
  forms.forEach(initForm);
}

function initForm(form) {
  const inputs = [...form.querySelectorAll("[name]")];
  if (!inputs.length) return;

  const names = inputs.map(elem => elem.getAttribute("name"));
  console.log(names);
  if (!names.length) return;
  
  if (!form.inputFields) return;
  const fields = names.map(name => form.inputFields[name]).filter(Boolean);
  if (!fields.length) return;
  
  const submitBtn = form.querySelector("[type=submit]");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", function(e) {
    fields.forEach(field => field.validate());

    let isValid = true;

    for (let i = 0; i < fields.length; i++) {
      const field = fields[i];

      if (field.valid) {
        isValid = true;
      } else {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      return true;
    } else {
      e.preventDefault()
    }
  });
}
