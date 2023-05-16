// A-00. toDo List를 입력할 Form 생성하기
// A-01. List를 입력할 input과 list를 넣어줄 공간의 변수 정의
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// D-02. 입력받아 생성된 list를 [] array에 담아주기 위한 변수를 하나 생성한다. input태그에 입력받을 때마다 array에 값을 넣어줘야 하기 때문에 handleToDoSubmit 기능에서 추가로 정의한다.
// const toDos = [];

// E-00. TodoList 업데이트 시 기존 데이터 보존하여 추가하기
// E-01. 시작될 때 array가 비어있기 때문에 새로운 항목을 추가하면 기존 TodoList는 사라진다.
// E-02. 기존 TodoList 항목을 함께 보존하여 값을 update를 해야하므로 변수를 let으로 설정한 후 saveToDos관련 if문에 문장을 추가한다.
let toDos = [];

// D-00. 생성된 list 저장하기
function saveToDos() {
    // D-01. 입력한 list를 localStorage에 저장하고, 후에 새로고침을 해도 localStorage에서 값을 가져와 화면에 그려주기

    // D-04. toDos Array의 내용을 string("[a,b,c,d]")에서 object([a, b, c, d])로 변환하여 localStorage에 넣는다. 이 기능은 입력받은 동시에 저장하여 화면에 그려주어야하므로 handleToDoSubmit에서 실행한다.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // JSON.stringify() : array를 string으로 변환 <-> JSON.parse() string을 array/object로 변환
}

// C-00.생성된 list 삭제하기
// C-01. 각각의 항목을 제어하기 위해 event라는 인자값을 전달한다.
function deleteToDo(event) {
    // C-02. 삭제할 리스트를 선택해야하기 때문에, event target 항목의 부모요소를 list로 가정하고,
    const list = event.target.parentElement;

    // C-03. 버튼클릭시 list를 삭제한다. 이 기능은 입력되어 list가 생성되는 동시에 기능도 함께 만들어져야하기 때문에 paintToDo기능에서 함수를 실행시킨다.
    list.remove();

    // F-11. array에서 item을 각각 지우려면 클릭된 삭제 버튼을 포함하는 list의 id를 찾아야 한다. 방법은 filter합수를 이용하여 지우고 싶은 item을 제외하고 새 array를 만드는 것. 지우고 싶은 item을 filter를 활용하여 제외한다.
    // F-12. toDo의 id가 event target으로 클릭된 list의 id를 제외한 나머지를 새로운 array로 만든다.
    // toDos = toDos.filter((toDo) => toDo.id !== list.id);
    // F-13. id는 숫자값으로 인식이 되고, 현재 typeof list.id는 string으로 인식이 되고 있으므로 !==가 true로 filter는 array를 모두 반환하고 있었다.
    // console.log(typeof list.id)
    // F-14. 따라서 string을 정수로 변환하는 parseInt를 사용하여 조건문을 완성시켜준다.
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(list.id));
    // F-15. 삭제된 arr를 list로 저장하여 갱신하기 위해 saveToDos를 한번 더 실행시킨다.
    saveToDos();
}

// B-00. input값을 입력받아 화면에 그려줄 List 생성하기
// B-01. 입력된 인자 값을(newTodo)를 받아 handleToDoSubmit 기능에서 실행한다.
function paintToDo(newTodo) {
    // B-03. 입력받을 text를 그려줄 부모 li태그를 생성한다.
    const list = document.createElement("li");
    // F-10. {object, object}로 출력되는 것을 방지하기 위해, id의 출력 위치를 지정해준 후 deleteToDo에서 클릭된 id외에 object를 새로운 array로 재정의 해준다.
    list.id = newTodo.id;

    // B-04. 그려진 li에 텍스트를 포함할 span태그도 함께 생성한다. 
    const span = document.createElement("span");
    // B-05. appendChild를 사용하여 li태그에 span태그를 자식으로 포함할 수 있도록 하고,
    list.appendChild(span);
    // B-06. input을 통해 입력받은 텍스트는 span태그 안에 텍스트로 삽입한다.
    // span.innerText = newTodo;

    // F-09.{object, object}로 출력되는 것을 방지하기 위해, text의 출력 위치를 지정해준다.
    span.innerText = newTodo.text;

    // B-07. list를 삭제할 수 있는 버튼을 포함할 button태그도 함께 생성한다.
    const button = document.createElement("button");
    // B-08. appendChild를 사용하여 li태그에 button태그를 자식으로 포함할 수 있도록 하고,
    list.appendChild(button);
    // B-09. 삭제버튼을 나타내는 "X"아이콘을 삽입한다.
    button.innerText = "X";
    // B-10. 입력받은 text와 함께 삭제할 수 있는 버튼이 합쳐져 li가 되어 toDoList라는 ul태그에 자식으로 포함될 수 있도록 한다.
    toDoList.appendChild(list);

    // C-04. button을 클릭을 하면 deleteTodo가 실행되면서 list를 지워준다.
    button.addEventListener("click", deleteToDo);
}

