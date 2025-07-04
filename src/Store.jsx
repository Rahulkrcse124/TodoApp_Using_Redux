import { createStore } from "redux";

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

const initialState = {
  task: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case DELETE_TASK: {
      const updatedTask = state.task.filter((curTask, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        task: updatedTask
      };
    }

    default:
      return state;
  }
};



// step2: create a redux store using the reducer
export const store = createStore(taskReducer);
console.log(store);





// step 3 : get initial state value
console.log("inital state:", store.getState());


// step 5 action creaters
export const addTask = (data)=> {
  return {type : ADD_TASK, payload : data};
}


// step4: dispatch an action to add a task
store.dispatch({type:ADD_TASK, payload:"Mango"});
console.log("updated inital state: ", store.getState());




// add new task usnig the action creater
store.dispatch(addTask("grapes"));
console.log("new task added: ", store.getState());


store.dispatch(addTask("Banana"));
store.dispatch(addTask("computer"));
store.dispatch(addTask("iphone"));
store.dispatch(addTask("android"));
store.dispatch(addTask("window"));
console.log(" all task: ", store.getState());



// delete task 
store.dispatch({type:DELETE_TASK, payload:1});
console.log("deleted state:", store.getState());

export const deleteTask = (id)=> { // id means here represent the index of array
  return{type: DELETE_TASK, payload:id}
}

store.dispatch(deleteTask(4));
console.log("after deleted 4 index value:", store.getState());


