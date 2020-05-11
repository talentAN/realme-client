import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const DraftCard = (props: any) => {
  const { draft, editLink, onDelete } = props;
  const { title, content, lastmodified } = draft;
  return (
    <Card >
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(draft)}>删除</Button>
        <a href={editLink} target='_blank' rel="noopener noreferrer">编辑</a>
        <span>{lastmodified}</span>
      </CardActions>
    </Card>
  )
}
export default DraftCard