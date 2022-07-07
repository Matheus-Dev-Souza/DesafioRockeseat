import Reactotron from 'np';

if (__DEV__) {
  const tron = Reactotron
    .configure()
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
