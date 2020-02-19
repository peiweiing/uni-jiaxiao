<template>
	<view>
		<!-- <view class="head">
		  <text>招生素材</text>
		</view> -->
		
		<view class="top">
		  <view class="search">
			<image src="../../static/img/search.png"></image>
			<input placeholder="请输入搜索内容"></input>
		  </view>
		  <image src="../../static/img/tongzhi.png"></image>
		</view>
		
		<view class="icon">
		  <view v-for="(v,i) in arr" :key="i">
			<image :src="v.src"></image>
			<text>{{v.txt}}</text>
		  </view>
		</view>
		<view class="div" v-for="(v,i) in main" :key="i">
		  <view class="divtop" @click="ondetails">
			<view class="one">
			  <image :src="v.ttsrc"></image>
			  <text>{{v.title}}</text>
			</view>
			<view class="two">
			  <text class="two1">{{v.h1}}</text>
			  <text class="two2">{{v.text}}</text>
			</view>
			<view class="three">
			  <text class="three1">{{v.time}}</text>
			  <text class="three2">{{v.butt}}</text>
			</view>
			<view class="pinglun">
			</view>
		  </view>
		  <view class="divend">
			<view>
			  <image src="../../static/img/xfenxiang.png"></image>
			  <text>分享</text>
			</view>
			<view>
			  <image src="../../static/img/xchakan.png"></image>
			  <text>{{chakan}}</text>
			</view>
			<view>
			  <image src="../../static/img/xpinglun.png"></image>
			  <text>评论</text>
			</view>
			<view>
			  <image src="../../static/img/xshoucang.png"></image>
			  <text>7</text>
			</view>
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chakan:"0",
				arr:[
				  { src: "../../static/img/quanbu.png", txt: "全部", url: "" },
				  { src: "../../static/img/xiaoxizhongxin.png", txt: "招生素材", url: "" },
				  { src: "../../static/img/kechengbaoming.png", txt: "报名", url: "" },
				  { src: "../../static/img/fatie.png", txt: "发帖", url: "" },
				],
				main:[
				  { title: "大新县驾驶培训有限公司", ttsrc: "../../static/img/logo.png", h1: "大新科目一注意事项", text: "科目一、学员注意事项，各位学员请注意，下面宣读一些考生须知，请大家保持安静", time: "2019-12-12", butt: "考试须知", },
				  { title: "大新县驾驶培训有限公司", ttsrc: "../../static/img/logo_1.png", h1: "大新科目一注意事项", text: "科目一、学员注意事项，各位学员请注意，下面宣读一些考生须知，请大家保持安静", time: "2019-12-12", butt: "考试须知", },
				 
				],
				icon:[
				  { src: "../../static/img/xfenxiang.png", txt: "分享", url: "" },
				  { src: "../../static/img/xchakan.png", txt: "275", url: "" },
				  { src: "../../static/img/xpinglun.png", txt: "评论", url: "" },
				  { src: "../../static/img/xshoucang.png", txt: "7", url: ""},
				],
			}
		},
		onLoad() {

		},
		methods: {
			ondetails(){
				uni.navigateTo({
					url: '/pages/details/index'
				});
			}
		}
	}
</script>

<style>
	.head{
	  line-height: 8vh;
	  padding-left: 30rpx;
	}
	.top{
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  padding: 10rpx 20rpx;
	  background-color: rgb(248, 248, 248);
	}
	.top>image{
	  width: 70rpx;
	  height: 70rpx;
	}
	.search{
	  width: 80%;
	  font-size: 12px;
	  display: flex;
	  align-items: center;
	  padding: 5rpx 10rpx;
	  border: 1px solid #ccc;
	  border-radius: 50rpx;
	  background-color: #fff;
	}
	.search image{
	  width: 40rpx;
	  height: 40rpx;
	  margin-right: 20rpx;
	}

	.icon{
	  display: flex;
	  justify-content: space-between;
	  padding: 30rpx 60rpx;
	  border-bottom: 2px solid #ccc;
	}
	.icon image{
	  width: 70rpx;
	  height: 70rpx;
	}
	.icon>view{
	  display: flex;
	  flex-flow: column;
	  align-items: center;
	}

	.div{
	  padding: 20rpx;
	  border-bottom: 10rpx solid #ccc;
	}
	.divtop .one{
	  font-size: 12px;
	  display: flex;
	  align-items: center;
	  margin-bottom: 20rpx;
	}
	.divtop .one image{
	  width: 80rpx;
	  height: 80rpx;
	  margin-right: 20rpx;
	}
	.divtop .two{
	  display: flex;
	  flex-flow: column;
	}
	.divtop .two .two1{
	  font-weight: bolder;
	  font-size: 14px;

	}
	.divtop .two .two2{
	  font-size: 12px;
	  margin: 10rpx 0;
	  overflow:hidden;/*溢出隐藏*/
	  text-overflow: ellipsis;/*超出部分显示省略号*/
	  display:-webkit-box;/*弹性盒*/
	  -webkit-box-orient:vertical;/*设置对象内元素的排列方式为垂直*/
	  -webkit-line-clamp:2;/*限制块元素文本行数*/
	}
	.divtop .three{
	  color: #666;
	  display: flex;
	  justify-content: space-between;
	  font-size: 12px;
	  margin: 20rpx 0;
	}
	.divtop .three .three2{
	  padding: 10rpx 15rpx;
	  border-radius: 30rpx;
	  background-color: #ccc;
	}
	.divend{
	  font-size: 12px;
	  display: flex;
	  border-top: 1px solid #ccc;
	  padding: 20rpx 30rpx;
	}
	.divend>view{
	  width: 25%;
	  height: 40rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  border-right: 1px solid #ccc;
	}
	.divend>view:last-child{
	  border-right: none;
	}
	.divend image{
	  width: 40rpx;
	  height: 40rpx;
	}

</style>
