const btnTrackMe = document.querySelector('button');
const output = document.querySelector('p');

const execute = (duration) => {
  setTimeout(() => {
    console.log('Task executed');
  }, duration);
};

const setTimer = (duration) => {
  setTimeout(() => {
    console.log('Task done');
    execute(4000);
  }, duration);
};

const getPosition = () => {
  navigator.geolocation.getCurrentPosition(
    (success) => {
      console.log(success);
      setTimer(3000);
    },
    (error) => console.log(error)
  );
};

const trackUserHandler = () => {
  getPosition();
};

btnTrackMe.addEventListener('click', trackUserHandler);

/* let counter = 0;

for (let ind = 0; ind < 100000000000; ind++) {
  counter += 1;
}

console.log('counter', counter); */
