<template>
	<view>
		
		<view>
			<uni-segmented-control :current="current" :values="items" :style-type="button" @clickItem="onClickItem" />
		</view>
		<view class="ment">
			<view v-show="current === 0">
				
				<view class="divcs">
				  <view class="div" v-for="s in arr">
					<view class="img">
					  <image :src="s.src"></image>
					</view>
					<view class="text">
					  <text class="t1">{{s.txt}}</text>
					  <text>￥{{s.money}}</text>
					</view>
				  </view>
				</view>
				
			</view>
			<view v-show="current === 1">
				
				<view class="divcs">
				  <view class="div" v-for="s in brr">
					<view class="img">
					  <image :src="s.src"></image>
					</view>
					<view class="text">
					  <text class="t1">{{s.txt}}</text>
					  <text>￥{{s.money}}</text>
					</view>
				  </view>
				</view>
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	export default {
		components:{
			uniSegmentedControl
		},
		data() {
			return {
				current: 0,
				items: [
					'驾校报名',
					'考场报名'
				],
				arr: [
				  { src: "../../static/img/kaochang.png", txt: "考场考场考场考场考场考场", money: "111" },
				  { src: "../../static/img/kaochang.png", txt: "考场考场考场考场考场考场", money: "111" },
				],
				brr: [
				  { src: "../../static/img/kaochang.png", txt: "考场考场考场考场考场考场", money: "222" },
				  { src: "../../static/img/kaochang.png", txt: "考场考场考场考场考场考场", money: "222" },
				],
				
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},
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
