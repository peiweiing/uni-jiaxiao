<template>
	<view>
		
		<view class="top">
		  <text>今日首推</text>
		  <view class="divcs">
			<view class="width">
			  <view class="div" v-for="(v,i) in position_room" :data-id="v.id" @click="room_detail">
				<image :src="v.pic"></image>
				<text>{{v.title}}</text>
				<view class="txt">
				  <text>￥{{v.price}}</text>
				  <view>
					<image src="../../static/img/shoucang.png"></image>
					<image src="../../static/img/pinglun.png"></image>
				  </view>
				</view>
			  </view>
			</view>
		  </view>
		</view>
		
		<view class="end">
		  <text>当前热门</text>
		  <view class="divcs">
			<view class="div" v-for="(v,i) in hot_room" :data-id="v.id" @click="room_detail">
				<image :src="v.pic"></image>
				<text>{{v.title}}</text>
				<view class="txt">
				  <text>￥{{v.price}}</text>
				<view>
				  <image src="../../static/img/shoucang.png"></image>
				  <image src="../../static/img/pinglun.png"></image>
				</view>
			  </view>
			</view>   
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				position_room:[],
				hot_room:[],
				arra:[
					{src:'../../static/img/lunbo.png',txt:'清华考场明日可约学员200人次',money:'999'},
					{src:'../../static/img/lunbo.png',txt:'清华考场明日可约学员200人次',money:'999'},
					{src:'../../static/img/lunbo.png',txt:'清华考场明日可约学员200人次',money:'999'},
				],
				arrb:[
					{src:'../../static/img/kaochang.png',txt:'清华考场明日可约学员200人次',money:'999'},
					{src:'../../static/img/kaochang.png',txt:'清华考场明日可约学员200人次',money:'999'},
					{src:'../../static/img/kaochang.png',txt:'清华考场明日可约学员200人次',money:'999'},
				]
			}
		},
		onLoad() {
			this.getposition_room();
			this.gethot_room();
		},
		methods: {
			room_detail(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url:'/pages/kaochangs/index?id='+id
				})
			},
			/* 
				今日首推考场
			 */
			getposition_room(){
				var url = this.$url;
				console.log(url);
				uni.request({
					url:url+'Index/position_room',
					success: (e) => {
						if(e.data.error == 200){
							this.position_room = e.data.data
						}
					}
				})
			},
			/* 
				热门考场
			 */
			gethot_room(){
				var url = this.$url;
				uni.request({
					url:url+'Index/hot_room',
					success: (e) => {
						if(e.data.error == 200){
							this.hot_room = e.data.data
						}
					}
				})
			}
		}
	}
</script>

<style>
.top{
  padding: 10rpx 1rem;
}
.top>text{
  font-size: 14px;
  padding-bottom: 10rpx;
  display: inline-block;
}
.top .divcs{
  overflow: auto;
  height: 400rpx;
}
.top .divcs .width{
  width: 1200px;
  height: 390rpx;
  overflow: hidden;
}
.top .divcs .div{
  float: left;
  width: 600rpx;
  height: 380rpx;
  margin-right: 20rpx;
  margin-bottom: 20rpx;
  border-radius: 30rpx;
  box-shadow: 0 2px 2px #80ffff;
}
.top .div>image{
  /* width: 400rpx; */
  width: 100%;
  height: 220rpx;
}
.top .div>text{
  font-size: 14px;
  display: inline-block;
  min-height: 90rpx;
  padding: 0 10rpx;
}
.top .txt{
  display: flex;
  justify-content: space-between;
  margin-top: 8rpx;
  padding: 0 10rpx;
}
.top .txt view{
  width: 30%;
  display: flex;
  justify-content: space-between;
}
.top .txt text{
  font-size: 18px;
  color: red;
}
.top .txt image{
  width: 50rpx;
  height: 50rpx;
}



.end{
  padding: 1rem;
}
.end>text{
  font-size: 14px;
  display: inline-block;
  padding-bottom: 10rpx;
}
.end .divcs{
  display: flex;
  flex-wrap: wrap; 
}
.end .div{
  width: 48%;
  /* height: 480rpx; */
  margin-right: 2%;
  margin-bottom: 30rpx;
  border-radius: 20rpx;
  box-shadow: 3rpx 4rpx 2rpx #80ffff;
}
.end .div>image{
  /* width: 400rpx; */
  width: 100%;
  height: 240rpx;
  border-radius: 40rpx 40rpx 0 0;
}
.end .div>text{
  font-size: 14px;
  display: inline-block;
  min-height: 90rpx;
  padding: 0 10rpx;
}
.end .txt{
  display: flex;
  justify-content: space-between;
  margin-top: 10rpx;
  padding: 0 10rpx;
}
.end .txt view{
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.end .txt image{
  width: 50rpx;
  height: 50rpx;
}
</style>
