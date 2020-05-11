import {
  CollectSvg,
  QuestionSvg,
  InvatisionSvg,
  ServiceSvg,
  SuggestionSvgBGI,
  BackToTopSvgBGI,
  UserSvg,
  AuthSvg,
  SettingSvg,
  LogoutSvg
} from "../../utils/Svg";

import { CornerButton } from "../../utils/Types";
import { animate as genAnimate } from "../../utils/Animate";

const backToTop = () => {
  const height = window.document.body.scrollHeight;
  const animate = genAnimate({
    states: [height, 0],
    onAnimate: (currHeight: number) => window && window.scrollTo(0, currHeight),
    order: "desc"
  });
  animate.start();
};

export const StickNavList: any[] = [
  {
    label: "我的收藏",
    value: "collection",
    icon: CollectSvg,
    hasNum: true,
    linkTo: "/collections"
  },
  {
    label: "我关注的书",
    value: "interest",
    icon: QuestionSvg,
    hasNum: true,
    linkTo: "/people/adam_gllue/following/"
  },
  {
    label: "我的邀请",
    value: "collection",
    icon: InvatisionSvg,
    hasNum: true,
    linkTo: "creator/tools/question/invited"
  },
  {
    label: "站务中心",
    value: "service",
    icon: ServiceSvg,
    hasNum: false,
    linkTo: "/community"
  }
];
export const CornerButtonsConfig: CornerButton[] = [
  {
    toolTipContent: "产品建议",
    svg: SuggestionSvgBGI,
    linkTo: "/suggestion"
  },
  {
    toolTipContent: "回到顶部",
    svg: BackToTopSvgBGI,
    onClick: backToTop
  }
];

export const AppHeaderProfileMenu = [
  {
    value: "mainPage",
    label: "我的主页",
    icon: UserSvg,
    link: (id: string) => `/book/${id}/activities`
  },
  {
    value: "authCenter",
    label: "创作者中心",
    icon: AuthSvg,
    link: "/creator"
  },
  {
    value: "setting",
    label: "设置",
    icon: SettingSvg,
    link: "/settings"
  },
  {
    value: "mainPage",
    label: "退出",
    icon: LogoutSvg,
    onClick: (callback: Function, params?: any) => {
      callback(params);
    }
  }
];
