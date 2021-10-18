const btnTrackMe = document.querySelector('button');
const output = document.querySelector('p');

const execute = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task executed');
    }, duration);
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Task done');
      resolve();
      // execute(4000);
    }, duration);
  });

  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        // console.log(success);
        const { latitude, longitude } = success.coords;
        resolve({ latitude, longitude });
        // setTimer(3000);
      },
      (error) => {
        console.log(error);
        reject();
      }
    );
  });
  return promise;
};

const trackUserHandler = async () => {
  try {
    const coords = await getPosition();
    console.log('coordenadas', coords);

    await setTimer((Math.random() + 1) * 4000);
    console.log('setTimer1', 'ok');

    await execute((Math.random() + 1) * 4000);
    console.log('setTimer2', 'ok');
  } catch (error) {
    console.log(error);
  }
};

btnTrackMe.addEventListener('click', trackUserHandler);

/* let counter = 0;

for (let ind = 0; ind < 100000000000; ind++) {
  counter += 1;
}

console.log('counter', counter); */
