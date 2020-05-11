import {Theme} from '@material-ui/core/styles';
import {genBaseStyle} from '../../utils/consts/theme';
import {ChapterWidth} from '../../utils/Layout';

const genChapterCardStyle = (theme: Theme) => {
  return {
    ...genBaseStyle(theme),
    customCardRoot: {
      maxWidth: ChapterWidth,
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.background.default,
    },
    content: {
      wordWrap: 'break-word',
      wordBreak: 'break-all',
      width: `${Number.parseInt(ChapterWidth) - 32}px`,
    },
    contentIn: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkitBoxOrient': 'vertical',
      '-webkitLineClamp': 4,
    },
    contentOut: {
      display: '-webkit-box',
      '-webkitBoxOrient': 'vertical',
      '-webkitLineClamp': 100,
    },
    readMore: {
      float: 'right',
      fontSize: '14px',
    },
  };
};

export default genChapterCardStyle;
