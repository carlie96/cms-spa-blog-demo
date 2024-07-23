import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import BlocksBuilder from './components/BlocksBuilder.vue'
import ContentBlock from './components/ContentBlock.vue'
import HeroBlock from './components/HeroBlock.vue'
import ListingBlock from './components/ListingBlock.vue'
import CardBlock from './components/CardBlock.vue'
import ImageBlock from './components/ImageBlock.vue'
import CtaBlock from './components/CtaBlock.vue'

const app = createApp(App)

app.use(router)

app.component('BlocksBuilder', BlocksBuilder)
app.component('HeroBlock', HeroBlock)
app.component('ContentBlock', ContentBlock)
app.component('ListingBlock', ListingBlock)
app.component('CardBlock', CardBlock)
app.component('ImageBlock', ImageBlock)
app.component('CtaBlock', CtaBlock)

app.mount('#app')
