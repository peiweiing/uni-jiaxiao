<template>
    <view class="boxcs">
		
        <view v-if="loading"><img class="boximg" src="static/loading.gif" alt=""></view>
        <view v-else>
            <view class="login">登录</view>
            <view class="logincs">
                <view class="divcs" style="display: flex;flex-direction: column;">
					
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
					
                    <view class="div" style="display: flex;align-items: center;">
                        <image class="shouji" src="../../static/img/login_sj.png" alt=""></image>
                        <input id="userId" :class="dool ? 'inputcs': 'inputcs xiahuared'" type="phone" name="username" placeholder="请输入手机号"  @blur="login()" v-model="username">
                    </view>

                    <view class="div" style="display: flex;justify-content: space-between;align-items: center;">
                        <view style="display: flex;align-items: center;">
                            <image class="mima" src="../../static/img/login_mm.png" alt=""></image>
                            <input class="inputcs" :type="pwdtype"  name="userpass" placeholder="请输入密码" v-model="userpwd">
                        </view>
                        <image class="mima" :src="openeye" alt="" @click="changetype"></image>
                    </view>

                    <view class="textcs" style="display: flex;justify-content: space-between;">
                        <span @click="forget()">找回密码</span>
                        <span @click="register()">注册</span>
                    </view>

                </view>

                <view class="main">
                    <button  :disabled="btnbooll" :class="btnbooll ? 'butcs butcss' : 'butcs'" type="button" @click="onlogin()">登录</button>
                </view>
            </view>
            <view class="url"></view>
        </view>
    </view>
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
			usertype:1,
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
		radioChange: function(e) {
			var checked = e.target.value
			console.log(checked)
		},
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
			var usertype=this.usertype;
            var phone=this.username;
            var password=this.userpwd;
            var reg=/^1[23456789]\d{9}$/;
			if(!reg.test(phone)){
				uni.showToast({
					title: '手机号码格式错误',
					icon:'none'
				});
				return false;
			}
			var plen=password.trim().length;
			if(plen==0){
				uni.showToast({
					title: '请填写密码',
					icon:'none'
				});
				return false;
			}
			var url = this.$url;
								
			uni.request({
				url:url+'Login/login',
				method: 'POST',
				 header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				data:{'phone':phone,'password':password,'usertype':usertype},
				success: (res) => {
					if(res.data.error==400){
						uni.showToast({
							title: res.data.info,
							icon:'none'
						});
					}else{
						uni.setStorageSync('userinfo',res.data.data);
						uni.switchTab({
							url: '/pages/index/index'
						});
					}
					
				}
			});
        }
    },
}
</script>
<style scoped>
	.uni-list{
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