import instance from "../base";

const signout = async () => {
  return await instance().post(`/v1/auth/signout`);
};

export default signout;
