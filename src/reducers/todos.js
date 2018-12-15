let next = 0
const todos = (state = [], action)=>{
     switch(action.type){
         case 'ADD_TODO' : 
         return [
             ...state, {
                 id: next++,
                 text: action.text,
                 completed: false
             }
         ]
         case 'TOGGLE_TODO' :  
         return state.map(todo =>{
             console.log('clicked')
             todo.id === action.id?
             {...todo, completed: !todo.completed}: todo
         });
         default:
         return state
     }
}
export default todos