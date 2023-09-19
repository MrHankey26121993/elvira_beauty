<template>
  <div class="relative overflow-x-hidden site" id="main">
    <nav class="main-tool-bar">
      <div class="container mx-auto flex justify-between items-center md:px-4">
        <a href="#main" class="ml-4 md:ml-0 logo text-sm md:text-base cursor-default">
          <span class="md:p-2 px-2 py-1 bg-cream-light text-white ">elvira</span>
          <span class="md:p-2 px-2 py-1 text-cream-light">beauty</span>
        </a>
        <div class="hidden md:block">
          <ul class="flex gap-4">
            <li>
              <a href="#prestations">Prestations</a></li>
            <li><a href="#galerie">La galerie</a></li>
            <li>
              <a href="#tarifs">
                Les prix</a></li>
          </ul>
        </div>
        <div class="gap-4 hidden md:flex items-center">
          <a href="tel:+33753541350"
             class="cursor-pointer hover:text-cream font-bold"><span>+33 7 53 54 13 50</span></a>
          <a
            href="https://www.google.com/maps/place/19+Rue+Dor%C3%A9e,+30000+N%C3%AEmes,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@43.8374511,4.3592573,17z/data=!3m1!4b1!4m6!3m5!1s0x12b42d0c08888117:0x83717f9a9004a3db!8m2!3d43.8374511!4d4.3618322!16s%2Fg%2F11c43tfcf6?entry=ttu"
            target="_blank"
            class="cursor-pointer hover:text-cream font-bold text-sm"
          >19 rue Dorée
            <br>
            30000 Nimes
            <br>
            (Uniquement sur rdv!)</a>
          <button @click="openModalApp('application')"
                  class="bg-cream-light hover:bg-cream text-white px-4 py-3 font-bold uppercase tracking-widest">Être
            rappelé
          </button>
        </div>

        <div @click="openMenu" class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-mobile">
          <ul class="flex flex-col gap-4">
            <li @click="pushTo('#prestations')">Prestations</li>
            <li @click="pushTo('#galerie')">La galerie</li>
            <li @click="pushTo('#tarifs')">Les prix</li>
            <li>Contacts:</li>
            <li><a href="tel:+33753541350" target="_blank"
                   class="cursor-pointer hover:text-cream font-bold"><span>+33 7 53 54 13 50</span></a></li>
            <li>
              <a
                href="https://www.google.com/maps/place/19+Rue+Dor%C3%A9e,+30000+N%C3%AEmes,+%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B8%D1%8F/@43.8374511,4.3592573,17z/data=!3m1!4b1!4m6!3m5!1s0x12b42d0c08888117:0x83717f9a9004a3db!8m2!3d43.8374511!4d4.3618322!16s%2Fg%2F11c43tfcf6?entry=ttu"
                target="_blank"
              >19
                rue Dorée
                <br>
                30000 Nimes
                <br>
                (Uniquement sur rdv!)</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="md:mt-28 mt-12">
      <div class="section-main right ">
        <client-only>
          <VueSlickCarousel v-bind="settingsMainSlide">
            <template v-for="slide in slides">
              <div class="block_img">
                <img v-if="$src.isMobile()" :src="process.env.BASE_URL + slide.img_mob" class="appearance-none" alt="">
                <img v-else :src="process.env.BASE_URL + slide.img" class="appearance-none float-right" alt="">
                <div class="black_block ">
                  <div class="px-8 bg-cream-light md:px-16 py-6 md:py-12 flex flex-col overflow-hidden gap-8">
                    <p v-html="slide.description" class="h-[15rem] text-base md:text-xl overflow-auto break-words"></p>
                  </div>
                </div>
              </div>
            </template>
          </VueSlickCarousel>
        </client-only>
      </div>

    </section>
    <div id="prestations" class="container-chapter reveal_title left">
      <div class="pl-12 md:pl-24 relative">
        <h1 class="text-2xl md:text-5xl font-bold block">Prestations</h1>
      </div>
    </div>
    <section>
      <div class="section-main section-main__left left">
        <div class="relative">
          <img src="/img/service.webp" class="brightness-[0.92] h-auto hidden md:block appearance-none black_image_list"
               alt="">
          <div class="black_block_list flex flex-col p-16 -top-4">
            <template v-for="serviceData in service">
              <div class="list_item flex-wrap">
                <div class="list_item__data" @click="openCollapse(serviceData.id)">
                  <div class="list_item__def"></div>
                  <div class="text-xs md:text-base">{{ serviceData.name }}</div>
                  <div>+</div>
                </div>
                <div class="list_item__desc p-4 pb-0 w-full" :data-body="serviceData.id">
                  <p>{{ serviceData.description }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <div id="galerie" class="container-chapter_right reveal_title right">
      <div class="md:pr-24 pr-12 relative">
        <h1 class="text-2xl md:text-5xl font-bold block text-right">La galerie</h1>
      </div>
    </div>

    <section class="container mx-auto">
      <VueSlickCarousel v-bind="settingsPhoto">
        <template v-for="work in works">
          <div class="item-work">
            <img class="aspect-square" :src="process.env.BASE_URL + work.img" alt="">
          </div>
        </template>
      </VueSlickCarousel>
      <div class="justify-center flex mx-auto">
        <div>
          <nuxt-link to="/galerie" class="bg-cream-light block text-white
              px-4 py-3 text-black uppercase font-bold appearance-none tracking-widest w-auto hover:bg-cream">toutes les
            photos
          </nuxt-link>
        </div>
      </div>

    </section>

    <div id="tarifs" class="container-chapter reveal_title left">
      <div class="pl-12 md:pl-24 relative">
        <h1 class="text-2xl md:text-5xl font-bold block">Tarifs</h1>
      </div>
    </div>

    <section>
      <div class="container mx-auto">
        <div class="price p-4 md:p-0">
          <div class="price_list">
            <template v-for="(serviceData, key) in service">
              <div class="flex gap-4 md:flex-row flex-col">
                <div class="price_cat" :class="{'active': key === selectedPrice }" @click="showPrice(key)">
                  {{ serviceData.name }}
                </div>
                <price :data="serviceData.price" :ref="`price${serviceData.id}`"></price>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>

    <section class="my-16">
      <div class="container mx-auto">
        <div class=" text-center w-full md:w-[40rem] mx-auto have_quest">
          <div><p class="text-2xl md:text-5xl font-bold">Vous aves des questions?</p>
            <p class="text-2xl md:text-5xl font-bold">Veuillez laisser vos coordonnées pour être rappelé</p></div>
          <button
            @click="openModalApp('application')"
            class="bg-cream-light block text-white
              px-4 py-3 text-black uppercase font-bold appearance-none tracking-widest w-auto hover:bg-cream mx-auto mt-4">
            Être contacter
          </button>
        </div>
      </div>
    </section>

    <footer class="py-12 px-6 text-center md:text-left">
      <span class="md:text-base text-sm ">© 2023 Studio de maquillage permanent<br class="block md:hidden"> Elvira Beaty</span>
    </footer>

    <modal name="application" :adaptive="true" height="auto" :scrollable="true">
      <form @submit.prevent="pushForm" class="form">
        <h1 class="font-bold uppercase text-center">Veuillez laisser</h1>
        <div class="close" @click="closeModal('application')">
          <span></span>
          <span></span>
        </div>
        <div class="text-center">Veuillez saisir vos coordonnées pour être contacté au plus vite.</div>
        <div class="flex flex-col gap-2">
          <label>Nom prénom</label>
          <input required type="text" v-model="formData.name">
        </div>
        <div class="flex flex-col gap-2">
          <label>Téléphone</label>
          <input required type="text" v-model="formData.number">
        </div>
        <div class="flex flex-col gap-2">
          <label>Email</label>
          <input required type="email" v-model="formData.email">
        </div>
        <div class="flex flex-col gap-2">
          <label>Votre demande</label>
          <textarea required type="text" v-model="formData.comment"></textarea>
        </div>

        <div class="flex gap-4 justify-between">
          <button class="block border border-cream-light
              px-4 py-3 text-cream-light uppercase font-bold appearance-none transition tracking-widest w-auto hover:bg-cream hover:text-white mx-auto mt-4"
                  @click="closeModal('application')">
            Annuler
          </button>
          <button type="submit" class="bg-cream-light block text-white border border-cream-light
              px-4 py-3 text-black uppercase font-bold appearance-none transition tracking-widest w-auto hover:bg-cream hover:border-cream  mx-auto mt-4">
            Envoyer
          </button>
        </div>
      </form>
    </modal>

    <modal name="success" :adaptive="true" height="auto" :scrollable="true">
      <div class="form">
        <div class="close" @click="closeModal('success')">
          <span></span>
          <span></span>
        </div>
        <div class="text-center">Bonjour, votre demande d'être rappeler a était bien prise en compte. Veuillez patienter
          svp, je vous contacterai au plus vite possible.
          <br>
          Bonne journée et a bientôt !
        </div>
      </div>
    </modal>

    <modal name="content" :adaptive="true" height="auto" :scrollable="true">
      <div class="form">
        <div class="close" @click="closeModal('content')">
          <span></span>
          <span></span>
        </div>
        <p v-html="contentModal"></p>
      </div>
    </modal>

  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Price from "@/components/price.vue";
import VClamp from '@boyuai/vue-clamp'

export default {
  components: {Price, VClamp},
  mounted() {
    if (process.client) {
      let ScrollTrigger = this.$ScrollTrigger;
      let ths = this;
      //Для навбара

      this.$ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
      });
      //Главный title
      this.$gsap.fromTo('.black_block', {
        x: -1000,
        opacity: 0,
      }, {
        x: 0,
        opacity: 1,
      })

      //Услуги
      if (!this.$src.isMobile()) {
        this.$gsap.to(".black_block_list", {
          yPercent: 25,
          ease: "none",
          scrollTrigger: {
            trigger: ".black_image_list",
            // start: "top bottom", // the default values
            end: "bottom top",
            scrub: true,
            width: 0,
          },
        });

        this.$gsap.to(".black_block_list", {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: ".section-main__left",
            // start: "top bottom", // the default values
            end: "bottom top",
            scrub: true,
          },
        });

      }

      //Разделы секций
      this.$gsap.utils.toArray(".reveal_title").forEach(function (elem) {
        ths.hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          markers: false,
          onEnter: function () {
            ths.animateFrom(elem)
          },
          onEnterBack: function () {
            ths.animateFrom(elem, -1)
          },
        })
      })
      //Услуги появление картинки
      let elemService = this.$el.querySelector('.black_image_list');
      ScrollTrigger.create({
        trigger: elemService,
        markers: false,
        onEnter: function () {
          ths.$gsap.fromTo(elemService,
            {
              x: -3000,
              opacity: 0,
              blur: 4,
              autoAlpha: 0
            }, {
              duration: 2,
              x: 0,
              opacity: 1,
              autoAlpha: 1,
              ease: "expo",
              overwrite: "auto"
            });
        },
        onEnterBack: function () {
        },
        onLeave: function () {
        } // assure that the element is hidden when scrolled into view
      });
      //Мои работы появление блока
      let elemPhotos = this.$el.querySelector('.list-work');
      ScrollTrigger.create({
        trigger: elemPhotos,
        markers: false,
        onEnter: function () {
          ths.$gsap.fromTo(elemPhotos,
            {
              opacity: 0,
              scale: 0,
              blur: 4,
              autoAlpha: 0
            }, {
              duration: 2,
              scale: 1,
              opacity: 1,
              autoAlpha: 1,
              ease: "expo",
              overwrite: "auto"
            });
        },
        onEnterBack: function () {
        },
        onLeave: function () {
        } // assure that the element is hidden when scrolled into view
      });
      //Цены появление блока
      let elemPrice = this.$el.querySelector('.price');
      ScrollTrigger.create({
        trigger: elemPrice,
        markers: false,
        onEnter: function () {
          ths.$gsap.fromTo(elemPrice,
            {
              opacity: 0,
              scale: 0.8,
              blur: 4
            }, {
              duration: 1,
              scale: 1,
              opacity: 1
            });
        },
        onEnterBack: function () {
        },
        onLeave: function () {
        } // assure that the element is hidden when scrolled into view
      });
      //Остались вопросы появление блока
      let elemQuest = this.$el.querySelector('.have_quest');
      ScrollTrigger.create({
        trigger: elemQuest,
        markers: false,
        onEnter: function () {
          ths.$gsap.fromTo(elemQuest,
            {
              opacity: 0,
              scale: 0.8,
              blur: 4
            }, {
              duration: 1,
              scale: 1,
              opacity: 1
            });
        },
        onEnterBack: function () {
        },
        onLeave: function () {
        } // assure that the element is hidden when scrolled into view
      });

    }
  },

  async asyncData({$axios}) {
    let service, slides, works;
    await $axios.get('/data/content').then(resp => {
      service = resp.data.service
      slides = resp.data.slides
      works = resp.data.works
      console.log(service)
    });
    return {
      service: service, slides: slides, works: works
    }
  },
  methods: {
    animateFrom(elem, direction) {
      direction = direction || 1;
      let x = direction * 100;
      if (elem.classList.contains("left")) {
        x = -500;
      }
      if (elem.classList.contains("right")) {
        x = 500;
      }
      let y = 0;
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      this.$gsap.fromTo(elem, {x: x, y: y, opacity: 0, autoAlpha: 0}, {
        duration: 1.25,
        x: 0,
        y: 0,
        opacity: 1,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
      });
    },
    hide(elem) {
      this.$gsap.set(elem, {autoAlpha: 0});
    },
    openCollapse(id) {
      let bodyCollapses = this.$el.querySelectorAll('[data-body]')
      bodyCollapses.forEach(item => {
        console.log(Number(item.dataset.body) === Number(id))
        if (Number(item.dataset.body) === Number(id)) {
          console.log(item.clientHeight)
          console.log(item.clientHeight === 0)
          console.log(item.clientHeight === '0')
        }

        if (item.dataset.body === id && item.clientHeight === 0) {
          let p = item.querySelector('p'),
            heightP = p.clientHeight;

          console.log(p)

          this.$gsap.to(item, {
            height: `${heightP}px`,
            duration: 1
          })
          this.$gsap.to(item, {
            opacity: 1,
            duration: 0.5
          })
        } else {
          this.$gsap.to(item, {
            height: `0px`,
            opacity: 0,
            duration: 0.5
          })
        }
      })
    },
    showPrice(key) {
      console.log(typeof key)
      if (key !== this.selectedPrice) {
        this.selectedPrice = key;
        let allService = this.$el.querySelectorAll('.price_cat');

      }

    },
    openMenu() {
      let hamburger = this.$el.querySelector('.hamburger'),
        menu = this.$el.querySelector('.menu-mobile');
      hamburger.classList.toggle('active');
      menu.classList.toggle('active');
    },
    openModalApp(val) {
      this.$modal.show(val)
    },
    closeModal(val) {
      this.$modal.hide(val)
    },
    pushForm() {
      this.$axios.post('/data/form', this.formData).then(resp => {
        this.closeModal('application')
        this.openModalApp('success')
      })
    },
    pushTo(id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      this.openMenu();
    },
    showAll(content) {
      this.contentModal = content;
      this.openModalApp('content')
    }
  },
  comments: {
    VueSlickCarousel, VClamp
  },
  data() {
    return {
      settingsPhoto: {
        arrows: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 4,
              "slidesToScroll": 4,
              "infinite": true,
              "dots": true
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 1,
              "slidesToScroll": 1,
            }
          },

        ]
      },
      selectedPrice: 0,
      settingsMainSlide: {
        arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      formData: {
        name: null,
        number: null,
        email: null,
        comment: null
      },
      showBtn: false,
      contentModal: null,
    }
  }
}
</script>

<style>

</style>
