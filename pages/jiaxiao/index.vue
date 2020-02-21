<template>
	<view>
		
		<view class='sort-wrap'>
		  <view class='sort-btn' data-index="daindex1" @click="choosesort1">
			推荐排序
			<image :src="bool1?imageurl1:imageurl2"></image>
		  </view>
		  <view class='sort-btn' data-index="daindex2" @click="choosesort2">
			距离优先
			<image :src="bool2?imageurl1:imageurl2"></image>
		  </view>
		  <view class='sort-btn' data-index="daindex3" @click="choosesort3">
			价格优先
			<image :src="bool3?imageurl1:imageurl2"></image>
		  </view>
		</view>
		
		<view class="divcs">
		  <view class="div" v-for="(v,i) in school_res" :data-id="v.id" @click="school_detail">
			<image :src="v.pic"></image>
			<view class="txt">
			  <text class="t1">{{v.name}}</text>
			  <text class="t2">{{v.description}}</text>
			  <text class="t3">￥{{v.price}}</text>
			</view>
		  </view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				school_res:[],
				bool1:true,
				bool2:true,
				bool3:true,
				imageurl1: "../../static/img/xiangxia.png",
				imageurl2: "../../static/img/xiangshang.png",
				// imageurl3: "../../static/img/xiangxia.png",
				// daindex1: 0,
				// daindex2: 0,
				// daindex3: 0,
				school_status: true,
				arr:[
					{src:'../../static/img/kaochang.png/',txt:'鹏程驾校报名费1888全程无忧等等',text:'硼砂发动快速了解士大夫是打开链接',money:'999'},
					{src:'../../static/img/kaochang.png/',txt:'鹏程驾校报名费1888全程无忧等等',text:'硼砂发动快速了解士大夫是打开链接',money:'999'},
					{src:'../../static/img/kaochang.png/',txt:'鹏程驾校报名费1888全程无忧等等',text:'硼砂发动快速了解士大夫是打开链接',money:'999'},
				]
			}
		},
		onLoad() {
			this.getdriving_school();
		},
		methods: {
			school_detail(e){
				var id = e.currentTarget.dataset.id;
				uni.navigateTo({
					url:'/pages/jiaxiaos/index?id='+id
				})
			},
			  choosesort1: function (e) {
				if (this.bool1 !== false) {
					this.bool1 = false
				}else{
					this.bool1=true
				}
			  },
			  choosesort2: function (e) {
				if (this.bool2 !== false) {
					this.bool2 = false
				}else{
					this.bool2=true
				}
			  },
			  choosesort3: function (e) {
				if (this.bool3 !== false) {
					this.bool3 = false
				}else{
					this.bool3=true
				}
			  },
			  getdriving_school(){
				  var url = this.$url;
				  uni.request({
				  	url:url+'Index/driving_school_all',
					success: (e) => {
						if(e.data.error == 200){
							this.school_res = e.data.data
						}else if(e.data.error == 400){
							this.school_status = false;
							this.school_res = e.data.info;
							
						}
					}
				  })
			  }
		}
	}
</script>

<style>
.sort-wrap{
  height:90rpx;
  background-color:#fff;
}
.sort-btn{
  width:33.333%;
  float:left;
  text-align: center;
  height:90rpx;
  line-height:90rpx;
  font-size: 14px;
  color:#333;
}
.sort-btn image{
  width: 22rpx;
  height: 24rpx;
}


.divcs{
  background-color: #ccc;
}
.div{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 20rpx;
  margin-bottom: 26rpx;
  background-color: #fff;
}
.div image{
  width: 40%;
  height: 220rpx;
  margin-right: 30rpx;
  border-radius: 30rpx;
}
.div .txt{
  width: 60%;
  display: flex;
  flex-flow: column;
  font-size: 14px;
}
.div .txt .t1{
  min-height: 76rpx;
    overflow:hidden;/*溢出隐藏*/
    text-overflow: ellipsis;/*超出部分显示省略号*/
    display:-webkit-box;/*弹性盒*/
    -webkit-box-orient:vertical;/*设置对象内元素的排列方式为垂直*/
    -webkit-line-clamp:2;/*限制块元素文本行数*/
}
.div .txt .t2{
  overflow:hidden;/*溢出隐藏*/
  white-space:nowrap; /*不换行*/
  text-overflow:ellipsis;/*超出部分显示省略号*/
  -o-text-overflow:ellipsis;
}
.div .txt .t3{
  margin-top: 50rpx;
  color: red;
  font-size: 18px;
}
</style>
