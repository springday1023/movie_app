
import {useState, useEffect } from 'react';



function App() {
  const [todo, setTodo] = useState(""); 
  const [todolist, setTodolist] = useState([]);
  
  // 1. input value 가져와 뿌려줌
  const onChange = (event) => {
    setTodo(event.target.value);
  }

  // 2. submit 버튼 클릭시 리스트 array에 추가
  const onSubmit = (event) => {
    /// 2-1) 새로고침 x
    event.preventDefault();

    /// 2-2) todo가 비어있을 땐 함수 실행 x
    if(todo === "") {
      return;
    }

    /// 2-3) array에 리스트 추가
    /// ...currentArray : 배열의 요소만 가져와서 뿌려줌.
    setTodolist(currentArray => [todo, ...currentArray])
    
    /// 2-4) input value 값은 초기화
    setTodo("");
  }

  

  return (
    <div>
      <h1>My TodoList <small>({todolist.length})</small></h1>
      <form onSubmit={onSubmit}>
        <input 
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do" />
        <button>Add to list</button>
      </form>

      <hr />
      <div className="result">
        {/* // 3. map 
            /// map : array에 있는 아이템을 내가 원하는 걸로 바꿔준다. */}
        {todolist.length === 0 ? "" : 
          <ul>
            {todolist.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
