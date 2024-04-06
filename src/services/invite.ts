import { request } from "@/utils";

// 获取已邀请的用户信息
export function getWechatInvite(userId: string) {
  return request({
    url: "/external/get_wechat_invite",
    method: "get",
    params: { userId },
  });
}

// 获取邀请进度
export function getInvitedSchedule(userId: string) {
  return request({
    url: "/external/get_invited_schedule",
    method: "get",
    params: { userId },
  });
}

// 获取领取邀请奖励的记录
export function getInvitedBonus(userId: string) {
  return request({
    url: "/external/get_invited_bonus",
    method: "get",
    params: { userId },
  });
}
