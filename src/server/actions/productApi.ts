export const getListProduct = async () => {
  try {
    const response = await fetch(
      "https://apistore.cybersoft.edu.vn/api/Product",
      {
        next: { revalidate: 60 },
      }
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getid?id=${id}`
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};

export const searchProduct = async (keyword: string) => {
  try {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`
    );

    const data = await response.json();
    return data.content;
  } catch (error) {
    console.log(error);
  }
};
