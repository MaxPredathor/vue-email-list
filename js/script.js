const { createApp } = Vue;

createApp({
  data() {
    return {
      baseApi: "https://flynn.boolean.careers/exercises/api/",
      emailApi: "random/mail",
      emailsArray: [],
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get(this.baseApi + this.emailApi).then((response) => {
        this.emailsArray.push(response.data.response);
      });
    }
  },
}).mount("#app");
