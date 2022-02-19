import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID --EbGn_1RWHmmdjfOhNOm78uJ3YXOJv57_kXnG9a1Lk",
  },
});
