import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Spinner from '../../components/common/Spinner';
import ChapterCard from '../../components/common/ChapterCard';
import ChaptersStyle from './Chapters.style';

const Chapters = (props: any) => {
  const classes = makeStyles(ChaptersStyle as any)();
  const {chapters, loading, actions} = props;
  return (
    <div className={classes.root}>
      {chapters.map((chapter: any, index: number) => {
        return (
          <Fragment key={index}>
            <ChapterCard chapter={chapter} actions={actions} />
          </Fragment>
        );
      })}
      {loading && <Spinner />}
    </div>
  );
};

export default Chapters;
