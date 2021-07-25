import { useEffect } from "react";
import APIUser from "./apiUser";
const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  AZCloudBlobContainer,
} = require("@azure/storage-blob");

//returns the infomations about the Host with the given UID
function getHostById(hostId) {
  var path = "/api/host/" + hostId;
  return fetch(path, {
    method: "get",
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

//returns the infomations about all the hosts in the system
function getAllHosts() {
  var path = "/api/host/";
  return fetch(path, {
    method: "get",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    credentials: "include",
  })
    .then((response) => {
      response.json().then((d) => console.log(d));
      // return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}

//creates a new Host in the system
function createNewHost(host) {
  console.log(JSON.stringify(host));
  var path = "/api/host/";

  return fetch(path, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(host),
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}
function editOrCreateHost(host, user) {
  var path = "/api/host/";
  console.log(user);
  return fetch(path, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(host),
    credentials: "include",
  })
    .then((response) => {
      if (response.status == 400) {
        response.json().then((r) => {
          //if we received the response that a host already exists
          console.log(r);
          editHost(user.hostId, host);
        });
      } else {
        return response.json();
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function editHost(hostId, newBody) {
  console.log("editing host" + hostId);

  var path = "/api/host/" + hostId;
  return fetch(path, {
    method: "put",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(newBody),
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
}


function deleteHost(hostId) {
  var path = "/api/host/" + hostId;
  return fetch(path, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    credentials: "include",
  })
    .then((response) => {
      return response.json;
    })
    .catch((err) => {
      console.log(err);
    });
}

export default {
  getHostById,
  getAllHosts,
  deleteHost,
  editHost,
  createNewHost,
  editOrCreateHost,
};

