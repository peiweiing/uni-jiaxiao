<template>
	<view>
		
		<view class="divcs" v-if="bm_status">
		  <view class="div" v-for="s in bm_res">
		    <view class="img">
		      <image :src="s.pic"></image>
		    </view>
		    <view class="text">
		      <text class="t1">{{s.name}}</text>
		      <text>￥{{s.price}}</text>
		    </view>
		  </view>
		</view>
		<view class="divcs" v-else><text>{{bm_res}}</text></view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				bm_status:true,
				bm_res: []
			}
		},
		onLoad() {
			this.get_baoming();
		},
		methods: {
			get_baoming(){
				var url = this.$url;
				uni.request({
					url:url+'Index/student_baoming',
					data:{
						student_id:2,
						type:2
					},
					method:'POST',
					success:(e)=>{
						if(e.data.error == 200){
							this.bm_res = e.data.data;
						}else if(e.data.error == 400){
							this.bm_status = false;
							this.bm_res = e.data.info;
						}
					}
				})
			}
		}
	}
</script>

<style>

.divcs{
  padding-left: 20rpx;
}
.div{
  padding: 20rpx 20rpx 20rpx 0;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.div .img{
  width: 40%;
  display: flex;
}
.div image{
  height: 200rpx;
}
.div .text{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20rpx;
}
.div .text .t1{
    overflow:hidden;/*溢出隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    display:-webkit-box;/*弹性盒*/
    -webkit-box-orient:vertical;/*设置对象内元素的排列方式为垂直*/
    -webkit-line-clamp:2;/*限制块元素文本行数*/
}
</style>
