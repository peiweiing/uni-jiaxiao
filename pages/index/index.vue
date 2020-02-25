<template>
	<view>
		<!-- <view class="boxTop">
		</view> -->
		<view class="top">
		  <view class="site">
			<image src="../../static/img/weizhi.png"></image>
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
			<uni-swiper-dot :info="lunbo" :current="current" :mode="mode" :dots-styles="dotsStyles">
				<swiper class="swiper-box u-wrp-bnr" @change="change">
					<swiper-item v-for="(item ,index) in lunbo" :key="index">
						<view class="swiper-item">
							<image :src="item.pic" class='u-img-slide' mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
			
					<!-- <view class="page-section-spacing u-wrp-bnr">
						<swiper class="swiper" indicatorDots:true autoplay:true interval:2000 duration:500>
							<swiper-item v-for="(v,i) in lunbo" :key="i">
								<image :src="v.pic" class='u-img-slide'></image>
							</swiper-item>
						</swiper>
					</view> -->
		</view>
		<view class="icon w100 flex">
		  <view class="ico w4" v-for="(v,i) in icon">
			<image :src="v.src"></image>
			<text class="txt">{{v.txt}}</text>
		  </view>
		</view>
		
		<view class="div">
			<view class="mores">
				<text class="txt">考场推荐</text>
				<text class="more" @click="kaochang">更多>></text>
			</view>
			<view class="divcs" v-if="room_status">
				<view class="width">
					<view v-for="(v,i) in arra" :data-id="v.id">
						<image class="img" :src="v.pic"></image>
					</view>
				</view>
			</view>
			<view class="divcs" v-else><text>{{arra}}</text></view>
		</view>
		<view class="div">
			<view class="mores">
				<text class="txt">驾校推荐</text>
				<text class="more" @click="jiaxiao">更多>></text>
			</view>
			<view class="divcs" v-if="school_status">
				<view class="width">
					<view v-for="(v,i) in arrb" :data-id="v.id" @click="jiaxiaos">
						<image class="img" :src="v.pic"></image>
					</view>
				</view>
			</view>
			<view class="divcs" v-else><text style="color: red;">{{arrb}}</text></view>
		</view>
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
// import t from '../../main.js'
	export default {
		components: {
			uniSwiperDot
		},
		data() {
			return {
				about_phone:'',
				
				banner_status : true,
				room_status:true,
				school_status:true,

				title: 'Hello',
				current: 0,
				mode: 'default',
				dotsStyles: {},
				lunbo: [
					{url: '../../static/img/lunbo.png',},
					{url: '../../static/img/lunbo.png',},
					{url: '../../static/img/lunbo.png',}
				],
				// lunbo:[
				// 	{src:'../../static/img/lunbo.png'},
				// 	{src:'../../static/img/lunbo.png'},
				// 	{src:'../../static/img/lunbo.png'},
				// ],
				icon:[
					{src:'../../static/img/xiao.png',txt:'考场详情',url:'/pages/kaochang/index'},
					{src:'../../static/img/xiao.png',txt:'驾校详情',url:'/pages/kaochang/index'},
					{src:'../../static/img/xiao.png',txt:'关于我们',url:'/pages/about/index'},
					{src:'../../static/img/xiao.png',txt:'联系我们',url:''},
				],
				arra:[
					
				],
				arrb:[
					
				]
			}
		},
		onLoad() {
			this.getbanner();
			this.getdriving_room();
			this.getdriving_school();
			this.getabout_phone();
		},
		methods: {
			change(e) {
				this.current = e.detail.current
			},
			kaochang(){
				uni.navigateTo({
					url: '/pages/kaochang/index'
				});
			},
			kaochangs(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '/pages/kaochangs/index?id='+id
				});
				
			},
			jiaxiao(){
				uni.navigateTo({
					url: '/pages/jiaxiao/index'
				});
			},
			
			jiaxiaos(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '/pages/jiaxiaos/index?id='+id
				});
				
			},
			/* 
				轮播图
			 */
			getabout_phone(){
				var url = this.$url;
				uni.request({
					url:url+'Index/get_about_phone',
					success:(e)=>{
						if (e.data.error == 400) {
						  this.about_phone = e.data.info;
						} else if(e.data.error == 200){
							this.about_phone = e.data.data;
						}
					}
				})
			},
			/*
				轮播图
			 */
			getbanner(){
				var url = this.$url;
				uni.request({
					url:url+'Index/get_banner',
					success:(e)=>{
						if (e.data.error == 400) {
						  this.banner_status = false;
						  this.lunbo = e.data.info;
						} else if(e.data.error == 200){
							this.lunbo = e.data.data;
						}
					}
				})
			},
			/* 
				考场推荐
			 */
			getdriving_room(){
				var url = this.$url;
				uni.request({
					url:url+'Index/driving_room',
					success:(e)=>{
						if(e.data.error == 400){
							this.room_status = false;
							this.arra = e.data.info;
						}else if(e.data.error == 200){
							this.arra = e.data.data;
						}
					}
				})
			},
			/* 
				驾校推荐
			 */
			getdriving_school(){
				var url = this.$url;
				uni.request({
					url:url+'Index/driving_school',
					success: (e) => {
						if(e.data.error == 400){
							this.school_status = false,
							this.arrb = e.data.info
						}else if(e.data.error == 200){
							this.arrb = e.data.data;
						}
					}
				})
			}
		},
		
	}
</script>

<style>
	.top{
		padding-top: 30rpx;
		padding-bottom: 20rpx;
	  background: url('../../static/img/site.png') no-repeat top;
	  background-size: 100% 200%;
	}
	.top .site{
	  height: 8vh;
	  display: flex;
	  justify-content: flex-end;
	  align-items: center;
	  padding-right: 20rpx;
	  color: #fff;
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
		background-color: #fff;
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
	  border-radius: 40rpx;
	}

	.icon image{
	  width: 100rpx;
	  height: 100rpx;
	  border-radius: 40rpx;
	}
	.ico{
	  display: flex;
	  flex-flow: column;
	  align-items: center;
	}
	.ico .txt{
		display: inline-block;
		margin-top: 10rpx;
	}
	.divcs{
	  overflow: auto;
	  height: 200rpx;
	}
	.divcs .width{
	  width: 1200rpx;
	  height: 190rpx;
	  overflow: hidden;
	}
	.divcs .img{
	  width: 260rpx;
	  height: 180rpx;
	  float: left;
	  margin-right: 20rpx;
	  margin-bottom: 20rpx;
	}
	.div{
	  margin: 1rem;
	}
	.div .mores{
		display: flex;
		justify-content: space-between;
	}
	.div .txt{
		display: inline-block;
		margin-bottom: 10rpx;
		border-left: 5rpx solid rgb(64,232,119);
		padding-left: 10rpx;
	}
	.div .more{
		color: red;
	}
</style>
