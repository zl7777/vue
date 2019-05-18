// import { myfn, myAge, myName } from "./src/js/a";
// console.log(myfn()); //
// console.log(myAge); //
// console.log(myName); //laowang




// import { fn, age, name } from "./js/b.js";
import "./css/index.css";
// import "./img/1.jpg";
import "./scss/style.scss";
import "./iconfont/iconfont.css";
import axios from 'axios';
console.log(666)
    // console.log(fn()); //
    // console.log(age); //
    // console.log(name); //
axios.get('/api/list').then((res) => {
    console.log(res.data)
})