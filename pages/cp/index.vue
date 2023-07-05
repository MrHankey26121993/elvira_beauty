<template>
  <div class="container mx-auto mt-8">
    <h1 class="text-3xl font-bold text-center">Настройка сайта</h1>

    <div class="grid grid-cols-12 gap-4">
      <p class="text-xl font-bold col-span-6">Слайдер</p>
      <div class="col-span-6 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full"><add/></button>
      </div>
      <p class="text-xl font-bold col-span-12 text-center">Слайд 1
      <button class="p-2 bg-rose-50 border-gray border rounded-full"><remove/></button>
      </p>
      <div class="col-span-4">
        <div class="text-center">Описание</div>
        <div>///</div>
      </div>
      <div class="col-span-4">
        <div class="text-center">Картинка для компьютерной версии</div>
        <div></div>
      </div>
      <div class="col-span-4">
        <div class="text-center">Картинка для мобильной версии</div>
        <div></div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-4">
      <p class="text-xl col-span-2 font-bold">Категории</p>
      <div class="col-span-2 place-self-end">
        <button class="p-2 bg-cyan-50 border-gray border rounded-full"><add/></button>
      </div>
      <div class="col-span-2 border border-gray rounded-xl p-4">
        <span class="font-bold">Брови</span>
        <hr class="my-2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae debitis dolor fuga id nihil officia
          ullam, voluptate? Accusamus commodi consequuntur dolore iusto labore laboriosam non odio quaerat quam,
          tenetur.</p>
      </div>
      <div class="col-span-2 border border-gray rounded-xl p-4">
        <span>Брови</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae debitis dolor fuga id nihil officia
          ullam, voluptate? Accusamus commodi consequuntur dolore iusto labore laboriosam non odio quaerat quam,
          tenetur.</p>
      </div>
      <div class="col-span-2 border border-gray rounded-xl p-4">
        <span>Брови</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae debitis dolor fuga id nihil officia
          ullam, voluptate? Accusamus commodi consequuntur dolore iusto labore laboriosam non odio quaerat quam,
          tenetur.</p>
      </div>
      <div class="col-span-2 border border-gray rounded-xl p-4">
        <span>Брови</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae debitis dolor fuga id nihil officia
          ullam, voluptate? Accusamus commodi consequuntur dolore iusto labore laboriosam non odio quaerat quam,
          tenetur.</p>
      </div>
    </div>


    <div>
      p
    </div>

  </div>
</template>

<script>
import Add from "~/components/svg/add.vue";
import Remove from "~/components/svg/remove.vue";

export default {
  name: "index",
  components: {Remove, Add},
  layout: 'admin'
}
</script>

<style scoped>

</style>
