/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    console.log("submit", event);
    return { status: 200, body: { message: "success" }, sucess: true };
  },
};
