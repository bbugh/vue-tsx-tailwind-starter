import { defineComponent } from "vue";
import { I18n } from "./i18n";

const App = defineComponent({
  setup() {
    return () => <div class="bg-red-300">{I18n.global.t("hello")}</div>;
  },
});

export default App;
