interface IEndpoints {
  [key: string]: string;
}

const endpoints: IEndpoints = {
  // Enter endpoints below
};

const $api = (key: keyof IEndpoints) => {
  return endpoints[key];
};

export default $api;
