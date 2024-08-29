import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Interview Preparation 🧑🏻‍💼',
    Svg: require('@site/static/img/interview.svg').default,
    description: (
      <>
        Ace your Java interviews with confidence! I've put together a collection of essential topics, common questions, and practical coding exercises to help you prepare for your next job interview. 
      </>
    ),
  },
  {
    title: 'Learning from zero 🎓',
    Svg: require('@site/static/img/online_learning.svg').default,
    description: (
      <>
        Starting from scratch? I’ll guide you through the basics, helping you build a strong foundation in Java. Step by step, you’ll learn how to write your first lines of code, understand key concepts, and gradually progress to more complex topics.
      </>
    ),
  },
  {
    title: 'Solving Problems 👩🏻‍💻',
    Svg: require('@site/static/img/programming.svg').default,
    description: (
      <>
      Here, you'll find a wide range of coding challenges tailored to different skill levels, along with guidance on how to tackle problems on popular platforms like LeetCode and HackerRank. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