// F-00. TodoList 항목 삭제 시 List에 반영시키기
// F-01. 어떤 항목이 삭제될 것인지 모른다. -> 랜덤으로 ID부여하기
// F-02. 단순한 text대신 object로 생성하여 {text:"", id:} text와 id를 각각 관리해야한다. 
// F-03. 랜덤숫자로 ID를 부여하게되면 언젠가는 같은 숫자가 나올테니, 밀리초(0.001)를 주는 함수 Date.now()를 활용하여 랜덤ID를 부여해야 하는데, handleToDoSubmit function부분에 문장을 추가한다.

// A-02. input에 텍스트 입력 시 value값을 받아 list에 삽입한다.
function handleToDoSubmit(event) {
    // A-03. input에 입력된 값을 submit되는 것을 막아준다.
    event.preventDefault();
    // A-04. input에 입력된 값을 newTodo라는 새로운 변수에 (복사)저장하고,
    const newTodo = toDoInput.value;
    // A-05. Enter를 눌렀을 때 input의 값을 공란("")으로 비워준다. 이때 A-04의 변수에 복사하여 저장했기 때문에 재정의하더라도 값이 사라지는 것은 아니다.
    toDoInput.value = "";

    // F-04. object로 list를 관리하기 위해 newTodoObj라는 변수를 정의한다.
    const newTodoObj = {
        // F-06. 새로 입력되는 값의 text를 newTodo로 정의하고,
        text: newTodo,
        // F-06. 밀리초(0.001)를 주는 함수 Date.now()를 활용하여 랜덤ID를 생성하여 대입한다.
        id: Date.now(),
    }
    // D-03. input에 텍스트를 입력받아 list가 만들어지면 toDos array를 가지고와서 push한다. (localStorage에 저장)
    // toDos.push(newTodo);

    // F-07. 매번 사용자가 적어둔 text를 push하는데, {id+text}로 재 정의한 newTodoObj를 toDos array에 push한다.
    toDos.push(newTodoObj);

    // B-02. PaintTodo를 통해 입력받은 인자 값을 전달 받아 실행 시킨다.
    // paintToDo(newTodo);

    // F-08. array에 push한 object를 각 list항목에 직접적으로 대입하려면, paintToDo를 통해 그려지는 element에 각각 id와 텍스트가 매칭되어야 한다. 이를 위해 전달하는 인자값을 text가 아닌 object로 바꿔준다. 이 명령문만 사용할 경우, {object, object}로 출력되기 때문에 paintToDo function에서 각 element에 text와 id 위치를 지정해준다.
    paintToDo(newTodoObj);

    // D-05. 입력받은 내용을 localStorage에서 string으로 변경하여 저장한다.
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

// D-06. 저장한 toDo를 불러오기위해 savedToDos를 변수로 정의해준다. 이때, todos라는 배열은 계속 쓰이고 있기 때문에 TODOS_KEY라는 변수로 대체하여 사용한다.
const savedToDos = localStorage.getItem(TODOS_KEY);
// D-07. 저장한 toDo를 불러오되, localStorage에 String으로 저장된 값이 있다면,
if (savedToDos !== null) {
    // D-08. JSON.parse를 이용하여 array/object 값으로 변환하여 변수에 저장을 하고
    const parsedToDos = JSON.parse(savedToDos);

    // E-03. toDos는 빈 array로 정의 되어 있었다. parsedToDos로 저장된 값을 array에 재대입하여 전에 있던 toDo를 복원해준다.
    // toDos = parsedToDos;
    
    
    toDos = parsedToDos;

    // D-09. parsedToDos로 저장된 array는 각각의 item에 대해 paintToDo(function)으로 실행되어 list에 적용한다.
    parsedToDos.forEach(paintToDo);
    // D-10번 명령문 처럼 arrow function으로 쓰면 아래의 명령문을 보다 간결하게 작성할 수 있다.
    // 01) parsedToDos.forEach((item) => paintToDo(item));
    // 02) function paintToDo(item){function 실행문}
    // parsedTodos.forEach(paintToDo(item));

}

// * filter : 특정 값을 제외할 수 있다. 
// * filter 함수는 배열 item 개수(n)에 따라 n번 실행된다. 새로운 array에서도 해당 object를 유지하고 싶다면, filter함수는 반드시 true를 리턴해야 한다. 만일 false를 리턴하는 값이 있다면 그 값은 array에서 제외된다. 
// * (ex 1) const arr = [1234, 5454, 223, 112, 45, 6775, 334]
// * (ex 1) function sexyFunction(potato){ return potato <= 1000}
// * (ex 1) arr.filter(sexyFunction) 
// * (ex 1) 결과 : sexyFunction filter로 걸러진 arr는 1000 이하의 potato(item)가 true이므로 [223, 112, 45, 334]만 반환된다.

// * (ex 2) const arr = [1, 2, 3, 4]
// * (ex 2) arr.filter(item => item > 2)
// * (ex 2) 결과 : [3, 4]
// * (ex 2) const newArr = arr.filter(item => item > 2)
// * (ex 2) 결과 : arr : [1, 2, 3, 4] / newArr : [3, 4]

