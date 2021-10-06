<template>
  <q-page class="row">
    <div 
      v-for="(store, index) in stores" 
      :key="`card-${index}`" 
      class="col-4 q-pa-xs"
    >
      <q-card 
        class="bg-red text-white text-h6 my-card"
        @click="alert(store)"
      >
        {{store.name}}
      </q-card>
    </div>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar'

function print(obj, indent) {
  let tmp = '';
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] === "object") {
        tmp += `${(new Array(indent)).join('  ')}"${prop}":<br>${print(obj[prop], indent+1)}`;
      }
      else {
        tmp += `${(new Array(indent)).join('  ')}"${prop}": "${obj[prop]}"<br>`;
      }
    }
  }
  return tmp;
}

export default defineComponent({
  name: 'PageGrid',
  
  created() {
    this.$store.dispatch('example/getData');
  },

  computed: {
    stores() {
      return this.$store.state.example.stores;
    }
  },

  setup () {
    const $q = useQuasar();
    return {
      alert: function(store) {
        const str = print(store, 1);
        $q.dialog({
          title: 'Info',
          message: `<div style="white-space: pre-wrap;">${str}</div>`,
          html: true,
        });
      },
    };
  },
});
</script>
<style scoped>
.my-card {
  width: 100%;
  height: 100%;
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  white-space: pre-line;
}
</style>