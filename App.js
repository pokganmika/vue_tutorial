new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
    //-----
    // name: 'jack',
    // characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
    // ninjas:[
    //   {name: 'Ryu', age: 25},
    //   {name: 'Yoshi', age: 35},
    //   {name: 'Ken', age: 55}
    // ]
    //-----
    // error: false,
    // success: false
    //-----
    // available: true,
    // nearby: false
    //-----
    // age: 20,
    // a: 0,
    // b: 0
    //-----
    // name: '',
    // age: ''
    //-----
    // age: 25,
    // x: 0,
    // y: 0
    //-----
    // name: 'Shaun',
    // job: 'Ninja',
    // website: 'http://www.thenetninja.co.uk',
    // websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods: {
    punch: function () { 
      console.log(this.health);
      this.health -= 10;
      if (this.health <= 0) { 
        this.ended = true;
      }
    },
    restart: function () { 
      console.log(this.health);
      this.health = 100;
      this.ended = false;
    }
    //-----
    // addToA: function () {
    //   console.log('addToA');
    //   return this.a + this.age;
    // },
    // addToB: function () {
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
    //-----
    // logName: function () { 
    //   console.log("you entered your name");
    // },
    // logAge: function () { 
    //   console.log("you entered your age"); 
    // }
    //-----
    // add: function (inc) { 
    //   this.age+=inc;
    // },
    // subtract: function (dec) { 
    //   this.age-=dec;
    // },
    // updateXY: function (event) { 
    //   // console.log(event);
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // click: function () { 
    //   alert("You Clicked Me");
    // }
    // add: function () { 
    //   this.age++;
    // },
    // subtract: function () { 
    //   this.age--;
    // }
    // greet: function (time) { 
    //   return `Good ${time} ${this.name}`;
    // }
  },
  computed: {
    //-----
    // compClasses: function () {
    //   // Example 2
    //   return {
    //     available: this.available,
    //     nearby: this.nearby
    //   }
    // }
    //-----
    // addToA: function () {
    //   console.log('addToA');
    //   return this.a + this.age;
    // },
    // addToB: function () {
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
  }
});
