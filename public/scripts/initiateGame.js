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
  document.querySelector('.message').innerText = res.message;
  if (res.registrationStatus) {
    document.querySelector('.message').innerText += ' Please Wait for other player to join';
    setInterval(isSlotFilled, 1000);
  }
};

const register = () => {
  const form = document.querySelector('form');
  const formData = new FormData(form);
  const formDetails = new URLSearchParams(formData)
  xhrPost('/login', formDetails, checkForSlots);
};
