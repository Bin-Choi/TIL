import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  [1,2,3].map(function(a){
    return '123321'
  })
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React_Blog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목]
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}> 글 수정 </button>
      <div></div>
      <button onClick={()=>{
        let copy = [...글제목]
        copy.sort();
        글제목변경(copy)
      }}>정렬버튼</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=> { 따봉변경(따봉[0]+1) }}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> {
          setModal(!modal)
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return       <div className="list">
          <h4 onClick={()=> {setModal(!modal); setTitle(i)}}>{ 글제목[i] }
          <span onClick={(e)=> { e.stopPropagation(); let copy = [...따봉];
          copy[i] = copy[i]+1;
          따봉변경(copy) }}>👍</span> {따봉[i]}
          </h4>
          <p>2월 17일 발행</p>
          <button onClick={()=>{
            let copy = [...글제목];
            copy.splice(i,1);
            글제목변경(copy)
          }}>삭제</button>
        </div>
        })
      }
      <div>
        <input onChange={(e)=> {입력값변경(e.target.value);}}/>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>글 쓰기</button>
      </div>
      { modal == true ? <Modal title = {title} 글제목 ={글제목} 글제목변경={글제목변경}/> : null }

    </div>
  );
}



function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목]
        copy[0] = '여자 코트 추천'
        props.글제목변경(copy);
      }
      }>글 수정</button>
    </div>
  )
}

export default App;
