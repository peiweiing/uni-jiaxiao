<template>
    <div class="boxcs">
		
        <div v-if="loading"><img class="boximg" src="static/loading.gif" alt=""></div>
        <div v-else>
            <div class="login">登录</div>
            <div class="logincs">
                <div class="divcs" style="display: flex;flex-direction: column;">

                    <div class="div" style="display: flex;align-items: center;">
                        <img src="../../static/img/login_sj.png" alt="">
                        <input id="userId" :class="dool ? 'inputcs': 'inputcs xiahuared'" type="phone" name="username" placeholder="请输入手机号"  @blur="login()" v-model="username">
                    </div>

                    <div class="div" style="display: flex;justify-content: space-between;align-items: center;">
                        <div>
                            <img src="../../static/img/login_mm.png" alt="">
                            <input class="inputcs" :type="pwdtype"  name="userpass" placeholder="请输入密码" v-model="userpwd">
                        </div>
                        <img :src="openeye" alt="" @click="changetype">
                    </div>

                    <div class="textcs" style="display: flex;justify-content: space-between;">
                        <span @click="forget()">找回密码</span>
                        <span @click="register()">注册</span>
                    </div>

                </div>

                <div class="main">
                    <button  :disabled="btnbooll" :class="btnbooll ? 'butcs butcss' : 'butcs'" type="button" @click="onlogin()">登录</button>
                </div>
            </div>
            <div class="url"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:"",//登录页面用户名
            userpwd:"",//密码
            // btnbooll:true,//判断输入框内是否有值的真假

            // loading:true,//loading延时加载
            pwdtype: 'password', // 密码类型
            openeye: require('../../static/img/login_yanjing.png'), //图片地址
        }
    },
    created(){
        let that=this
        setTimeout(function(){
            that.loading=false
        },1000)
    },
    methods:{
        changetype() {//隐藏显示密码
            this.pwdtype = this.pwdtype === 'password' ? 'text' : 'password';
            this.openeye = this.openeye == require("../../static/img/login_yanjing.png") ? require("../../static/img/login_yanjing_01.png") : require("../../static/img/login_yanjing.png");
        },
        login(){//失去焦点检测
            if(this.loginname!=""){
                this.namecode="1";
                // this.dool=true;
            }else{
                this.namecode="0";
            }
        },
        register(){//注册页面跳转
			uni.navigateTo({
				url: '/pages/myregister/index'
			});
        },
        forget(){//找回密码跳转
			uni.navigateTo({
				url: '/pages/myforget/index'
			});
        },
        onlogin(){//用户名登录
            
        }
    },
}
</script>
<style scoped>
.boxcs{
    height: 94vh;
    color: #333;
    font-size: 0.15rem;
    font-family: PingFang-Sc-Medium;
}
.boximg{
    width: 100%;
}

.login{
	height: 22vh;
	line-height: 34vh;
    font-size: 20px;
    font-family: PingFang-Sc-Bold;
    color: #333;
    padding-left: 1.3rem;
}
.logincs{
	height: 50vh;
    padding: 0% 1.3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.divcs{
   /* padding-top:3.5rem ;
    padding-bottom: 5.835rem; */
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

.xiahua{
    border-bottom:3px solid green;
}
/* .xiahuared{
    border-radius: 30%;
    border-bottom: 2px solid red;
} */
</style>