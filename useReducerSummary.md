## useState() vs useReducer()

### useState:

- The main state managment 'tool'
- Great for independent pieces of state/data
- Great if state updates are easy and limited to a few kinds of updates

### useReducer:

- Great if you need more 'power'
- Should be considered if you have related pieces of state/data
- Can be helpful if you have more complex state updates

## Using useReducer()

- Add a reducer function wich takes state and action as parameters. This function manages different dispatch actions and returns new state snapshot.
  - reducerFunction = (state, action) => return state;
- Use reducer returns an array with an actual state and a dispatch function.
  - const [state, dispatch] = useReducer(reducerFunction, initialState);
- Then everywhere we need to manage states we call the dispatch() function with the desired type of action.
