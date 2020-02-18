<template>
	<view>
		<view class="head">
		  <Header :text="详情">
		  </Header>
		</view>
		
		<view class="top">
		  <view class="logo">
			<image :src="article.pic"></image>
			<view class="h1">
			  <text>{{article.name}}</text>
			  <view>
				<text>{{article.create_time}}</text>
				<text>人气 0</text>
			  </view>
			</view>
		  </view>
		  <view class="title">
			<text>{{article.title}}</text>
		  </view>
		  <view class="text">
			<text>
			  <rich-text :nodes="article.content"></rich-text>
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
				article:'',
				content:'',
				content_status:true,
				current: 0,
				items: [
					'回复',
					'点赞'
				]
			}
		},
		onLoad(options) {
			var id = options.id;
			this.get_article_content(id);
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index
				}
			},
			get_article_content(id){
				var url = this.$url;
				uni.request({
					url:url+'Index/article_evaluation',
					data:{
						id:id
					},
					method:'POST',
					success: (e) => {
						if(e.data.error == 200){
							this.article = e.data.data.article
							if(e.data.data.content.status == 200){
								this.content = e.data.data.content.res
							}else if(e.data.data.content.status == 400){
								this.content_status = false;
								this.content = e.data.data.content.res;
							}
						}else if(e.data.error == 400){
							uni.showModal({
								title:'提示',
								content:e.data.info,
								success:function(res){
									if(res.confirm){
										uni.navigateBack({
										    delta: 2
										});
									}else if(res.cancel){
										uni.navigateBack({
										    delta: 2
										});
									}
								}
							})
						}
					}
				})
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
