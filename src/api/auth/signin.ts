import instance from "../base";

const signin = async (pword: string) => {
  return await instance().post(`/v1/auth/signin`, pword);
};

export default signin;
