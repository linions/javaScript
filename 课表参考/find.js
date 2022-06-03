var app = new Vue({
  el: '#app',
  data: {
    department: '',
    classNumber:'',
    selected: '2019',
    classOder:[0,1,2,3,4,5,6,7,8,9],
    weekOrder: '1',
    weeksChinese: ['周一','周二','周三','周四','周五','周六','周日'],
    weeks: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    // 下面数组都给赋初值了，因为渲染的时候{{}}里面的值找不到，就会报错，只好给个为空的初值
    Monday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Tuesday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Wednesday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Thursday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Friday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Saturday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}],
    Sunday: [{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "3", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []},{"course_name": "", "class_room": "", "section": "2", "teacher": " ", "week": "",  "week_array": []}]
  },
  methods: {
    analyze() {
      console.log("我执行了");
      var _this = this;
      //这个步骤真的异常关键
      axios.get(`./json_modify/${this.selected}${this.department}${this.classNumber}班.json`)
      .then(function(res) {
        // 直接给data里面的数组赋值，总是会报错，且找不到原因，只好暂时先用看起来就麻烦的方法
        //这种方法还有个弊端，就是当Monday数组里面不止6个对象，
        //即一个课程不止一个对象或两个课程在同一时段，不同周次时
        //就只能赋值前六个，这样有些课就不会显示出来，为此我还给数组多赋了几个对象
        for(let i=0;i<res.data.Monday.length;i++){
          _this.Monday.splice(i,1,res.data.Monday[i]);
        };
        for(let i=0;i<res.data.Tuesday.length;i++){
          _this.Tuesday.splice(i,1,res.data.Tuesday[i]);
        };
        for(let i=0;i<res.data.Wednesday.length;i++){
          _this.Wednesday.splice(i,1,res.data.Wednesday[i]);
        };
        for(let i=0;i<res.data.Thursday.length;i++){
          _this.Thursday.splice(i,1,res.data.Thursday[i]);
        };
        for(let i=0;i<res.data.Friday.length;i++){
          _this.Friday.splice(i,1,res.data.Friday[i]);
        };
        for(let i=0;i<res.data.Saturday.length;i++){
          _this.Saturday.splice(i,1,res.data.Saturday[i]);
        };
        for(let i=0;i<res.data.Sunday.length;i++){
          _this.Sunday.splice(i,1,res.data.Sunday[i]);
        };
         console.log(_this.Monday[1].section);
        let arrayindex = _this.Monday.find(item => item.section == 3);
         console.log(arrayindex);
      })
      .catch(function(err) {
        console.log("对不起，我错了");
      })
    },
    //Monday or Tuesday....数组里面的对象周次以及第几大节都符合时就显示
    isshow (week,index1,number) {
      if(week[index1].section == number&&week[index1].week_array.indexOf(`${this.weekOrder}`)>=0)
      return true;
    },
    //双击修改课程，目前只会这种用prompt弹窗获取用户数据的方式
    // modifty(weekday,index,section){
    //   let classname  = prompt("你要将此课程修改为");
    //   let site = prompt("你要将此课程的上课地点修改为");
    //   let weekarray = prompt("请将课程周次用阿拉伯数字输入(使用空格隔开)");
    //   //这里输入的周次不用转数组可还行呢！弄清楚记好笔记
    //   //另外对象的value值时变量也弄了好久，反单引号和&{}配合就可以
    //   weekday.splice(index,1,{'course_name':`${classname}`,'class_room':`${site}`,'section':`${section}`,'week_array':`${weekarray}`});
    // },
    // //和修改课程差不多，这里this的属性是个变量的话用[]哦
    // addclass(){
    //   let addweek = prompt("您要在哪些周次增加课程(请输入阿拉伯数字输入，空格隔开)");
    //   let addday = prompt("您要在周几增加该课程");
    //   //console.log(this[addday]);
    //   let addclassname = prompt("您要增加课程的课程名");
    //   let addsection = prompt("您要增加课程是第几大节(请输入阿拉伯数字)");
    //   let addclassroom = prompt("您要增加课程的上课地点为");
    //   this[addday].splice(0,0,{"course_name":`${addclassname}`,"class_room":`${addclassroom}`,"section":`${addsection}`,"week_array":addweek})
    // },
    //周次增加
    increase() {
      if(this.weekOrder < 20){
        this.weekOrder++;
      }
    },
    //周次减少
    decrease() {
      if(this.weekOrder > 2){
        this.weekOrder--;
      }
    }
  }

})