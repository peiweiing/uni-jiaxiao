<template>
	<view>
		
		<view class="divcs">
		  <view class="div" v-for="s in arr">
		    <view class="img">
		      <image :src="s.src"></image>
		    </view>
		    <view class="text">
		      <text class="t1">{{s.txt}}</text>
		      <text class="t2">￥{{s.money}}</text>
		    </view>
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr:[
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				  { src: "../../static/img/lunbo.png", txt: "考场考场考场考场考场", money: "999" },
				]
			}
		},
		methods: {
			
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
