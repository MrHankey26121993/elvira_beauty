<template>
  <div class="container mx-auto mt-8 p-4 md:p-0">
    <h1 class="text-3xl font-bold text-center">Настройка сайта</h1>

    <div class="grid grid-cols-12 gap-4 mb-4">
      <p class="text-xl font-bold col-span-6">Слайдер</p>
      <div class="col-span-6 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full" @click="openCreateSlide()">
          <add/>
        </button>
      </div>
      <template v-for="(slide, key) in slides">
        <div class="col-span-12 grid grid-cols-3 gap-4">
          <p class="text-xl font-bold col-span-3 text-center">Слайд {{ key + 1 }}
            <button class="p-2 bg-rose-50 border-gray border rounded-full">
              <remove/>
            </button>
          </p>
          <div class="col-span-3 md:col-span-1">
            <div class="md:text-center">Описание</div>
            <div>{{ slide.description }}</div>
          </div>
          <div class="col-span-3 md:col-span-1">
            <div class="md:text-center">Картинка для компьютерной версии</div>
            <div>
              <img class="h-80 m-auto" :src="$config.url_api + slide.img" alt="">
            </div>
          </div>
          <div class="col-span-3 md:col-span-1">
            <div class="md:text-center">Картинка для мобильной версии</div>
            <div>
              <img class="h-80 m-auto" :src="$config.url_api + slide.img_mob" alt="">
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <p class="text-xl col-span-2 font-bold">Категории</p>
      <div class="col-span-2 md:col-span-2 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full" @click="openCreateService()">
          <add/>
        </button>
      </div>

      <template v-for="serviceData in service">

        <div class="col-span-4 md:col-span-2 border border-gray rounded-xl p-4 cursor-default hover:drop-shadow-md">
          <span class="font-bold">{{ serviceData.name }}</span>
          <hr class="my-2">
          <p>{{ serviceData.description }}</p>
          <hr class="my-2">
          <div class="price">
            <price :data="serviceData.price" :showData="false"></price>
          </div>

        </div>
      </template>
    </div>
    <modal name="slide" height="auto" :width="$src.isMobile() ? '100%' : '600px'">
      <div class="flex flex-col gap-4 p-4">
        <h1 class="text-xl font-bold">Новый слайд</h1>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Заголовов</label>
          <input v-model="slide.title" class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Описание</label>
          <textarea v-model="slide.description"
                    class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                    type="text"></textarea>
        </div>
        <div>Слайд для компютера</div>
        <div>Слайд для мобильного</div>

        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushSlide()">Создать</button>
        </div>
      </div>
    </modal>
    <modal name="service" height="auto" :width="$src.isMobile() ? '100%' : '600px'">
      <div class="flex flex-col gap-4 p-4">
        <h1 class="text-xl font-bold">Новая услуга</h1>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Название</label>
          <input v-model="serviceModel.title" class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Описание</label>
          <textarea v-model="serviceModel.description"
                    class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                    type="text"></textarea>
        </div>
        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushSlide()">Создать</button>
        </div>
      </div>
    </modal>
    <modal name="photos">This is an example</modal>

  </div>
</template>

<script>
import Add from "~/components/svg/add.vue";
import Remove from "~/components/svg/remove.vue";
import Price from "@/components/price.vue";

class Slide {
  title = null
  description = null
  img = null
  img_mob = null
}

class Service {
  name = null
  description = null
  price = []
}

class PriceModel {
  description = null
  price = null
  value = null
}

export default {
  name: "index",
  components: {Price, Remove, Add},
  layout: 'admin',
  async asyncData({$axios}) {
    let service, slides;
    await $axios.get('/data/content').then(resp => {
      service = resp.data.service
      slides = resp.data.slides
      console.log(service)
    });
    return {
      service: service, slides: slides
    }
  },
  data() {
    return {
      slide: new Slide(),
      serviceModel: new Service(),
      priceModel: new PriceModel()
    }
  },
  methods: {
    openCreateSlide() {
      this.$modal.show('slide')
    },
    openCreateService() {
      this.$modal.show('service')
    },
    pushSlide() {
      this.$axios.post('data/slide', this.slide);
    }
  }
}
</script>

<style scoped>

</style>
