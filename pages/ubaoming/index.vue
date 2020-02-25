<template>
	<view>
		
		<view>
			<uni-segmented-control :current="current" :values="items" :style-type="button" @clickItem="onClickItem" />
		</view>
		<view class="ment">
			<!-- <view v-show="current === 0">
				
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
				
			</view> -->
		</view>
		
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
	import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue'
	export default {
		components:{
			uniSegmentedControl
		},
		data() {
			return {
				current: 0,
				userid:'',
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
				
				bm_status:true,
				bm_res: []
			}
		},
		onLoad() {
			this.userid=uni.getStorageSync('userinfo')['id'];
			this.get_baoming(2);
		},
		methods: {
			onClickItem(index) {
				if(index == 0){
					this.get_baoming(2)
				}else{
					this.get_baoming(1);
				}
				if (this.current !== index) {
					this.current = index
				}
			},
			get_baoming(type){
				var url = this.$url;
				uni.request({
					url:url+'Index/student_baoming',
					data:{
						student_id:this.userid,
						type:type
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
