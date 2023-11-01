import {
    getToken,
  } from 'token';
  
  const getHeaders = () => ({
    Accept: 'application/json',
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  });
  
  export const fetchDelete = ({ url }) => {
    return fetch(
      url,
      {
        headers: getHeaders(),
        method: 'DELETE',
      }
    ).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  }
  
  const fetchGet = ({ params = {}, url }) => {
    url = new URL(url);
    url.search = new URLSearchParams(params).toString();
    return fetch(
      url,
      {
        headers: getHeaders(),
        method: 'GET',
      }
    );
  };
  
  const fetchPost = ({ body, params = {}, url }) => {
    url = new URL(url);
    url.search = new URLSearchParams(params).toString();
  
    return fetch(
      url,
      {
        body: JSON.stringify(body),
        headers: getHeaders(),
        method: 'POST',
      }
    );
  };
  
  const fetchPut = ({ body, url }) => {
    return fetch(
      url,
      {
        body: JSON.stringify(body),
        headers: getHeaders(),
        method: 'PUT',
      }
    );
  }
  
  export const putJson = ({
    cardId,
    card,
    url,
  }) => {
    return fetchPut({
      url,
      body: {
        name: card.name,
        surname: card.surname,
        code: card.code,
        cvv: card.cvv,
        creationDate: card.creationDate,
      }
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
  };
  
  
  export const getJson = ({
    params,
    url,
  }) => {
    console.log(params)
    console.log(url)
    return fetchGet({
      params,
      url,
    }).then((response) => {
      console.log(response)
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  };
  
  export const postJson = ({
    body,
    params,
    url,
  }) => {
    return fetchPost({
      body,
      params,
      url,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    });
  };