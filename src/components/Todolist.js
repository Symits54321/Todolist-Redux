import { useEffect , useState} from "react";
import style from './Todolist.module.css';

import { useSelector, useDispatch } from "react-redux";
// import todos actions here
import { todoActions,todoSelector } from "../redux/reducers/todoReducer";
import List from "./List";




const Todolist = () => {

  const {isLoading,error,todos,formData,formDataToUpdate,updateState,id,fetchAgain} = useSelector(todoSelector);
 
  const dispatch = useDispatch();






        // get todo api call
        const gettodos = async () => {

            try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos"
            );
            const data = await response.json();

            // dispatch fetch success action here
            await dispatch(todoActions.fetchSuccess('Succesfully fetched todos'));
            await dispatch(todoActions.firstfetch(data));

            } catch (e) {
            // dispatch fetch error action here
            await dispatch(todoActions.fetchError('Error while fetching'+e));

            }
        };


       const setrandomindex = async() => {

        const randomIndex = await Math.floor(Math.random() * (todos.length + 3));

        await dispatch(todoActions.setID(randomIndex));

       }
      




        // add todo
        const addtodos = async (e) => {

            e.preventDefault();

            try {

                setrandomindex();

                const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                    method: 'POST',
                    body: JSON.stringify(formData),
                    headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    },
                })

                const dummydata = await response.json();
               
            
              

                // dispatch fetch success action here
                await dispatch(todoActions.fetchSuccess('Succesfully added data'));
               
                
                 await  dispatch(todoActions.addData(formDataToUpdate));
              
              
                  
                              


            } catch (e) {

                // dispatch fetch error action here
                await dispatch(todoActions.fetchError(e));

            }
        };





        // to get updated arrays of todo
        const giveupdatedtodo = async()=>{
          let oldtodos =  todos;
      
          let updatedTodos = 
          oldtodos.map((x) => {
              if(x.id == id ){
                  return formDataToUpdate
                  
              }else{
                  return x;
                 
              }
          });
      
          return updatedTodos;
      
      }


        
        // update todos
        const updatetodos = async (e) => {

          e.preventDefault();

          try {
                  // dummy response 
                  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                      method: 'PUT',
                      body: JSON.stringify({
                        id:1,
                        title: 'foo',
                        completed: false,
                        userId: 1,
                    }),
                      headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                      },
                      })
                     

                  const dummydata = await response.json();
                  const actdata = await giveupdatedtodo();

                  // dispatch fetch success action here
                  await dispatch(todoActions.fetchSuccess('Succesfully updated the data'));
                  await dispatch(todoActions.updateTodo(actdata));

                  setrandomindex();


                 //








          } catch (e) {
                  // dispatch fetch error action here
                  await dispatch(todoActions.fetchError('Error while updating'+e));

          }


          dispatch(todoActions.setUpdateState(false));


      };

      






  useEffect(() => {
    // dispatch fetch start action here
    dispatch(todoActions.fetchStart())
    
      gettodos();
    
    // execute the gettodos function here

  }, [fetchAgain]);





  return (
    <div className={style.todolist}>
      <h3>Todolist</h3>

      <form onSubmit={!updateState ? addtodos : updatetodos}>

        <input className="input" onChange={(e)=>{dispatch(todoActions.updateTitle(e.target.value))}} value={formData.title}/>
        <button type="submit">{!updateState ? "Add" : "Update"}</button>

      </form>

      <List />
    </div>
  );
};



export default Todolist;


