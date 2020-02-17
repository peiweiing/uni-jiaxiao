<template>
	<view>
		<view class="head">
		  <Header :text="详情">
		  </Header>
		</view>
		
		<view class="top">
		  <view class="logo">
			<image src="../../static/img/logo.png"></image>
			<view class="h1">
			  <text>大新县新运机动车驾驶培训</text>
			  <view>
				<text>2018-12-12</text>
				<text>人气 0</text>
			  </view>
			</view>
		  </view>
		  <view class="title">
			<text>大新科目一、四注意事项</text>
		  </view>
		  <view class="text">
			<text>
			  科目一、科目四学院注意事项
			  各位学员请注意:下面宣读一下考生须知，请大家保持考场安静，认真倾听。
			  1.候考的学院请照位置坐好，不要站在通道，点到名字的学院才可以存东西，存包柜的条码纸只可以使用依次，使用过的条码纸请丢到垃圾桶内，不要随地乱扔，披头散发的学院请将头发扎起来。
			</text>
		  </view>
		</view>
		<view class="seo">
		  <image src="../../static/img/logo_2.png"></image>
		  <view>
			<text>考试须知</text>
			<view>
			  <view>
				<image></image>
				<text>0人关注</text>
			  </view>
			  <view>
				<image></image>
				<text>2个话题</text>
			  </view>
			</view>
		  </view>
		</view>
		
		<view>
			<uni-segmented-control :current="current" :values="items" :style-type="button" @clickItem="onClickItem" />
		</view>
		<view>
			<view v-show="current === 0">
				这是1
			</view>
			<view v-show="current === 1">
				这是2
			</view>
		</view>
		
		<view class="foot">
		  <view class="end">
			<text class="arrow" bintap="onforum"></text>
			<input placeholder="来说说我的看法..."></input>
			<image src="../../static/img/xfenxiang.png"></image>
			<image src="../../static/img/xshoucang.png"></image>
		  </view>
		</view>
		
	</view>
</template>

<script>
	import Header from '../../components/header.vue'
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	export default {
		components:{
			Header,
			uniSegmentedControl
		},
		data() {
			return {
				current: 0,
				items: [
					'回复',
					'点赞'
				]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			}
		}
	}
</script>

<style>
	.top{
	  padding: 20rpx;
	}
	.top .logo{
	  display: flex;
	  align-items: center;
	}
	.top .h1{
	  display: flex;
	  flex-flow: column;
	  margin-left: 20rpx;
	}
	.top .h1>text{
	  font-size: 14px;
	  font-weight: bolder;
	}
	.top .h1 view{
	  display: flex;
	}
	.top .h1 view text{
	  font-size: 12px;
	  margin-right: 10rpx;
	  color: #666;
	}
	.top .logo>image{
	  width: 80rpx;
	  height: 80rpx;
	}
	.top .title{
	  font-size: 14px;
	  font-weight: bolder;
	}
	.top .text{
	  font-size: 14px;
	  color: #666;
	}

	.seo{
	  padding: 20rpx 0;
	  display: flex;
	  align-items: center;
	  border-top: 1px solid #ccc;
	  border-bottom: 30rpx solid #ccc;
	}
	.seo>image{
	  width: 60rpx;
	  height: 60rpx;
	  margin: 0 40rpx;
	  font-weight: bolder;
	}
	.seo>view{
	  display: flex;
	  flex-flow: column;
	}
	.seo view image{
	  width: 40rpx;
	  height: 40rpx;
	}
	.seo>view>view{
	  display: flex;
	}
	.seo>view>view>view{
	  display: flex;
	  align-items: center;
	  font-size: 12px;
	}

	.foot{
	  position: sticky;
	  bottom: 0;
	  /* z-index: 999; */
	  background-color: #fff;
	}
	.end{
	  padding: 20rpx;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  border-top: 1px solid #ccc;
	}
	.end input{
	  font-size: 12px;
	  background-color: rgb(239,239,239);
	  padding: 6rpx 40rpx;
	}
	.end image{
	  width: 50rpx;
	  height: 50rpx;
	}

	.arrow{
	  width: 25rpx;
	  height:25rpx;
	  margin-left: 30rpx;
	  border-left: 4rpx solid #000;
	  border-top: 4rpx solid #000;
	  transform: rotate(-45deg);
	}
</style>
