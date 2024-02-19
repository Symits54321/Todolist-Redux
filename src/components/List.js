import style from './List.module.css';

import { useEffect , useState} from "react";

import { useSelector, useDispatch } from "react-redux";
// import todos actions here
import { todoActions,todoSelector } from "../redux/reducers/todoReducer";
// import fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen, faCheck , faSquareXmark
 } from '@fortawesome/free-solid-svg-icons';


const List = () => {

  const {isLoading,error,todos,formData,formDataToUpdate,updateState} = useSelector(todoSelector);

  const dispatch = useDispatch();


 // give updated todo after deleted data (used in deletetodos function)
  const giveUpdatedTodoAfterDeletion = async(id)=>{

    let oldtodos =  todos;
    let updatedTodos = await oldtodos.filter(x => x.id !== id )
          
    return updatedTodos;

}

// give updated todo after toogling completed state  (used in toogletodos function 
//i.e. to provide actual data instead of dummy data)

 const giveUpdatedToggledTodo = async(id) => {

    let oldtodos =  todos;
    let updatedTodos = await oldtodos.map((x) =>{
      
         if( x.id == id){

             return {
                id:id,
                title:x.title,
                completed:!x.completed,
                userId: 1,
            }
          
         
        }else{
          return x ;
        }

    });
          
    return updatedTodos;

 }   
 
 
 
//  API Calls 

// delete todo Api call + function
const deletetodos = async (id) => {

        try {
                // dummy API call to delete (for hands-On practice)
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                    method: 'DELETE',
                    });

                const dummydata = await response.json();


                const actdata = await giveUpdatedTodoAfterDeletion(id);

                // dispatch fetch success action here
                await dispatch(todoActions.fetchSuccess('Succesfully deleted the todo :-'+id));
                await dispatch(todoActions.updateTodo(actdata));

                
                


        } catch (e) {

                // dispatch fetch error action here
                await dispatch(todoActions.fetchError(e));

        }
    };


// toggletodo Api call + function to toogle completed state
const  toggletodos = async (id) => {

    try {
            // dummy api call to get only ok response 
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
            // actual data that would have been got from API
            const actdata = await giveUpdatedToggledTodo(id);

            // dispatch fetch success action here
            await dispatch(todoActions.fetchSuccess('Succesfully updated the data'));
            await dispatch(todoActions.updateTodo(actdata));


    } catch (e) {
            // dispatch fetch error action here
            await dispatch(todoActions.fetchError('Error while toogling completed state'+e));

    }


    dispatch(todoActions.setUpdateState(false));


};
       



// to handle when update btn is clicked
 const handleupdate=(id,text)=>{
    
    // change the submit btn state from 'Add' to 'Update'
    dispatch(todoActions.setUpdateState(true));
    // sends the text data to be updated.
    dispatch(todoActions.updateTitle(text));
    // sets the 'id' field in redux which will be fetched further by update btn to update.   
    dispatch(todoActions.setID(id));
 
 
 }

// to handle when delete btn is clicked
 const handledelete=(id)=>{
 
    deletetodos(id);
 }

// to handle when toogle btn is clicked
 const handletoggletodo=(id)=>{
   // to toogle the completed status
    toggletodos(id);
 }




            return(
                <div className={style.listcontainer}>

                    <ul>
                       
                        {todos.map((todo,index)=>(

                            <li  key={index} id={todo.id} className={style.listitem}>  

                                <p className={style.listtitle}>{todo.title}</p>

                                    <div className={style.listbtncontainer}>
                                        {/* Toggle status  */}
                                        <button className={style.liststatus}
                                        onClick={()=> handletoggletodo(todo.id)}
                                        >{todo.completed ? <FontAwesomeIcon icon={faCheck} />
                                         : <FontAwesomeIcon icon={faSquareXmark} />  }</button>
                                        {/* Update  */}
                                        <button className={style.listUpdate}
                                        onClick={()=> handleupdate(todo.id,todo.title)}
                                        ><FontAwesomeIcon icon={faPen} /> </button>
                                        {/* Delete  */}
                                        <button className={style.listdelete}
                                        onClick={()=> handledelete(todo.id)} >
                                        <FontAwesomeIcon icon={faTrash} /></button>             
                                

                                    </div>

                            </li>

                          

                        ))}

                    </ul>
                 
              </div>
                

            );

};

  export default List;
