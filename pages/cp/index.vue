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
            <button class="p-2 bg-green-100 border-gray border rounded-full" @click="editSlide(slide)">
              <edit/>
            </button>
            <button class="p-2 bg-rose-50 border-gray border rounded-full" @click="deleteData('slide', slide.id, key)">
              <remove/>
            </button>
          </p>
          <div class="col-span-3 md:col-span-1 h-1/3 overflow-auto  p-4 border rounded-xl">
            <div class="overflow-hidden">
              <div class=" " v-html="slide.description"></div>
            </div>



          </div>
          <div class="col-span-3 md:col-span-1">
            <div class="md:text-center font-bold">Картинка для компьютерной версии</div>
            <div>
              <img class="h-80 m-auto" :src="$config.url_api + slide.img" alt="">
            </div>
          </div>
          <div class="col-span-3 md:col-span-1">
            <div class="md:text-center font-bold">Картинка для мобильной версии</div>
            <div>
              <img class="h-80 m-auto" :src="$config.url_api + slide.img_mob" alt="">
            </div>
          </div>
        </div>
      </template>
    </div>

    <div class="grid grid-cols-4 gap-4 mb-4">
      <p class="text-xl col-span-2 font-bold">Категории</p>
      <div class="col-span-2 md:col-span-2 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full" @click="openCreateService()">
          <add/>
        </button>
      </div>

      <template v-for="(serviceData, key) in service">

        <div class="col-span-4 md:col-span-2 border border-gray rounded-xl p-4 cursor-default hover:drop-shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-bold">{{ serviceData.name }}</span>
            <div class="flex gap-4">
              <button class="p-2 bg-rose-50 border-gray border rounded-full"
                      @click="deleteData('service', serviceData.id, key)">
                <remove/>
              </button>
              <button class="p-2 bg-green-100 border-gray border rounded-full"  @click="editService(serviceData, key)">
                <edit/>
              </button>
            </div>

          </div>

          <hr class="my-2">
          <p>{{ serviceData.description }}</p>
          <hr class="my-2">
          <div class="price">
            <price :data="serviceData.price" :showData="false"></price>
          </div>

        </div>
      </template>
    </div>

    <div class="grid grid-cols-3 gap-4 mb-4">
      <p class="text-xl col-span-2 font-bold">Мои работы</p>
      <div class="col-span-3 md:col-span-1 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full" @click="openAddWorks()">
          <add/>
        </button>
      </div>

      <template v-for="(work, key) in works">
        <div class="col-span-3 md:col-span-1 border border-gray rounded-xl p-4 cursor-default hover:drop-shadow-md flex flex-col gap-4">

          <div class="flex justify-end gap-4">
            <button class="p-2 bg-green-100 border-gray border rounded-full" @click="editWork(work)">
              <edit/>
            </button>
            <button class="p-2 bg-rose-50 border-gray border rounded-full" @click="deleteData('work', work.id, key)">
              <remove/>
            </button>
          </div>
          <img class="aspect-square" :src="$config.url_api + work.img" alt="">

        </div>
      </template>
    </div>

    <div class="grid md:grid-cols-3 gap-4 mb-4">

      <div class="col-span-3 flex gap-4">
        <p class="text-xl col-span-2 font-bold">Контакты</p>
        <button class="p-2 bg-cyan-50 border-gray border rounded-full" @click="openEditContacts()">
          <edit/>
        </button>
      </div>

        <div class="col-span-1 border border-gray rounded-xl p-4 cursor-default flex flex-col gap-4">

          <div>
            <div class="font-bold">
              Номер:
            </div>
            <div>
              {{ contacts.number }}
            </div>
          </div>
          <div>
            <div class="font-bold">
              Адрес:
            </div>
            <div>
              {{ contacts.address }}
            </div>
          </div>
          <div>
            <div class="font-bold">
              Facebook:
            </div>
            <div>
              {{ contacts.fc_link }}
            </div>
          </div>
          <div>
            <div class="font-bold">
              Номер:
            </div>
            <div>
              {{ contacts.inst_link }}
            </div>
          </div>

        </div>

    </div>

    <modal name="slide" height="auto" scrollable :width="$src.isMobile() ? '100%' : '600px'">
      <div class="flex flex-col gap-4 p-4">
        <h1 class="text-xl font-bold">Новый слайд</h1>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Порядок</label>
          <input type="number" v-model="slide.order"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5">
        </div>
        <div>
          <Vueditor :ref="'slide'"></Vueditor>
        </div>

        <div class="grid grid-cols-2">

          <div class="col-span-1">Слайд для компютера
            <div class="aspect-video w-full neo overflow-hidden" @click="selectFile('desk')">
              <template v-if="slide.img">
                <img :src="getSrc('desk')" alt="">
              </template>
            </div>
          </div>
          <div class="col-span-1">Слайд для мобильного
            <div class="aspect-auto w-full neo overflow-hidden h-full" @click="selectFile('mob')">
              <template v-if="slide.img_mob">
                <img :src="getSrc('mob')" alt="">
              </template>
            </div>
          </div>

        </div>


        <div class="flex justify-center">
          <button class="bg-rose-300-300 px-3 py-1 rounded" @click="$modal.hide('slide')">Отмена</button>
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushSlide()">Создать</button>

        </div>
      </div>
    </modal>
    <modal name="service" height="auto" :width="$src.isMobile() ? '100%' : '600px'">
      <div class="flex flex-col gap-4 p-4">
        <h1 class="text-xl font-bold">
          <template v-if="serviceModel.id">Редактировать услугу</template>
          <template v-else>Новая услуга</template>
        </h1>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Название</label>
          <input v-model="serviceModel.name"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Описание</label>
          <textarea v-model="serviceModel.description"
                    rows="4"
                    class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                    type="text"></textarea>
        </div>

        <div>
          <span>Цены</span>
          <template v-for="(price, key) in serviceModel.price">
            <div class="flex gap-4 items-center mb-2">
              <div>
                <label for="">Название</label>
                <input class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                       v-model="price.description"/>
              </div>
              <div>
                <label for="">Цена</label>
                <input class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                       v-model="price.price"/>
              </div>
              <button @click="removePrice(key)">
                <remove/>
              </button>
            </div>
          </template>
          <hr class="my-2">
          <div class="flex justify-center mt-4">
            <button class="bg-green-100 px-3 py-1 rounded" @click="addPrice">Добавить цену</button>
          </div>
        </div>

        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushService()">
            <template v-if="serviceModel.id">Сохранить</template>
            <template v-else>Создать</template>
          </button>
        </div>
      </div>
    </modal>
    <modal name="contacts" height="auto" :width="$src.isMobile() ? '100%' : '600px'">
      <div class="flex flex-col gap-4 p-4">
        <h1 class="text-xl font-bold">
          Редактировать контакты
        </h1>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Номер</label>
          <input v-model="editContact.number"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Адрес</label>
          <input v-model="editContact.address"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>

        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Facebook</label>
          <input v-model="editContact.fc_link"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>
        <div class="grid grid-cols-5">
          <label class="md:col-span-2 col-span-5">Instagram</label>
          <input v-model="editContact.inst_link"
                 class="appearance-none border border-gray rounded px-2 md:col-span-3 col-span-5"
                 type="text">
        </div>

        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushContacts()">
           Сохранить
          </button>
        </div>
      </div>
    </modal>
    <modal name="works">
      <div>
        <div>
          <template v-if="work.img">
          <img @click="selectFile('work')" class="aspect-square rounded-xl flex md:w-1/3 m-auto my-4 " :src="getSrc('work')" alt="">
          </template>
          <template v-else>
            <div class="border border-gray rounded-xl aspect-square flex md:w-1/3 m-auto my-4 " @click="selectFile('work')">
                <span class="m-auto font-bold text-3xl">+</span>
            </div>
          </template>

        </div>

        <div class="flex justify-center">
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushWork()">
            <template v-if="slide.id">Сохранить</template>
            <template v-else>Создать</template>
          </button>
        </div>
      </div>
    </modal>
    <modal name="delete" height="auto" width="300">
      <div class="p-4">
        <div class="text-center">
          Вы действительно хотите удалить {{getDeleteType()}}?

        </div>

        <div class="flex justify-center gap-4">
          <button class="bg-red-300 px-3 py-1 rounded" @click="$modal.hide('delete')">
            Нет
          </button>
          <button class="bg-blue-300 px-3 py-1 rounded" @click="pushDelete()">
            Да
          </button>
        </div>
      </div>
    </modal>

  </div>
