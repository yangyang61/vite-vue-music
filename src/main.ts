import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes/index";
import "./utils/flexible";
import "./common/reset.css";
createApp(App).use(router).mount("#app");
