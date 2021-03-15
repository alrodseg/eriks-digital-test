interface EndpointParameters {
  [paramName: string]: string;
}

const baseUrl = process.env.API_URL;

const endpoints = {
  PRODUCTS_ALL: () => `${baseUrl}/products/all`,
  PRODUCT: (params: EndpointParameters) => `${baseUrl}/products/${params.productId}`, // Functions in case we needed params to avoid string replacement logic
};

export default endpoints;
