<template>
  <div class="marvel-list">
    <ul>            
      <li v-for="item in list" :item="item" :key="item.id"><div class="flip"><figure class="front"><img :src="item.thumbnail.path+'/portrait_incredible.jpg'"><figcaption>{{item.name}}</figcaption></figure><div class="back">{{item.description}}</div></div></li>        
    </ul>
  </div>
</template>

<script>
/* eslint-disable */ 


export default {
  name: 'MarvelList',
  props: ['list']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marvel-list {
  
}
* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}
ul {
  padding: 0;
  list-style: none;
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;  
  width:100vw;  
  justify-content:space-evenly;
  align-items: center; 
}
li {     
  perspective: 1000px;  
  font-size: 25px; 
  margin:20px 0px;
}
li img{
  width:100%;
  display: block;
  box-shadow: 0px 0px 23px 2px rgba(0,0,0,0.75); 
  object-fit:cover; 
  height: 100%;
}
li figure{  
  width:100%;    
}
li figcaption{
  color:white;   
  position: absolute;
  bottom: 10px;
  width:100%;
  text-align: center;
  background-color: rgba(128, 128, 128, 0.7);
}
.flip{
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
}
.front, .back {
	backface-visibility: hidden;
	position: absolute;
	top: 0;
	left: 0;  
}
.front {
	z-index: 2;	
	transform: rotateY(0deg);
}
.back {
	transform: rotateY(180deg);
  padding:30px;  
  font-size: 15px;
  text-align: justify;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.8); 
  color:white;
}
li:hover .flip{
		transform: rotateY(180deg);
}
li, .front, .back {
	width: 315px;
	height: 470px;
}
</style>
