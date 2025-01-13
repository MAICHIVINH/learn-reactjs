// import axiosClient from "./axiosClient";
import product from '../data.json'

const productApi = {
   async getAll() {
      const url = product;
      return url;
    },

   get(id){
    const url = `/product${id}` ;
    return product.get(url);
   },

   add(data){
    const url = product;
    return product.post(url,data);
   },

   update(data){
    const url = `/product/${data.id}` ;
    return product.patch(url, data);
   },
   remove(id){
    const url = `/product/${id}` ;
    return product.delete(url);
   },
};

export default productApi;