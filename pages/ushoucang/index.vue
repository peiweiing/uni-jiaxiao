<template>
	<view>
		
		<view class="divcs" v-if="room_status">
		  <view class="div" v-for="s in room_res">
		    <view class="img">
		      <image :src="s.pic"></image>
		    </view>
		    <view class="text">
		      <text class="t1">{{s.name}}</text>
		      <text class="t2">￥{{s.price}}</text>
		    </view>
		  </view>
		</view>
		<view class="divcs" v-else><text>{{room_res}}</text></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				room_status:true,
				room_res:[]
			}
		},
		onLoad() {
			this.get_collection_room();
		},
		methods: {
			get_collection_room(){
				var url = this.$url;
				uni.request({
					url:url+'Index/collection_room',
					data:{
						id:2
					},
					method:'POST',
					success: (e) => {
						if(e.data.error == 400){
							this.room_status = false;
							this.room_res = e.data.info;
						}else if(e.data.error == 200){
							this.room_res = e.data.data;
						}
					}
				})
			}
		}
	}
</script>

<style>

.divcs{
  background-color: #ccc;
  padding: 20rpx;
}
.div{
  margin-bottom: 20rpx;
  padding: 20rpx;
  background-color: #fff;
}
.div .img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.div image{
  height: 260rpx;
}
.div .text{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rpx;
}
.div .text .t1{
    overflow:hidden;/*溢出隐藏*/
    white-space:nowrap; /*不换行*/
    text-overflow:ellipsis;/*超出部分显示省略号*/
    -o-text-overflow:ellipsis;
}
.div .text .t2{
  text-align: right;
}
</style>
