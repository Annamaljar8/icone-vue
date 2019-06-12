<template>
    <div>

        <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="workshop"></router-view>
        <router-view name="icons"></router-view>
        <router-view name="contact"></router-view>

   </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style>

:root{
  --smokyBlack:#220901;
  --frenchPuce:#621708;
  --rufous:#941b0c;
  --rust: #bc3908;
  --brightYellow:#f6aa1c;
}
*{
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
  color: #621708;
  font-family: 'Philosopher', sans-serif;
  text-align: center;
  background: url('./assets/bodyBcg.jpg');
  background-color: rgba(216, 200, 173, 0.87);
  background-blend-mode: soft-light;
}
p{
  color: var(--rufous);
  text-align: start;
  text-indent: 20px;
  font-size: larger;
  list-style: none;
}
ul{
  color: var(--rufous);
  font-size: larger;
  list-style: none;
  text-align: start;
}
.text{
  color: var(--rufous);
  text-align: center;
  font-size: larger;

}

.leftimg {
    float:left;
    margin: 7px 7px 7px 0;
   }
.rightimg  {
    float: right;
    margin: 7px 0 7px 7px;
  }
.icon {
  margin-right: 2%;
  color: var(--smokyBlack);
}
hr {
  border: 2px solid #ffffff;
  width: 215px;
  margin-left: 42%;
  margin-top: 0;
}
@media (max-width: 575.98px){
hr {
margin-left: 35%;
margin-top: 0;
width: 100px;
}}
 h1{
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5em;
}
@media (max-width: 575.98px){
  h1{
   font-size: 1.5em;
   font-weight: bold;
   text-transform: uppercase;
   padding: 0.5em;
 }
}
</style>
