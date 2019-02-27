new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0
    // name: 'Shaun',
    // job: 'Ninja',
    // website: 'http://www.thenetninja.co.uk',
    // websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Website</a>'
  },
  methods: {
    add: function (inc) { 
      this.age+=inc;
    },
    subtract: function (dec) { 
      this.age-=dec;
    },
    updateXY: function (event) { 
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
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
