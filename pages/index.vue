<template>
  <div class="relative">
    <nav class=" bg-white px-4 fixed z-20 top-0 left-0 right-0 main-tool-bar">
      <div class="container mx-auto flex justify-between items-center ">
        <div class="logo text-sm md:text-base">
          <span class="md:p-2 px-2 py-1 bg-black text-white ">elvira</span>
          <span class="md:p-2 px-2 py-1">beauty</span>
        </div>
        <div class="hidden md:block">
          <ul class="flex gap-4">
            <li>Prestations</li>
            <li>La galerie</li>
            <li>Les prix</li>
          </ul>
        </div>
        <div class="gap-4 hidden md:flex items-center">
          <span class="cursor-pointer hover:text-cream font-bold"><span>+37520 - 4342 - 23423</span></span>
          <button class="bg-cream text-white px-4 py-3 font-bold uppercase tracking-widest">Être rappelé</button>
        </div>

        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
    <section class="md:mt-28 mt-12">
      <div class="section-main right ">
        <div class="block_img">

          <img src="/img/main-mob.webp" class="md:hidden h-full appearance-none" alt="">
          <img src="/img/main.jpg" class="hidden md:block h-full appearance-none float-right" alt="">

          <div class="flex black_block flex-col gap-8">
            <div class="px-8 bg-black md:px-16 py-6 md:py-12">
              <span class="text-xl md:text-4xl overflow-hidden break-words">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
              <span class="text-base md:text-xl overflow-hidden break-words">
               Aut cumque molestias nulla quo voluptate estias nulla quo voluptates.
            </span>
              <div>
                <button class="">
                  Être rappelé
                </button>
              </div>
            </div>


          </div>

        </div>
      </div>

    </section>
    <div class="container-chapter reveal_title left">
      <div class="pl-12 md:pl-24 relative">
        <h1 class="text-2xl md:text-5xl font-bold block">Prestations</h1>
      </div>
    </div>
    <section>
      <div class="section-main section-main__left left">
        <div class="relative">
          <img src="/img/service.webp" class="h-auto hidden md:block appearance-none black_image_list" alt="">

          <div class="black_block_list flex flex-col p-16 -top-4">
            <div class="list_item">
              <div class="list_item__def"></div>
              <div class="list_item__data">
                <div>Sourcils</div>
                <div>+</div>
              </div>
            </div>
            <div class="list_item">
              <div class="list_item__def"></div>
              <div class="list_item__data">
                <div>Eye-liner</div>
                <div>+</div>
              </div>
            </div>
            <div class="list_item">
              <div class="list_item__def"></div>
              <div class="list_item__data">
                <div>Lèvres</div>
                <div>+</div>
              </div>
            </div>
            <div class="list_item">
              <div class="list_item__def"></div>
              <div class="list_item__data">
                <div>Traitement des cicatrices</div>
                <div>+</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <div class="container-chapter_right reveal_title right">
      <div class="md:pr-24 pr-12 relative">
        <h1 class="text-2xl md:text-5xl font-bold block text-right">La galerie</h1>
      </div>
    </div>

    <section class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 list-work">
        <div class="item-work">
          <img src="/img/work1.jpg" alt="">
        </div>
        <div class="item-work">
          <img src="/img/work1.jpg" alt="">
        </div>
        <div class="item-work">
          <img src="/img/work1.jpg" alt="">
        </div>
        <div class="item-work">
          <img src="/img/work1.jpg" alt="">
        </div>

        <div class="md:col-span-4 flex mx-auto">
          <div>
            <button class="bg-black block text-white
              px-4 py-3 text-black uppercase font-bold appearance-none tracking-widest w-auto hover:bg-cream">Показать
              все
            </button>
          </div>
        </div>

      </div>
    </section>

    <div class="container-chapter reveal_title left">
      <div class="pl-12 md:pl-24 relative">
        <h1 class="text-2xl md:text-5xl font-bold block">Цены</h1>
      </div>
    </div>

    <section>
      <div class="container mx-auto">
        <div class="price p-4 md:p-0">
          <div class="price_list">
            <div class="price_cat active">Категория 1</div>
            <div class="price_cat">Категория 1</div>
            <div class="price_cat">Категория 1</div>
          </div>
          <div class="col-span-7 md:col-span-3">
            <table class="w-full">
              <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>1200</td>
              </tr>
              <tr>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                <td>1200</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section class="my-16">
      <div class="container mx-auto">
        <div class=" text-center w-full md:w-[40rem] mx-auto ">
          <div><p class="text-2xl md:text-5xl font-bold">Остались вопросы?</p>
            <p class="text-2xl md:text-5xl font-bold">Оставьте заявку и мы перезвоним</p></div>
          <button class="bg-black block text-white
              px-4 py-3 text-black uppercase font-bold appearance-none tracking-widest w-auto hover:bg-cream mx-auto mt-4">
            Оставить заявку
          </button>
        </div>
      </div>
    </section>

    <footer class="py-12 px-6 text-center md:text-left">
      <span class="md:text-base text-sm ">© 2023 Студия перманентного макияжа <br class="block md:hidden"> Elvira Beaty</span>
    </footer>
  </div>

</template>

<script>

export default {
  components: {},
  mounted() {
    if (process.client) {
      this.$ScrollTrigger.create({
        start: 'top -80',
        end: 99999,
        toggleClass: {className: 'main-tool-bar--scrolled', targets: '.main-tool-bar'}
      });

      this.$gsap.set('.black_block', {
        x: -1000,
        opacity: 0,
      })
      this.$gsap.to('.black_block', {
        x: 0,
        opacity: 1,
      })

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

      this.$gsap.to(".black_block_list", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".black_image_list",
          // start: "top bottom", // the default values
          end: "bottom top",
          scrub: true,
          width: 0,
        },
      });

      let ScrollTrigger = this.$ScrollTrigger;
      let ths = this;
      this.$gsap.utils.toArray(".reveal_title").forEach(function (elem) {
        ths.hide(elem);
        ScrollTrigger.create({
          trigger: elem,
          markers: true,
          onEnter: function() { ths.animateFrom(elem) },
          onEnterBack: function() { ths.animateFrom(elem, -1) },
          onLeave: function() { ths.hide(elem) } // assure that the element is hidden when scrolled into view
        })
      })
    }
  },
  created() {
    this.$axios.get('/data');
  },
  methods: {
    animateFrom(elem, direction) {
      direction = direction || 1;
      let x = direction * 100;
      if (elem.classList.contains("left")) {
        x = -500;
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
    }
  }
}
</script>

<style>

</style>
