export function reSetData (state, data) {
  state.stores.splice(0, state.stores.length);
  data.forEach(element => {
    state.stores.push(element);
  });
}
