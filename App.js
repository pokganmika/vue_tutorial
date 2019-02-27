new Vue({
  el: '#vue-app',
  data: {
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
    logName: function () { 
      console.log("you entered your name");
    },
    logAge: function () { 
      console.log("you entered your age"); 
    }
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
  }
});
