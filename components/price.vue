<template>
  <Transition name="slide-fade">
    <div class="grow flex flex-col justify-between">
      <table class="w-full mb-2">
        <tbody>
        <tr v-for="price in data">
          <td>{{ price.description }}</td>
          <td>{{ price.price }}{{ price.value }}</td>
        </tr>
        </tbody>
      </table>
      <p v-if="showData" class="text-xs text-gray leading-4"> * Un acompte de 50€ vous sera demandé pour la prise de rdv
        Tout rdv non honoré, ou non annulé par téléphone exclusivement, minimum 24h ouvrées avant, donnera lieu à la
        conservation de l’acompte.Les prestations réalisées sont non remboursables.
      </p>
    </div>
  </Transition>
</template>


<script>

export default {
  name: "price",
  props: {
    data: Object,
    showData: {
      DEFAULT: true
    }
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 5s ease-out;
}

.slide-fade-leave-active {
  transition: all 5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
