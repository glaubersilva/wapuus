export const API_LOCALHOST =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

export const API_URL = API_LOCALHOST
  ? "https://wapuus-api.local/json"
  : "https://api.wapuus.org/json";

export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Image {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  from: string;
  from_url: string;
  caption: string;
  views: string;
  total_comments: number;
}

export interface Comment {
  id: string;
  comment: string;
  author: string;
  parent_id: string;
}

export interface Stats {
  id: number;
  title: string;
  views: string;
}

export interface ImageResponse {
  image: Image;
  comments: Comment[];
}

export type ApiOptions = {
  url: string;
  options: RequestInit;
};

export function TOKEN_POST(body: any): ApiOptions {
  return {
    url: API_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string): ApiOptions {
  return {
    url: API_URL + "/jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_GET(token: string): ApiOptions {
  return {
    url: API_URL + "/wapuus-api/v2/users",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}

export function USER_POST(body: any): ApiOptions {
  return {
    url: API_URL + "/wapuus-api/v2/users",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function IMAGE_POST(formData: FormData, token: string): ApiOptions {
  return {
    url: API_URL + "/wapuus-api/v2/images",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    },
  };
}

export interface ImagesGetParams {
  page: number | string;
  total: number | string;
  user: number | string;
}

export function IMAGES_GET({ page, total, user }: ImagesGetParams): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/images/?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function IMAGE_GET(id: string | number): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/images/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
}

export function COMMENT_POST(id: string | number, body: any): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/comments/${id}`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (window.localStorage.getItem("token") || ""),
      },
      body: JSON.stringify(body),
    },
  };
}

export function COMMENT_DELETE(id: string | number): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/comments/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + (window.localStorage.getItem("token") || ""),
      },
    },
  };
}

export function IMAGE_DELETE(id: string | number): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/images/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + (window.localStorage.getItem("token") || ""),
      },
    },
  };
}

export function PASSWORD_LOST(body: any): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function PASSWORD_RESET(body: any): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function STATS_GET(): ApiOptions {
  return {
    url: `${API_URL}/wapuus-api/v2/stats`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + (window.localStorage.getItem("token") || ""),
      },
    },
  };
}
