export default store => next => action => {
  const {type, ...rest} = action;
  console.group(type);

  console.log(rest);

  console.groupEnd();
  console.group('state');

  console.log(store.getState());

  console.groupEnd();
  return next(action);
};
