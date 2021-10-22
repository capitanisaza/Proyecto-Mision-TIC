
const CallApi = async (url, options = {}) => {
  options.headers = {
    "Content-type": "application/json",
    Accept: "application/json",
  };

  const response = await fetch("http://localhost:3000/api" + url, options);
  const data = await response.json();
  return data;
};

const api = {
  products: {
    list() {
      return CallApi("/products");
    },
    getProduct(id) {
      return CallApi(`/products/${id}`);
    },
    delete(id) {
      return CallApi(`/products/${id}`, {
        method: "DELETE",
      });
    },
    create(newProduct) {
      return CallApi("/products",
        {
          method: "POST",
          body: JSON.stringify(newProduct),
        }
      );
    },
    edit(data) {
      return CallApi(`/products/${data._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
  },
  salesManagment:{
    list() {
      return CallApi("salesManagment");
    },
    create(sale){
      return CallApi("salesManagment",{
        method:"POST",
        body:JSON.stringify(sale)
      });
    }
  },
  users:{
    list() {
      return CallApi("users");
    },
    create(Users){
      return CallApi("users",{
        method:"POST",
        body:JSON.stringify(Users)
      });
    },
    edit(data) {
      return CallApi(`/products/${data.Correo}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });
    },
  },
};

export default api;
