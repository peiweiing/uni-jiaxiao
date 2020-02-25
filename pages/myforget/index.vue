<template>
    <div class="boxcs">

            <div class="forget">找回密码</div>
            <div class="forgetcs">
                <div class="divcs">
					
					<view class="uni-form-item uni-column">
						<radio-group class="uni-list" @change="radioChange">
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
								<view>
									<radio :id="item.name" :value="item.name" :checked="item.checked"></radio>
								</view>
								<view>
									<label class="label-2-text" :for="item.name">
										<text>{{item.value}}</text>
									</label>
								</view>
							</label>
						</radio-group>
					</view>
					
                    <div class="div" style="display: flex;align-items: center;">
                        <div style="display: flex;align-items: center;">
                            <image class="shouji" src="../../static/img/login_mm.png" alt=""></image>
                            <input id="phoneId" :class="dool ? 'inputcs': 'inputcs xiahuared'" type="text" name="username" placeholder="请输入手机号" v-model="loginname" @blur="fun2()">
                        </div>
                        <button class="huoqu" type="button" @click="fun3()">
							获取验证码
						</button>
                    </div>
                    <div class="div" style="display: flex;align-items: center;">
                        <image class="mima" src="../../static/img/login_mm.png" alt=""></image>
                        <input class="inputcs" type="text" placeholder="请输入验证码" v-model="logincode">
                    </div>
                    <div class="div" style="display: flex;justify-content: space-between;align-items: center;">
                        <div style="display: flex;align-items: center;">
                            <image class="mima" src="../../static/img/login_mm.png" alt=""></image>
                            <input class="inputcs"  :type="pwdtype" name="password" placeholder="请输入密码" v-model="loginpwd">
                        </div>
                        <image class="mima" :src="openeye" alt="" @click="changetype"></image>
                    </div>
                </div>
                
                <div class="main">
                    <button  :disabled="btnbooll" :class="btnbooll ? 'butcs butcss' : 'butcs'" type="button" @click="onxiugai()">修改密码</button>
                </div>

            </div>
            <div class="url"></div>

    </div>
</template>
<script>
export default {
    data(){
        return{
			radioItems: [{
					name: 'jiaolian',
					value: '教练'
				},
				{
					name: 'xueyuan',
					value: '学员',
					checked: 'true'
				}
			],
            loginname:"",//注册页面用户名//判断输入框的值是否符合用户名规则
            loginpwd:"",//密码
            logincode:"",//输入的验证码
            
            dool:true,//判断是否符合用户名规则的真假
            // btnbooll:true,//判断输入框内是否有值的真假
            // y:''//异步判断注册的用户名是否已存在

            pwdtype: 'password', // 密码类型
            openeye: require('../../static/img/login_yanjing.png'), //图片地址
        }
    },
    methods:{
		radioChange: function(e) {
			var checked = e.target.value
			console.log(checked)
		},
        changetype() {
            this.pwdtype = this.pwdtype === 'password' ? 'text' : 'password';
            this.openeye = this.openeye == require("../../static/img/login_yanjing.png") ? require("../../static/img/login_yanjing_01.png") : require("../../static/img/login_yanjing.png");
        },
        fun2(){//判断用户名规则合法，，，同时异步检测用户名是否存在
            if(this.loginname!=""){
                 this.axios({
                    url:"",
                    method:"get",
                    params:{
                        username:this.loginname
                    }
                }).then((ok)=>{
                    if(ok.data.message=="用户名可注册"){
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom="3px solid red"
                        this.$toast.fail("该用户名尚未注册")
                    }else{
                        let red=document.querySelector("#phoneId")
                        red.style.borderBottom=""
                    }
                })
            }else{
            }
        },
        fun3(){//检测账号是否正确
            if(this.loginname==""){
                this.$toast.fail("请输入手机号");
            }else{
                this.axios({
                    url:"",
                    method:"post",
                    params:{
                        username:this.loginname,
                    }
                }).then((ok)=>{
                })
            }
        },
        onxiugai(){//修改密码
            this.axios({
                url:"",//post请求下地址为http:ip地址：端口号
                method:"post",
                params:{
                    code:this.logincode,
                    username:this.loginname,
                    password:this.loginpwd
                } 
            }).then((ok)=>{
                if(ok.data.queryResult.anInt==0){
                    this.$toast.success("验证码输入错误");
                }else{
                    this.$toast.success("恭喜您，密码修改成功！");
                    // location.href="#denglu";
                    // this.$router.push("/login");
                }
                
            })
        },
    },
    // watch:{// 监听按钮
    //     loginname(){
    //         if(this.loginname!=""&&this.loginpwd!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     },
    //     loginpwd(){
    //         if(this.loginname!=""&&this.loginpwd!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     },
    //     logincode(){
    //         if(this.loginname!=""&&this.loginpwd!=""&&this.logincode!=""){
    //             this.btnbooll=false
    //         }else{
    //             this.btnbooll=true
    //         }
    //     }
    // },
        
}
</script>
<style scoped>
	.uni-list{
		font-size: 16px;
		display: flex;
		justify-content: space-around;
	}
	.shouji{
		width:32rpx;
		height: 44rpx;
	}
	.mima{
		width: 36rpx;
		height:36rpx;
	}
.boxcs{
    height: 94vh;
    color: #333;
    font-size: 0.15rem;
    font-family: PingFang-Sc-Medium;
}

.forget{
	height: 22vh;
	line-height: 34vh;
    font-size: 20px;
    padding-left: 1.3rem;
    color: #333;
    font-family: PingFang-Sc-Bold;
}
.forgetcs{
	height: 50vh;
    padding: 0% 1.3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.divcs{
  /*  padding-top:0.5rem ;
    padding-bottom: 0.545rem; */
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
	height: 44rpx;
	line-height: 44rpx;
    padding-left: 0.5rem;
    color: #4adcdc;
    background-color: #fff;
	outline: none;
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
    font-size: 14px;
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