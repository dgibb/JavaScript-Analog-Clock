

export var clock={

secDegrees:0,
minDegrees:0,
hourDegrees:0,
secondHand:0,
minuteHand:0,
hourHand:0,
bg:0,

setTime:function(){

clock.secondHand=document.querySelector('.second');
clock.minuteHand=document.querySelector('.min');
clock.hourHand=document.querySelector('.hour');
clock.bg=document.querySelector('.clock-bg');

var startTime = new Date()

var seconds = startTime.getSeconds();
clock.secDegrees = seconds*6+90;
clock.secondHand.style.transform=`rotate(${clock.secDegrees}deg)`;

var minutes = startTime.getMinutes();
clock.minDegrees= (minutes*6+90)+(seconds/10);
clock.minuteHand.style.transform=`rotate(${clock.minDegrees}deg)`;

var hours = startTime.getHours();
clock.hourDegrees= (hours*30+90)+ (minutes/2);
clock.hourHand.style.transform=`rotate(${clock.hourDegrees}deg)`;
},

updateTime: function(){
clock.secDegrees+=6;
clock.minDegrees+=0.1;
clock.hourDegrees+=(.1/12);
clock.secondHand.style.transform=`rotate(${clock.secDegrees}deg)`;
clock.minuteHand.style.transform=`rotate(${clock.minDegrees}deg)`;
clock.hourHand.style.transform=`rotate(${clock.hourDegrees}deg)`;
},

bench:function(){
  clock.bg.style.backgroundImage='url("/Client/img/bench.jpg")';
},

street:function(){
  clock.bg.style.backgroundImage='url("/Client/img/street.jpg")';
},

city:function(){
  clock.bg.style.backgroundImage="url('/Client/img/city.jpg')";
},

bridge:function(){
  clock.bg.style.backgroundImage="url('/Client/img/bridge.jpg')";
},

wheat:function(){
  clock.bg.style.backgroundImage="url('/Client/img/wheat.jpg')";
},

};
