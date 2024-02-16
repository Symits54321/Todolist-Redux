import style from './List.module.css';

import { useEffect , useState} from "react";

import { useSelector, useDispatch } from "react-redux";
// import todos actions here
import { todoActions,todoSelector } from "../redux/reducers/todoReducer";


const List = () => {

  const {isLoading,error,todos,formData,updateState} = useSelector(todoSelector);

  const dispatch = useDispatch();


 // give updated todo after deleted data
  const giveUpdatedTodoAfterDeletion = async(id)=>{

    let oldtodos =  todos;
    let updatedTodos = await oldtodos.filter(x => x.id !== id )
          
    return updatedTodos;

}



    // delete todo
    const deletetodos = async (id) => {

            try {

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


        // update todo
       




 const handleupdate=(id,text)=>{

    dispatch(todoActions.setUpdateState(true));
    dispatch(todoActions.updateTitle(text));
    dispatch(todoActions.setID(id));
 
 
 }


 const handledelete=(id)=>{
 
    deletetodos(id);
 }





            return(
                <div className={style.listcontainer}>

                   

                    <ul>
                       

                        {todos.map((todo,index)=>(

                            <li  key={index} id={todo.id} className={style.listitem}>  

                                <p className={style.listtitle}>{todo.title}</p>

                                    <div className={style.listbtncontainer}>

                                    <button className={style.liststatus}
                                        onClick={()=> handleupdate(todo.id,todo.title)}
                                        >status</button>

                                        <button className={style.listUpdate}
                                        onClick={()=> handleupdate(todo.id,todo.title)}
                                        >Update</button>

                                        <button className={style.listdelete}
                                        onClick={()=> handledelete(todo.id)} >Delete</button>             
                                

                                    </div>

                            </li>

                          

                        ))}

                    </ul>
                 
              </div>
                

            );

};

  export default List;