</template>

<script>
import Add from "~/components/svg/add.vue";
import Remove from "~/components/svg/remove.vue";
import Price from "@/components/price.vue";
import Edit from "@/components/svg/edit.vue";
import {content} from "../../tailwind.config";

class Slide {
  title = null
  order = null
  description = null
  img = null
  img_mob = null
}

class Work {
  img = null
}

class Service {
  name = null
  description = null
  price = []
}

class PriceModel {
  description = null
  price = null
}

class Contact {
  number = null
  address = null
  fc_link = null
  inst_link = null
}

export default {
  name: "index",
  components: {Edit, Price, Remove, Add},
  layout: 'admin',
  middleware: 'auth',
  async asyncData({$axios}) {
    let service, slides, works, contacts;
    await $axios.get('/data/content').then(resp => {
      service = resp.data.service
      slides = resp.data.slides
      works = resp.data.works
      contacts = resp.data.contacts
    });
    return {
      service: service, slides: slides, works: works, contacts: contacts,
    }
  },
  data() {
    return {
      slide: new Slide(),
      serviceModel: new Service(),
      priceModel: new PriceModel(),
      work: new Work(),
      deleteId: null,
      deleteType: null,
      deleteKey: null,
      editContact: new Contact(),
    }
  },
  methods: {
    content() {
      return content
    },
    openAddWorks() {
      this.work = new Work();
      this.$modal.show('works')
    },
    openEditContacts() {
      this.editContact = JSON.parse(JSON.stringify(this.contacts));
      this.$modal.show('contacts')
    },
    editWork(work) {
      this.work = JSON.parse(JSON.stringify(work))
      this.$modal.show('works')
    },
    editSlide(slide) {
      this.slide = JSON.parse(JSON.stringify(slide));

      this.$modal.show('slide')
      setTimeout(() => {
        this.$refs['slide'].setContent(this.slide.description)
      }, 500)


    },
    editService(service) {
      this.serviceModel = JSON.parse(JSON.stringify(service));
      this.$modal.show('service')
    },
    openCreateSlide() {
      this.slide = new Slide();
      this.$modal.show('slide')
    },
    openCreateService() {
      this.slide = new Service();
      this.$modal.show('service')
    },
    pushSlide() {
      this.$axios.post('data/slide', this.slide).then(resp => {
        if (typeof this.slide.id !== 'undefined') {
          this.slides.forEach((item, key) => {
            if (item.id === resp.data.id) {
              this.$set(this.slides, key, resp.data);
            }
          })
        } else {
          this.slides.push(resp.data);
        }

      }).finally(() => {
        this.$modal.hide('slide')
        this.slide = new Slide();
      });
    },
    pushService() {
      this.serviceModel.price.forEach((item, key) => {
        if(!item.price || !item.description) {
          this.serviceModel.price.splice(key, 1);
        }
      })
      this.$axios.post('data/service', this.serviceModel).then(resp => {
        if (typeof this.serviceModel.id !== 'undefined') {
          this.service.forEach((item, key) => {
            if (item.id === resp.data.id) {
              this.$set(this.service, key, resp.data);
            }
          })
        } else {
          this.service.push(resp.data);
        }

      }).finally(() => {
        this.$modal.hide('service')
        this.serviceModel = new Service();
      });
    },
    pushWork() {
      this.$axios.post('data/works', this.work).then(resp => {
        if (typeof this.work.id !== 'undefined') {
          this.works.forEach((item, key) => {
            if (item.id === resp.data.id) {
              this.$set(this.works, key, resp.data);
            }
          })
        } else {
          this.works.push(resp.data);
        }

      }).finally(() => {
        this.$modal.hide('works')
        this.work = new Service();
      });
    },
    pushContacts() {
      this.$axios.post('data/contacts', this.editContact).then(resp => {
        this.contacts = resp.data;
      }).finally(() => {
        this.$modal.hide('contacts')
        this.editContact = new Contact();
      });
    },
    selectFile(type) {
      let input = document.createElement('input');
      input.type = 'file';
      input.onchange = e => {
        let file = e.target.files[0];
        // console.log(e.target.files)
        this.getBase64(file, type)
      }
      input.click();
    },
    getBase64(file, type) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(type)
        if (type === 'desk') {
          this.slide.img = reader.result
        } else if(type === 'mob') {
          this.slide.img_mob = reader.result
        } else if(type === 'work') {
          this.work.img = reader.result
        }

      };
      reader.onerror = function (error) {
        // console.log('Error: ', error);
      };
    },
    getSrc(type) {
      if (type === 'desk') {
        if (this.slide.img.includes('uploads')) {
          return this.$config.url_api + this.slide.img;
        } else {
          return this.slide.img;
        }
      }
      if(type === 'mob') {
        if (this.slide.img_mob.includes('uploads')) {
          return this.$config.url_api + this.slide.img_mob;
        } else {
          return this.slide.img_mob;
        }
      } else if(type === 'work') {
        if (this.work.img.includes('uploads')) {
          return this.$config.url_api + this.work.img;
        } else {
          return this.work.img;
        }
      }

    },
    addPrice() {
      let price = new PriceModel();
      this.serviceModel.price.push(price);
    },
    removeSlide(id, key) {
      this.$axios.delete(`data/slide?id=${id}`).then(resp => {
        if (resp.data) {
          this.slides.splice(key);
        }
      })
    },
    removeService(id, key) {
      this.$axios.delete(`data/service?id=${id}`).then(resp => {
        if (resp.data) {
          this.service.splice(key);
        }
      })
    },
    removeWork(id, key) {
      this.$axios.delete(`data/works?id=${id}`).then(resp => {
        if (resp.data) {
          this.works.splice(key);
        }
      })
    },
    saveText(key) {
      this.slide = this.slides[key];
      this.slide.description =this.$refs['slide'][key].getContent();
      this.pushSlide();

    },
    deleteData(type, id, key) {
      this.deleteType = type;
      this.deleteId = id;
      this.deleteKey = key;
      this.$modal.show('delete')
    },
    getDeleteType() {
      if(this.deleteType === 'slide') {
        return 'слайд';
      }
      if(this.deleteType === 'service') {
        return 'категорию'
      }
      if(this.deleteType === 'work') {
        return 'фото'
      }
    },
    pushDelete() {
      if(this.deleteType === 'slide') {
        this.removeSlide(this.deleteId, this.deleteKey)
      }
      if(this.deleteType === 'service') {
        this.removeService(this.deleteId, this.deleteKey)
      }
      if(this.deleteType === 'work') {
        this.removeWork(this.deleteId, this.deleteKey)
      }
    },
    removePrice(key) {
      this.serviceModel.price.splice(key, 1);
    }
  },
  created() {
    if(!this.$auth.loggedIn) {
      this.$router.push('/login')
    }

  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
