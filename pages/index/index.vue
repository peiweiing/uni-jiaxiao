<template>
	<view>
		<view class="boxTop">
			
		</view>
		<view class="top">
		  <view class="site">
			<image src="../../static/img/shoucang.png"></image>
			<text>西安</text>
		  </view>
		  <view class="search">
			<view class="w60">
			  <image src="../../static/img/search.png"></image>
			  <input placeholder="请输入想要查找的内容"></input>
			</view>
		  </view>
		</view>
		<view class="lunbo">
					<view class="page-section-spacing u-wrp-bnr">
						<swiper class="swiper" indicatorDots:true autoplay:true interval:2000 duration:500>
							<swiper-item v-for="(v,i) in lunbo" :key="i">
								<image :src="v.src" class='u-img-slide'></image>
							</swiper-item>
						</swiper>
					</view>
		</view>
		<view class="icon w100 flex">
		  <view class="ico w4" v-for="(v,i) in icon">
			<image :src="v.src"></image>
			<text>{{v.txt}}</text>
		  </view>
		</view>
		
		<view class="div">
			<text @click="kaochang">考场推荐</text>
			<view class="divcs">
				<view v-for="(v,i) in arra" @click="kaochangs">
					<image :src="v.src"></image>
				</view>
			</view>
		</view>
		<view class="div">
			<text @click="jiaxiao">驾校推荐</text>
			<view class="divcs">
				<view v-for="(v,i) in arrb" @click="jiaxiaos">
					<image :src="v.src"></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
import Swiper from '../../components/swiper.vue'
	export default {
		components:{
			Swiper,
		},
		data() {
			return {
				title: 'Hello',
				lunbo:[
					{src:'../../static/img/lunbo.png'},
					{src:'../../static/img/lunbo.png'},
					{src:'../../static/img/lunbo.png'},
				],
				icon:[
					{src:'../../static/img/xiao.png',txt:'考场详情',url:''},
					{src:'../../static/img/xiao.png',txt:'考场详情',url:''},
					{src:'../../static/img/xiao.png',txt:'考场详情',url:''},
					{src:'../../static/img/xiao.png',txt:'考场详情',url:''},
				],
				arra:[
					{src:'../../static/img/kaochang.png'},
					{src:'../../static/img/kaochang.png'},
					{src:'../../static/img/kaochang.png'},
				],
				arrb:[
					{src:'../../static/img/kaochang.png'},
					{src:'../../static/img/kaochang.png'},
					{src:'../../static/img/kaochang.png'},
				]
			}
		},
		onLoad() {

		},
		methods: {
			kaochang(){
				uni.navigateTo({
					url: '/pages/kaochang/index'
				});
			},
			kaochangs(){
				uni.navigateTo({
					url: '/pages/kaochangs/index'
				});
				
			},
			jiaxiao(){
				uni.navigateTo({
					url: '/pages/jiaxiao/index'
				});
				
			},
			jiaxiaos(){
				uni.navigateTo({
					url: '/pages/jiaxiaos/index'
				});
				
			}
		}
	}
</script>

<style>
	.top{
	  
	}
	.top .site{
	  height: 8vh;
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	}
	.top .site image{
	  width: 50rpx;
	  height: 50rpx;
	}
	.search{
	  display: flex;
	  justify-content: center;
	}
	.search view{
	  height: 70rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  border-radius: 30rpx;
	  box-shadow: 0 0 2px #ccc;
	}
	.search image{
	  width: 50rpx;
	  height: 50rpx;
	}
	.search input{
		font-size: 12px;
	}
	.lunbo{
	  padding: 1rem;
	}
	.u-wrp-bnr {
	  width: 100%;
	  height: 340rpx;
	}
	.u-img-slide {
	  width: 100%;
	  height: 340rpx;
	}

	.icon image{
	  width: 100rpx;
	  height: 100rpx;
	}
	.ico{
	  display: flex;
	  flex-flow: column;
	  align-items: center;
	}
	.divcs{
	  overflow: auto;
	  height: 200rpx;
	}
	.divcs view{
	  width: 1200rpx;
	}
	.divcs image{
	  width: 260rpx;
	  height: 180rpx;
	  float: left;
	  margin-right: 20rpx;
	  margin-bottom: 20rpx;
	}
	.div{
	  margin: 1rem;
	}
</style>
