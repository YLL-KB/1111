import { createElement , useState } from 'rax';

import { history } from 'rax-app'

function User() {
  let [count, setCount]= useState(0);
  return (
    <div>
      <h3>User</h3>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
          <button onClick={()=>history.push('/')}>点击跳转</button>
    </div>
  );
}

export default User;
