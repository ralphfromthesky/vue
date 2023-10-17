<template>
  <div>
    <div>
      <form @submit.prevent="sendData()">
        <input type="text" v-model="formData.id" />
        <input type="text" v-model="formData.title" />
        <input type="text" v-model="formData.description" />
        <button>submit</button>
      </form>
    </div>
    <button @click="fetchData">SEE API</button>
    <div v-for="data in datas" :key="data.id" class="datus">
      <h4>{{ data.id }} -</h4>
      <h4>{{ data.title }}</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted, reactive } from "vue";
export default {
  name: "jsonPlaceHolder",
  setup() {
    const datas = ref([]);
    const api_url = ref("https://jsonplaceholder.typicode.com/todos");
    const api_post = ref('https://jsonplaceholder.typicode.com/posts');
    const formData = reactive({
      id: "",
      title: "",
      description: "",
    });

    const fetchData = async () => {
      try {
        const response = await axios.get(api_url.value);
        console.log(response);
        datas.value = response.data;
        return response;
      } catch (error) {
        console.log(`error: ${{ error }}`);
      }
    };

    const sendData = async () => {
      try {
        if (formData.id === "") {
          alert("no empty inputs!");
          return;
        }
      const response = await axios.post(api_post.value, formData);
      console.log("form submitted:", JSON.stringify(response.data));

      } catch (error) {
        console.log(`error: ${error}`)
      }
    };
    // onMounted(() => {
    //   fetchData()
    // })

    return {
      datas,
      fetchData,
      formData,
      sendData,
      api_post
    };
  },
};
</script>

<style scoped>
.datus {
  display: flex;
}
h4 {
  padding-right: 10px;
}
</style>