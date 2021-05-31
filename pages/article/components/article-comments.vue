<template>
  <div>
    <form class="card comment-form"
    @submit.prevent="onSubmit"
    >
      <div class="card-block">
        <textarea class="form-control" 
        placeholder="Write a comment..."  rows="3"
        v-model="commentData">
        </textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
        Post Comment
        </button>
      </div>
    </form>
    <div class="card" v-for="comment in comments" 
    :key = "comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author" 
        :to="{ name:'profile', params:{
          username: comment.author.username
        }}" >
          <img :src="comment.author.image" style="width:20px"/>
        </nuxt-link>
        &nbsp;
        <nuxt-link class="comment-author" 
        :to="{ name:'profile', params:{
          username: comment.author.username
        }}" >
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY')}}</span>
        <span class="mod-options" v-if="comment.author.username === article.author.username ">
          <i class="ion-trash-a" @click="delComment(comment)"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { addComments , deleteComment ,getComments} from '@/api/article.js'
import { mapState } from 'vuex'
export default {
  name: 'ArticleComments',
  props:{
    article:{
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [],  //文章评论列表
      commentData: null
    }
  },
  async mounted() {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
    console.log(this.article)
    console.log(this.comments)
  },
  computed:{
    ...mapState(['user'])
  },
  methods: {
    async onSubmit(){
      if(this.commentData){
        const { data } = await addComments({comment:{body: this.commentData}},this.article.slug)
        this.$nextTick(()=>{
          this.comments.splice(0,0,data.comment)
        })
        this.commentData = null
      }
    },
    //删除评论
    delComment (comment) {
      const { id } = comment
      deleteComment(this.article.slug ,id)
      this.comments = this.comments.filter( item => item.id !== id)
    }
  },
}
</script>