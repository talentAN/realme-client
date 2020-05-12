import {
  SuggestionSvgBGI,
  BackToTopSvgBGI,
  UserSvg,
  AuthSvg,
  SettingSvg,
  LogoutSvg,
} from '../../utils/Svg';

import {CornerButton} from '../../utils/Types';
import {animate as genAnimate} from '../../utils/Animate';

const backToTop = () => {
  const height = window.document.body.scrollHeight;
  const animate = genAnimate({
    states: [height, 0],
    onAnimate: (currHeight: number) => window && window.scrollTo(0, currHeight),
    order: 'desc',
  });
  animate.start();
};

export const CornerButtonsConfig: CornerButton[] = [
  {
    toolTipContent: '产品建议',
    svg: SuggestionSvgBGI,
    linkTo: '/suggestion',
  },
  {
    toolTipContent: '回到顶部',
    svg: BackToTopSvgBGI,
    onClick: backToTop,
  },
];

export const AppHeaderProfileMenu = [
  {
    value: 'mainPage',
    label: '我的主页',
    icon: UserSvg,
    link: (id: string) => `/book/${id}/activities`,
  },
  {
    value: 'authCenter',
    label: '创作者中心',
    icon: AuthSvg,
    link: '/creator',
  },
  {
    value: 'setting',
    label: '设置',
    icon: SettingSvg,
    link: '/settings',
  },
  {
    value: 'mainPage',
    label: '退出',
    icon: LogoutSvg,
    onClick: (callback: Function, params?: any) => {
      callback(params);
    },
  },
];
