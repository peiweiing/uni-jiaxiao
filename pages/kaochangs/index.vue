<template>
	<view>
		
		<view class="top">
		  <text>{{detail.name}}</text>
		</view>
		
		<view class="lunbo">
			<uni-swiper-dot :current="current" :mode="mode" :dots-styles="dotsStyles">
				<swiper class="swiper-box u-wrp-bnr" @change="change">
					<!-- <swiper-item v-for="(item ,index) in info" :key="index"> -->
					<swiper-item>
						<view class="swiper-item">
							<image :src="detail.pic" class='u-img-slide' mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		
		<view class="icon">
		  <view v-for="(v,i) in icon">
		    <image :src="v.src"></image>
		    <text>{{v.txt}}</text>
		  </view>
		</view>
		
		<view class="main">
		  <view class="kaochang">
		    <text class="t1">考场信息</text>
		    <text class="t2">{{detail.description}}</text>
		  </view>
		  <form @submit="subjectSubmit">
		  <view class="baoming">
		    <text>报名提交</text>
		    <view class="form">
		      <view class="view1">
		        <view>
		          <text>姓名：</text>
		          <input name="name"></input>
		        </view>
		        <view>
		          <text>性别：</text>
		          <input name="sex"></input>
		        </view>
		        <view>
		          <text>招考驾校：</text>
		          <input name="school"></input>
		        </view>
		        <view>
		          <text>考试科目：</text>
		          <input name="subject"></input>
		        </view>
		      </view>
		      <view class="view2">
		        <view>
		          <text>学员身份证号：</text>
		          <input name="sand"></input>
		        </view>
		        <view>
		          <text>教练姓名：</text>
		          <input name="coach"></input>
		        </view>
		        <view>
		          <text>教练联系方式：</text>
		          <input name="coach_phone"></input>
		        </view>
		      </view>
		      </view>
		  </view>
		  <button form-type="submit">提交</button>
		  </form>
		</view>
		
	</view>
</template>

<script>
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components:{
			uniSwiperDot
		},
		data() {
			return {
				"id":'',
				"detail":[],
				
				current: 0,
				mode: 'default',
				dotsStyles: {},
				info: [
				  { "url": "../../static/img/lunbo.png" },
				  { "url": "../../static/img/lunbo.png" },
				  { "url": "../../static/img/lunbo.png" },
				  { "url": "../../static/img/lunbo.png" },
				],
				icon:[
				  { src: "../../static/img/xchakan.png", txt: "位置导航", url: ""},
				  { src: "../../static/img/xchakan.png", txt: "报名", url: ""},
				  { src: "../../static/img/xchakan.png", txt: "考场视频", url: ""},
				],
			}
		},
		onLoad(options) {
			this.id = options.id;
			this.room_detail(options.id)
		},
		methods: {
			room_detail(id){
				var url = this.$url;
				uni.request({
					url:url+'Index/room_detail',
					data:{
						room_id:id
					},
					method:'POST',
					success: (e) => {
						if(e.data.error == 400){
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
						}else if(e.data.error == 200){
							this.detail = e.data.data
						}
					},
					fail: (res) => {
						uni.showToast({
							title:'网络请求错误',
							icon:'none',
							duration:2000
						})
					}
				})
			},
			subjectSubmit:function(e){
				var formdata = e.detail.value
				var url = this.$url;
				uni.request({
					url:url+'Index/student_apply',
					data:{
						student_id:1,
						student_name:formdata.name,
						driving_room_id:this.detail.id,
						room_name:this.detail.name,
						
					},
					method:'POST',
					success: (res) => {
						console.log(res);
					}
				})
			}
		}
	}
</script>

<style>
.top{
  padding: 20rpx;
  display: flex;
  justify-content: center;
}
.top text{
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 10rpx 0;
  background-color: rgb(237, 237, 237);
  border-radius: 30rpx;
}

.lunbo{
  padding: 1rem;
}
.u-wrp-bnr {
  width: 100%;
}
.u-img-item{
  border-radius: 20rpx;
}
.u-img-slide {
  width: 100%;
  height: 340rpx;
  border-radius: 20rpx;
}

.icon{
  display: flex;
  justify-content: space-around;
  padding: 50rpx 100rpx;
}
.icon>view{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon image{
  width: 100rpx;
  height: 100rpx;
}

.main{
  padding: 30rpx;
  background-color: rgb(245, 245, 245);
}
.main .kaochang{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-bottom: 30rpx;
  padding: 20rpx;
  border-radius: 40rpx;
}
.main .kaochang .t1{
  padding: 10rpx 0;
}
.main .kaochang .t2{
  font-size: 12px;
  line-height: 70rpx;
  padding: 10rpx;
  border-top: 1px solid rgb(245, 245, 245);
  border-bottom: 1px solid rgb(245, 245, 245);
    overflow:hidden;/*溢出隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    display:-webkit-box;/*弹性盒*/
    -webkit-box-orient:vertical;/*设置对象内元素的排列方式为垂直*/
    -webkit-line-clamp:3;/*限制块元素文本行数*/
}
.main .baoming{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 40rpx;
  padding: 20rpx;
}
.main .baoming>text{
  padding: 10rpx 0;
}
.main .baoming .form{
  margin: 10rpx;
  border: 1px solid #ccc;
}
.main .baoming .form>view{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.main .baoming .form .view1 view{
  font-size: 12px;
  width: 49.2%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
}
.main .baoming .form .view1 view:nth-child(odd){
  border-right:none;
}
.main .baoming .form .view2 view{
  font-size: 12px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
}
.main .baoming .form .view1 input{
  width: 50%;
}
.main .baoming .form .view2 input{
  width: 60%;
}

.main .baoming button{
  width: 70%;
  height: 2rem;
  line-height: 2rem;
  font-size: 16px;
  margin: 20rpx auto;
  border-radius: 30rpx;
}
</style>
