<template>
	<view class="por">
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
			<navigator v-for="(v,i) in arr" :key="i" :url="v.url">
			  <view>
				<image :src="v.src"></image>
				<text>{{v.txt}}</text>
			  </view>
			</navigator>
		</view>
		
		<view class="div" v-for="(v,i) in article_res" :key="i">
		  <view class="divtop" :data-id="v.id" @click="ondetails">
			<view class="one">
			  <image :src="v.pic"></image>
			  <text>{{v.name}}</text>
			</view>
			<view class="two">
			  <text class="two1">{{v.title}}</text>
			  <text class="two2"><rich-text :nodes="v.content"></rich-text></text>
			</view>
			<view class="three">
			  <text class="three1">{{v.create_time}}</text>
			  <text class="three2">考试须知</text>
			</view>
		  </view>
		<view class="huifuall">
			<view class="huifu">
				<text class="huifu1">{{}}蓝莲花:</text>
				<text class="huifu2">{{}}这个不错哦这个不错哦这个不错哦这个不错哦这个不错哦</text>
			</view>
			<view class="huifu">
				<text class="huifu1">{{}}蓝莲花:</text>
				<text class="huifu2">{{}}这个不错哦这个不错哦这个不错哦这个不错哦这个不错哦</text>
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
			<view @click="msg">
			  <image src="../../static/img/xpinglun.png"></image>
			  <text>评论</text>
			</view>
			<view>
			  <image src="../../static/img/xshoucang.png"></image>
			  <text>7</text>
			</view>
		  </view>
		</view>
		
		<view class="zhezhao" v-show="msgshow" @click="zhezhaoshow">
			<view class="pinglun" @click.stop>
				<view class="inp">
					<input type="text" value="" />
				</view>
				<view class="but">
					<text @click="hide(event)">取消</text>
					<button type="primary" @click="publish">发布</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msgshow:"flase",
				chakan:"0",
				arr:[
				  { src: "../../static/img/quanbu.png", txt: "全部", url: "" },
				  { src: "../../static/img/xiaoxizhongxin.png", txt: "招生素材", url: "" },
				  { src: "../../static/img/kechengbaoming.png", txt: "报名", url: "" },
				  { src: "../../static/img/fatie.png", txt: "发帖", url: "../newRelease/index" },
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
				article_status:true,
				article_res:[]
			}
		},
		onLoad() {
			this.getarticle_result();
		},
		methods: {
			msg(){
				thi.msgshow = true;
				this.focus = true;
			},
			hide:function(event){
				this.msgshow = false
			},
			zhezhaoshow(){
				this.msgshow = false
			},
			publish(){
				
			},
			ondetails(e){
				// chakan++;
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url: '/pages/details/index?id='+id
				});
			},
			getarticle_result(){
				var url = this.$url;
				uni.request({
					url:url+'Index/article_result',
					success: (e) => {
						if(e.data.error == 400){
							this.article_status = false;
							this.article_res = e.data.info;
						}else if(e.data.error == 200){
							this.article_res = e.data.data.data;
						}
					}
				})
			}
		}
	}
</script>

<style>
	.zhezhao{
		display: none;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 0;
		background-color: #555555;
	}
	.pinglun{
		width: 100%;
		position: absolute;
		bottom: 50rpx;
		padding: 20rpx;
		background-color: #fff;
		box-sizing: border-box;
	}
	.pinglun .inp{
		min-height: 100rpx;
		border: 1px solid #AAAAAA;
		background-color: #F1F1F1;
		margin: 0 20rpx;
	}
	.pinglun .inp input{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		min-height: 100rpx;
	}
	.pinglun .but{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 20rpx 20rpx 0;
	}
	.pinglun .but text{
		font-size: 16px;
		margin-right: 40rpx;
	}
	.pinglun .but button{
		height: 80rpx;
		line-height: 80rpx;
		margin: 0;
		padding: 0 40rpx;
		border-radius: 40rpx;
	}
	
	
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
	.icon view{
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
	
	.huifuall{
		padding: 20rpx;
		background-color: #ccc;
	}
	.huifu1{
		/* color: #007AFF; */
		padding-right: 10rpx;
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
