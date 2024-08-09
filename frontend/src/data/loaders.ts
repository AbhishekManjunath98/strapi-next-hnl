import qs from "qs";
import { getAuthToken } from "./services/get-token";

import { flattenAttributes, getStrapiURL } from "@/lib/utils";
import axios, { AxiosResponse } from "axios";
import { Root } from "postcss";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = await getAuthToken();

  const headers = {
    method: "GET",
    // headers: {
    //   "Content-Type": "application/json",
    //   Authorization: `Bearer ${authToken}`,
    // },
  };

  try {
    const response = await fetch(url);
    console.log(`respsonse ${response}`)
    const data = await response.json();
    console.log(`mydata: ${data["data"]}`);
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  
  const url = new URL("/api/home-page", baseUrl);

  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
          link: {
            populate: true,
          },
          feature: {
            populate: true,
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageData() {

  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    populate: [
      "header.logoText",
      "header.ctaButton",
      "footer.logoText",
      "footer.socialLink",
    ],
  })

  return await fetchData(url.href);

}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"]
  })

  return await fetchData(url.href);
}


export async function getSummaries(queryString: string, currentPage: number) {
  const PAGE_SIZE = 4;


  const query = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $containsi: queryString } },
        { summary: { $containsi: queryString } },
      ],
    },
    pagination: {
      pageSize: PAGE_SIZE,
      page: currentPage,
    },
  });

  const url = new URL("/api/summaries", baseUrl);
  url.search = query;

  return fetchData(url.href);
}


export async function getProperties(queryString: string, currentPage: number) {
  const PAGE_SIZE = 4;


  // const query = qs.stringify({
  //   sort: ["createdAt:desc"],
  //   filters: {
  //     $or: [
  //       { title: { $containsi: queryString } },
  //       { summary: { $containsi: queryString } },
  //     ],
  //   },
  //   pagination: {
  //     pageSize: PAGE_SIZE,
  //     page: currentPage,
  //   },
  // });

  // const url = new URL("/api/properties", baseUrl);
  // // url.search = query;
  // console.log(`url: ${url}`);

  // return fetchData(url.href);

  // const getPropertyById = (id: string) => {
    return axios({
      method: "get",
      url: `${baseUrl}/api/properties?populate=*`,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    }).then((res) => {
      console.log(`res.data: ${res.data}`)
      return res.data;
    });
  // };
}

export async function getSummaryById(summaryId: string) {
  return fetchData(`${baseUrl}/api/summaries/${summaryId}`);
}

