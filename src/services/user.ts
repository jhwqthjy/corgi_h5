import { request } from "@/utils";

// 获取用户数据
export function getUserDetail(userId: string) {
  return request({
    url: "/user/get_user_detail",
    method: "get",
    params: { userId },
  });
}
