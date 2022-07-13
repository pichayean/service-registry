import { httpClient } from "apis/httpClient";

const baseUrl = "https://registry-api.trustmacus.com";
// const baseUrl = "http://localhost:5016";

const login = (username, password) => {
  return httpClient
    .post(`${baseUrl}/accounts/login`, {
      username,
      password,
    })
    .then((response) => {
      return response.data;
    });
};
const getAll = () => {
  return httpClient
    .get(`${baseUrl}/ServiceRegistrations`)
    .then((response) => {
      return response.data;
    });
};
const getById = (id) => {
  return httpClient
    .get(`${baseUrl}/ServiceRegistrations/${id}`)
    .then((response) => {
      return response.data;
    });
};
const create = ({
    serviceName,
    port,
    credential,
    serviceType,
    repository,
    remark,
    todo
  }) => {
  return httpClient
    .post(`${baseUrl}/ServiceRegistration`, {
        serviceName,
        port,
        credential,
        serviceType,
        repository,
        remark,
        todo
      })
    .then((response) => {
      return response.data;
    });
};
const update = ({
    id,
    serviceName,
    port,
    credential,
    serviceType,
    repository,
    remark,
    todo
  }) => {
  return httpClient
    .put(`${baseUrl}/ServiceRegistration`, {
        id,
        serviceName,
        port,
        credential,
        serviceType,
        repository,
        remark,
        todo
      })
    .then((response) => {
      return response.data;
    });
};

export { login, getAll, getById, update, create };
