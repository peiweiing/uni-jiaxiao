<template>
	<view>
		<view class="container">
		  <view class="userinfo">
			<button> 获取头像昵称 </button>
			<block>
			  <image class="userinfo-avatar" mode="cover"></image>
			  <view>
				<text class="userinfo-nickname"></text>
				<text>学号：{{xuehao}}</text>
			  </view>
			</block>
		  </view>
		  <view class="usertab">
			<view>
			  <image src="../../static/img/xuexiao.png"></image>
			  <button>班级</button>
			</view>
			<view>
			  <image src="../../static/img/xuexiao.png"></image>
			  <button>班级</button>
			</view>
		  </view>
		  <view class="usericon">
			<view>
			  <text>0</text>
			  <text>帖子</text>
			</view>
			<view>
			  <text>0</text>
			  <text>回复</text>
			</view>
			<view>
			  <text>0</text>
			  <text>收藏</text>
			</view>
			<view>
			  <text>0</text>
			  <text>消息</text>
			</view>
		  </view>
		</view>
		
		<view class="divcs">
		  <view class="div" v-for="(v,i) in arr" @click="icon(v.url)">
			<image :src="v.src"></image>
			<text>{{v.txt}}</text>
		  </view>
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
				userInfo: {},
				hasUserInfo: false,
				xuehao: "18125",
				arr:[
				  { src: "../../static/img/jinbi.png", txt: "我的报名", url: "../ubaoming/index" },
				  { src: "../../static/img/jinbi.png", txt: "我的收藏", url: "../ushoucang/index" },
				  { src: "../../static/img/jinbi.png", txt: "我的约课", url: "../uyueke/index" },
				  { src: "../../static/img/jinbi.png", txt: "我的学币", url: "" },
				  { src: "../../static/img/jinbi.png", txt: "我的学币", url: "" },
				],
			}
		},
		methods: {
			icon(url){
				this.$router.push(url)
			},
		}
	}
</script>

<style>
	.container{
	  background-color: greenyellow;
	  background-image: url("../../static/img/bgc.png");
	}
	.userinfo {
	  display: flex; 
	  align-items: center;
	  margin: 0 50rpx;
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
	  margin: 110rpx 0 60rpx;
	}
	.usertab>view{
	  width: 30%;
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
	  padding: 30rpx 0 50rpx;
	  background-color: #fff;
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
