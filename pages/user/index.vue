<template>
	<view>
		<view class="container">
		  <view class="userinfo">
			<!-- <button @click="login">登录</button> -->
			<block>
			  <image class="userinfo-avatar" :src='userinfo.avatar'></image>
			  <text class="static">{{userinfo.phone}}</text></text>
			  <view>
				<text class="userinfo-nickname"></text>
				<text>{{usertype == 1 ? '考生编号' : '教练编号'}}：{{userid}}</text>
			  </view>
			</block>
		  </view>
		  <!-- <view class="usertab">
			<view>
			  <image src="../../static/img/xuexiao.png"></image>
			  <button>班级</button>
			</view>
			<view>
			  <image src="../../static/img/xuexiao.png"></image>
			  <button>班级</button>
			</view>
		  </view> -->
		  <view class="usericon">
			<view>
			  <text>{{userinfo.article}}</text>
			  <text>帖子</text>
			</view>
			<view>
			  <text>{{userinfo.replay}}</text>
			  <text>消息</text>
			</view>
			<view>
			  <text>{{userinfo.school}}</text>
			  <text>考场</text>
			</view>
			<view>
			  <text>{{userinfo.room}}</text>
			  <text>驾校</text>
			</view>
		  </view>
		</view>
		
		<view class="divcs">
			<navigator v-for="(v,i) in arr" :url="v.url">
			  <view class="div">
				<image :src="v.src"></image>
				<text>{{v.txt}}</text>
			  </view>
			</navigator>
		</view>
		
		<view class="divcss">
		  <view class="divs">
			<image src="../../static/img/shezhi.png"></image>
			<text>设置</text>
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userinfo: {},
				userid:'',
				usertype:'',
				hasUserInfo: false,
				arr:[
				  { src: "../../static/img/jinbi.png", txt: "我的报名", url: "../ubaoming/index" },
				  { src: "../../static/img/jinbi.png", txt: "我的收藏", url: "../ushoucang/index" },
				  { src: "../../static/img/jinbi.png", txt: "我的约课", url: "../uyueke/index" },
				  // { src: "../../static/img/jinbi.png", txt: "我的学币", url: "" },
				  // { src: "../../static/img/jinbi.png", txt: "我的学币", url: "" },
				],
			}
		},
		onShow() {
			this.userid=uni.getStorageSync('userinfo')['id'];
			this.usertype=uni.getStorageSync('userinfo')['usertype'];
			this.getinfo();
		},
		onLoad() {
			var that = this;
			that.userid=uni.getStorageSync('userinfo')['id'];
			if(that.userid&&that.userid!=""&&that.userid!=null){
				that.getinfo();
			}else{
				uni.reLaunch({
					url: '/pages/mylogin/index'
				});			
				return false;
			}
		},
		methods: {
			getinfo(){
				var that=this;
				var url = that.$url;
				if(that.usertype == 1){
					url += 'Index/student_userInfo?student_id='+ this.userid;
				}else{
					url +='Index/coach_info?coach_id='+ this.userid;
				}

				uni.request({
					url: url, //仅为示例，并非真实接口地址。
					method :'GET',
					header:{  
						'content-type': 'application/x-www-form-urlencoded'
					},  
					success: (res) => {	
						console.log(res.data.data);
						that.userinfo=res.data.data;
					}
				});
			},
			login(){
				uni.navigateTo({
					url: '/pages/mylogin/index'
				});
			}
		}
	}
</script>

<style>
	.container{
	  /* background-color: greenyellow; */
	  background: url('../../static/img/bgc.png') no-repeat top;
	  background-size: 100% 80%;
	  padding-top: 60rpx;
	  box-sizing: border-box;
	}
	.userinfo {
	  display: flex; 
	  align-items: center;
	  margin: 0 50rpx;
	}
	.userinfo>button{
		width: 240rpx;
	}

	.userinfo>view{
	  display: flex;
	  flex-direction: column;
	}

	.userinfo-avatar {
	  width: 128rpx;
	  height: 128rpx;
	  margin: 0 50rpx 0 10rpx;
	  border-radius: 50%;
	}

	.userinfo-nickname {
	  color: #aaa;
	}

	.usertab{
	  display: flex;
	  justify-content: space-around;
	  margin: 40rpx 0 40rpx;
	}
	.usertab>view{
	  width: 28%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  padding: 0 30rpx;
	  border: 1px solid rgb(236, 236, 236);
	  border-radius: 40rpx;
	}
	.usertab image{
	  width: 60rpx;
	  height: 60rpx;
	}
	.usertab button{
	  /* width: 260rpx; */
	  font-size: 12px;
	  outline: none;
	  border: none;
	  color: #fff;
	  background-color: inherit;
	}
	.usertab button::after{
	  border: none;
	}
	.usericon{
	  display: flex;
	  justify-content: space-around;
	  padding: 40rpx 0 20rpx;
	}
	.usericon>view{
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	}

	.divcs{
	  border-top: 20rpx solid #ccc;
	  border-bottom: 20rpx solid #ccc;
	  background-color: #fff;
	  padding: 10rpx 20rpx 10rpx 50rpx;
	}
	.div{
	  display: flex;
	  align-items: center;
	  padding-top: 40rpx;
	  padding-bottom: 40rpx;
	  border-bottom: 1px solid #ccc;
	}
	.div:last-child{
	  border-bottom: none;
	}
	.divcss{
	  background-color: #fff;
	  padding: 10rpx 20rpx 10rpx 50rpx;
	}
	.divs{
	  display: flex;
	  align-items: center;
	  padding-top: 20rpx;
	  padding-bottom: 50rpx;
	}
	.div image,.divs image{
	  width: 50rpx;
	  height: 50rpx;
	  margin-right: 40rpx;
	}
</style>
