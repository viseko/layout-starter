const forms = [...document.querySelectorAll(".js-form")];

forms.forEach(initForm);

const PARAMS = {
  error: "_error",
  sent: "_success",
  await: "_await",
  resetAfterSuccess: true,
  resetDelay: 10000,
};

function initForm(form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    lockForm(this);
    sendData(this);
  })
}

function lockForm(form) {
  form.querySelectorAll("[type=submit]").forEach(btn => btn.disabled = true);
  form.classList.add(PARAMS.await);
}

function unlockForm(form) {
  form.querySelectorAll("[type=submit]").forEach(btn => btn.disabled = false);
  form.classList.remove(PARAMS.await);
}

function sendData(form) {
  const url = form.action;
  const formData = new FormData(form);

  fetch(url, {
    method: "POST",
    body: formData,
  }).then(response => response.status)
  .then(status => {
    if (status === 200) {
      handleSuccess(form);
    } else {
      handleError(form);
    }
  }).catch(() => handleError(form))
  .finally(() => unlockForm(form));
}

function handleSuccess(form) {
  
  form.classList.add(PARAMS.sent);
  resetForm(form);
  if (PARAMS.resetAfterSuccess) {
    setTimeout(() => {
      form.classList.remove(PARAMS.sent);
    }, PARAMS.resetDelay);
  }
}

function handleError(form) {
  form.classList.add(PARAMS.error);
}

function resetForm(form) {
  form.reset();
  form.querySelectorAll("._success").forEach(elem => elem.classList.remove("_success"));
}