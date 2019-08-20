import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Example from '../components/Example';


function IndexPage() {

  return (
    <div className={styles.normal}>
      <Example/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ example }) => ({
  // data: example.current,
  example,
}))(IndexPage);

