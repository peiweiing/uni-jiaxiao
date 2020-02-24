<template>
    <div class="boxcs">

            <div class="register">注册</div>
            <div class="registercs">
                <div class="divcs" style="display: flex;flex-direction: column;">

                    <div class="div" style="display: flex;align-items: center;">
                        <img src="../../static/img/login_sj.png" alt="">
                        <input  id="phoneId" :class="dool ? 'inputcs': 'inputcs xiahuared'" type="phone" name="username" placeholder="请输入手机号" v-model="loginname" @blur="fun2()">
                        <input v-if="panduan" class="huoqu" type="button" value="获取验证码" @click="huoqu()">
                        <div v-else class="huoqucs">{{num}}s</div>
                    </div>

                    <div class="div" style="display: flex;align-items: center;">
                        <img src="../../static/img/login_mm.png" alt="">
                        <input class="inputcs" type="text" placeholder="请输入验证码" v-model="logincode">
                    </div>

                    <div class="div" style="display: flex;justify-content: space-between;align-items: center;">
                        <div>
                            <img src="../../static/img/login_mm.png" alt="">
                            <input class="inputcs"  :type="pwdtype" name="userpass" placeholder="请输入密码" v-model="loginpwd">
                        </div>
                        <img :src="openeye" alt="" @click="changetype">
                    </div>
                    <div class="div" style="display: flex;justify-content: space-between;align-items: center;">
                        <div style="display: flex;">
                            <img src="../../static/img/login_mm.png" alt="">
                            <input class="inputcs"  :type="type" placeholder="请再次输入密码">
                        </div>
                        <img :src="eye" alt="" @click="change">
                    </div>

                </div>

                <div class="main">
                    <button  :disabled="btnbooll" :class="btnbooll ? 'butcs butcss' : 'butcs'" type="button" @click="onlogin()">注册</button>
                </div>
            </div>
            <div class="url"></div>
            
        </div>
</template>
<script>
export default {
    data(){
        return{
            loginname:"",//注册页面用户名//判断输入框的值是否符合用户名规则
            loginpwd:"",//密码
            logincode:"",//输入的验证码
            dool:true,//判断是否符合用户名规则的真假
            // btnbooll:true,//判断输入框内是否有值的真假
            // loading:true,
            y:'',//异步判断注册的用户名是否已存在
            panduan:true,
            num:60,

            pwdtype: 'password', // 密码类型
            openeye: require('../../static/img/login_yanjing.png'), //图片地址
            type: 'password', // 密码类型
            eye: require('../../static/img/login_yanjing.png'), //图片地址
        }
    },
    methods: {
        changetype() {//隐藏显示密码
            this.pwdtype = this.pwdtype === 'password' ? 'text' : 'password';
            this.openeye = this.openeye == require("../../static/img/login_yanjing.png") ? require("../../static/img/login_yanjing_01.png") : require("../../static/img/login_yanjing.png");
        },
        change() {//隐藏显示密码
            this.type = this.type === 'password' ? 'text' : 'password';
            this.eye = this.eye == require("../../static/img/login_yanjing.png") ? require("../../static/img/login_yanjing_01.png") : require("../../static/img/login_yanjing.png");
        },
        fun2(){//判断用户名规则合法，，，同时异步检测用户名是否存在
            
            if(this.loginname!=""){
                this.axios({
                    url:"",//检测用户名是否存在接口
                    method:"get",
                    params:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                    if(ok.data.queryResult.anInt=="1"){
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom="3px solid red"
                        this.$toast.fail("账户已存在")
                    }else{
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom=""
                    }
                })
            }
        },
        huoqu(){//点击获取验证码
            if(this.loginname==""){
                this.$toast.fail("请输入手机号");
            }else{
            this.axios({
                url:"",
                method:"post",
                params:{
                    username:this.loginname,
                    password:this.loginpwd,
                }
            }).then((ok)=>{
                this.panduan=false
            if(this.panduan==false){
                let time=setInterval(()=>{
                    this.num--
                    if(this.num==-1){
                        this.panduan=true
                        clearInterval(time)
                        this.num=60
                    }
                },1000)
            }
            })
            
            }
        },
        onregister(){//用户注册
            this.axios({
                url:"",//post请求下地址为http:ip地址：端口号
                method:"post",
                params:{
                    code:this.logincode
                } 
            }).then((ok)=>{
                if(ok.data.message=="code查询到用户，修改status为1，注册成功"){
                    this.$toast.success("注册成功，请登录！");
                    let ls = localStorage;
                    ls.setItem("用户名",this.loginname)
                    // location.href="#denglu";
                    this.$router.push("/register");
                }else{
                    this.$toast.success("注册失败，请重新注册！");
                    this.loginname = "";
                    this.loginpwd = "";
                    this.loginemail = "";
                }
                
                
            },(err)=>{
            })
        },
    },  
    // watch:{// 监听按钮
    //     loginname(){
    //         if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     },
    //     loginpwd(){
    //         if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     },
    //     logincode(){
    //         if(this.namecode=="1"&&this.loginname!=""&&this.loginpwd!=""&&this.loginemail!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     }
    // },
}    
</script>
<style scoped>
.boxcs{
    height: 94vh;
    color: #333;
    font-size: 0.15rem;
    font-family: PingFang-Sc-Medium;
}

.register{
	height: 22vh;
	line-height: 34vh;
    padding-left: 1.3rem;
    /* padding-top: 0.7rem; */
    color: #333;
    font-size: 20px;
    font-family: PingFang-Sc-Bold;
}
.registercs{
	height: 50vh;
    padding: 0% 1.3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.divcs{
   /* padding-top:0.3rem ;
    padding-bottom: 0.835rem; */
}
.div{
    /* width: 100%; */
    border-bottom: 1px solid rgb(224, 224, 224);
    padding-bottom: 0.5rem;
    padding-top: 0.8rem;
}
.textcs{
	font-size: 14px;
    padding-top: 1rem;
}
.inputcs{
	font-size: 14px;
    border: none;
    background-color: #fff;
    padding-left: 0.8rem;
    outline:none;
    /* border-bottom:1px solid #000; */
}
.huoqu{
    padding-left: 0.5rem;
    color: #4adcdc;
    background-color: #fff;
    border: none;
    border-left:1px solid #4adcdc;
}
.butcs{
    /* outline:0; */
    width: 80%;
    height: 2.6rem;
	line-height: 2.6rem;
    color: #fff;
    background-color:#4adcdc;
    border-radius: 40rpx;
    font-size: 18px;
    border: none;
}
.butcss{
    background-color:#bcbcce;
}
.url{
	height: 22vh;
    background: url('../../static/img/login_bg.png') no-repeat bottom;
	background-size: 100% 100%;
}


.huoqucs{
    padding: 0.11rem .1rem;
    background-color:#ccc;
    color: #fff;
    border-radius: 12px;
    font-size: 0.17rem;
    outline:none;
    border:0px;
    text-align: center;
}

.xiahua{
    border-bottom:3px solid green;
}
/* .xiahuared{
    border-bottom: 3px solid red;
    background-color:#f7f7f8;
} */
</style>