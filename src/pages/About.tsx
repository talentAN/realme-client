import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

// 借汝头一用，看你为达到目的愿意付出的代价有多大
const About: React.FC = () => {
  const classes = makeStyles({
    root: {
      width: "100%",
      padding: "0 70px"
    }
  })();
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {`关于`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`LL是一个面对真实的地方。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`为啥要搞这么个地方？ 因为很有趣，当你深入剖析，你会发现很多有趣的事情。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`生活中太多东西要抢夺你的注意力，尝试暗示你作出选择，好像操作木偶一样操作你。有一次跟媳妇儿看综艺，我满眼看到的是广告，暗示。。。 我讨厌这样。
        人应该活出自己的样子，有自己的选择，追求自己想要的东西。不管是邪恶的，高尚的，无私的，自私的，而不是随波逐流。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`面对真实的自己，能很好的达成这点。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`在这里唯一的要求是真实的面对所有的自己。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`曾经我也以为这样很简单，然而实际操作下来，很难。 尤其是当你对自己进行数据分析的时候。 有些结论，很难自我接受。但这就是真实的自己，你必须和自己完成和解，不管是通过妥协，还是改变的方式。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`我们没有任何强制手段，如何保证呢？ 如果是为了吸引眼球，微信知乎微博，那么多地方随便搞嘛，何必来这里。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`用鲁迅老哥的话说，能把自己解剖的鲜血淋漓的那都是真正的猛士。我们不用那么凶残。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`本站采取完全匿名方式，不绑定任何个人信息（包括但不限于身份证，手机，邮箱, 第三方账号等等）。那么问题来了，本站不提供密码找回功能。 所以。。。千万千万。。不要忘记密码。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`为何不在大厂开个小号？ 两个原因：1、我不相信大厂的匿名性； 2、我也想看到更多同类人，进行对比学习。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`为啥要做这个事：我觉得自己是个很典型的代表，地球那么多人，一定会有一批跟我一样的人。 最根本的原因，我觉得很有趣，我想做。哪怕只有我一个用户，也会一直做下去。`}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`为何要采取这种方式，为了大家能更放心的面对真实的自己。nobody knows who you are。不用担心个人信息泄漏`}。
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`有兴趣就来试试，不感兴趣，看看其他人的分析，也是个蛮有趣的事情。`}
      </Typography>
    </div>
  );
};

export default About;
