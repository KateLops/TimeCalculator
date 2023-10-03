import { ref } from 'vue'
export default {
setup() {

},
data(){
return{
selected:'',
checked1:false,
checked2:false,
checked3:false,
checked4:false,
checked5:false,
checked6:false,
checked7:false,
selected2:'',
Result :0,
time : 0,
Hours : 0,
Minutes : 0,
test : '',
text: 0
}
},

methods:{

    Choose: function(){
        this.Hours = parseInt(this.test.split(':')[0])
        this.Minutes = parseInt(this.test.split(':')[1])
        this.checking()
        if(this.Hours > this.Time)
        {
            alert('Неверный формат времени')
        }
        else
        {
            this.Result = this.Hours + ":" + this.Minutes
        }
        
    },

    checking:function(){
        if(this.Minutes > 59)
        {
           this.Hours += 1
           this.Minutes -= 60 
        }
        if(this.Minutes < 0)
        {
           this.Hours -= 1
           this.Minutes = 59 
        }
        if(this.Hours > this.Time){
            this.Hours = 0
        }
        if(this.Hours < 0 && this.Time == 12){
            this.Hours = 12
        }
        if(this.Hours < 0 && this.Time == 23){
            this.Hours = 23
        }
        if(this.selected2 == 1){
            this.Time = 12
            }
            else if(this.selected2 == 0){
            this.Time = 23
            }
            },



    Count1:function(){
        this.Hours -= 1
        this.checking()
        this.Result = this.Hours + ":" + this.Minutes
            },
    Count:function(){
    this.Hours += 1
    this.checking()
    this.Result = this.Hours + ":" + this.Minutes
        },

        Count1min:function(){
            this.Minutes += 1
            this.checking()
            this.Result = this.Hours + ":" + this.Minutes
                },
                Count10min:function(){
                    this.Minutes += 10
                    this.checking()
                    this.Result = this.Hours + ":" + this.Minutes
                        },
                        Count30min:function(){
                            this.Minutes += 30
                            this.checking()
                            this.Result = this.Hours + ":" + this.Minutes
                                },
        NCount1min:function(){
             this.Minutes -= 1
             this.checking()
             this.Result = this.Hours + ":" + this.Minutes
                },
                NCountNmin:function(){
                    this.Minutes -= parseInt(this.text)
                    this.checking()
                    this.Result = this.Hours + ":" + this.Minutes
                       },
                CountNmin:function(){
                    this.Minutes += parseInt(this.text)
                    this.checking()
                    this.Result = this.Hours + ":" + this.Minutes
                       },
                NCountNhour:function(){
                        this.Hours -= parseInt(this.text)
                        this.checking()
                        this.Result = this.Hours + ":" + this.Minutes
                           },
                    CountNhour:function(){
                        this.Hours += parseInt(this.text)
                        this.checking()
                        this.Result = this.Hours + ":" + this.Minutes
                           }
},


template: `
<div>

<h1>Калькулятор времени</h1>

<h1>{{Result}}</h1>






<div>
<p>Использовать 12-часовую версию?</p>
<input name="radio" type="radio" v-model="selected2" value="1">Да</input>
<input type="radio" name="radio" v-model="selected2" value="0">Нет</input>
</div>

<p>Выберете время, которое вы хотите назначить:</p>
<input type="time"  value ="00:00" v-model ="test"> {{test}}

<p><button  @click = "Choose()">Установить время</button></p>



<p>Выберите, что прибавить</p>
<select v-model = "selected">
<option value = "1">Минуты</option>
<option value = "2">часы</option>
</select>

<div v-if ="selected == 1">

<p><input  @click = type="text" v-model ="text"></p>
<button @click = "CountNmin()">прибавить</button> <button @click = "NCountNmin()">отнять</button>
<hr>
<p><button  @click = "Count1min()">прибавить одну минуту</button></p>
<p><button  @click = "Count10min()">прибавить десять минут</button></p>
<p><button  @click = "Count30min()">прибавить тридцать минут</button></p>
<p><button  @click = "NCount1min()">отнять одну минуту</button></p>


</div>

<div v-if ="selected == 2">

<p><input  @click = type="text" v-model ="text"></p>
<button @click = "CountNhour()">прибавить</button> <button @click = "NCountNhour()">отнять</button>
<hr>
<p><button  @click = "Count()">прибавить один час</button></p>
<p><button  @click = "Count1()">отнять один час</button></p>


</div>


</div>

`
}