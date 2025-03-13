(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function C(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let b;const v=new Uint8Array(16);function S(){if(!b){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");b=crypto.getRandomValues.bind(crypto)}return b(v)}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function P(e,t,a){var o;if(T.randomUUID&&!e)return T.randomUUID();e=e||{};const d=e.random??((o=e.rng)==null?void 0:o.call(e))??S();if(d.length<16)throw new Error("Random bytes length must be >= 16");return d[6]=d[6]&15|64,d[8]=d[8]&63|128,C(d)}class h{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},s={todos:[new h("Piedra del alma"),new h("Piedra del infinito"),new h("Piedra del tiempo"),new h("Piedra del infierno"),new h("Piedra de la oscuridad ")],filter:c.All},A=()=>{L(),console.log("InitStore")},L=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));s.todos=e,s.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(s))},I=(e=c.All)=>{switch(e){case c.All:return[...s.todos];case c.Completed:return s.todos.filter(t=>t.done===!0);case c.Pending:return s.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is no valid.`)}},U=e=>{if(!e)throw new Error("Description is rquired");s.todos.push(new h(e)),f()},k=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},D=e=>{s.todos=s.todos.filter(t=>t.id!==e),f()},O=()=>{s.todos=s.todos.filter(e=>!e.done),f()},q=(e=c.All)=>{s.filter=e,f()},x=()=>s.filter;function F(){s.count++,console.log(s.count)}const i={addTodo:U,deleteCompleted:O,deleteTodo:D,getCurrentFilter:x,getTodos:I,initStore:A,loadStore:L,setFilter:q,toggleTodo:k,increment:F},M=`<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
          
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <!-- selected -->
                <a class=" filtro" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filtro" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filtro" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`,N=e=>{if(!e)throw new Error("A TODO object is required");const{done:t,description:a,id:d}=e,o=`
         <div class="view">
             <input class="toggle" type="checkbox" checked ${t?"checked":""}>
             <label>${e.description}</label>
             <button class="destroy"></button>
         </div>
             <input class="edit" value="Create a TodoMVC template">
     `,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let w;const H=e=>{if(w||(w=document.querySelector(e)),!w)throw new Error(`Element ${e} no found`);w.innerHTML=i.getTodos(c.Pending).length};let g;const R=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} no found`);g.innerHTML="",t.forEach(a=>{g.append(N(a))})},m={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompletedButton:".clear-completed",TodoFilters:".filtro",PendingCountLabel:"#pending-count"},V=e=>{const t=()=>{const l=i.getTodos(i.getCurrentFilter());R(m.TodoList,l),a()},a=()=>{H(m.PendingCountLabel)};(()=>{const l=document.createElement("div");l.innerHTML=M,document.querySelector(e).append(l),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.ClearCompletedButton),u=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(i.addTodo(l.target.value),t(),l.target.value="")}),o.addEventListener("click",l=>{const p=l.target.closest("[data-id]");i.toggleTodo(p.getAttribute("data-id")),t()}),o.addEventListener("click",l=>{const p=l.target.className==="destroy",y=l.target.closest("[data-id]");!y||!p||(i.deleteTodo(y.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{i.deleteCompleted(),t()}),u.forEach(l=>{l.addEventListener("click",p=>{switch(u.forEach(y=>y.classList.remove("selected")),p.target.classList.add("selected"),p.target.text){case"Todos":i.setFilter(c.All);break;case"Pendientes":i.setFilter(c.Pending);break;case"Completados":i.setFilter(c.Completed);break}t()})})};i.initStore();V("#app");
