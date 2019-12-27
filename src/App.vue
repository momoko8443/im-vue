<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html body{
  height: 100%;
}
.hbox{
    display: flex;
}
.vbox{
    display: flex;
    flex-direction: column;
}
.item{
    color: white;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

}
.item:hover{
    background-color:#42b983;
}
.item:active{
    background-color:#42b983;
}
.active{
    background-color:#42b983; 
}
.hello{
    color: coral;
}
.talkTo{
    color: gray;
    text-align: left;
    padding-left: 10px;
    background: bisque;
}
.welcome{
  color: grep;
  padding:20px;
}
</style>
