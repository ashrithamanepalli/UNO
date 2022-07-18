const startGame = ({ response: rawRes }) => {
  const res = JSON.parse(rawRes);
  if (res.areSlotsFilled)
    document.location.href = '/game';
};

const isSlotFilled = () => {
  xhrGet('/game/are-slots-filled', '', startGame);
};

const checkForSlots = ({ response: rawRes }) => {
  const res = JSON.parse(rawRes);
  if (res.registrationStatus)
    setInterval(isSlotFilled, 1000);
};

const register = () => {
  const form = document.querySelector('form');
  const formData = new FormData(form);
  const formDetails = new URLSearchParams(formData)
  xhrPost('/login', formDetails, checkForSlots);
};
