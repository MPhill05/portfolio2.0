import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import styles from './CodeBlock.module.scss';

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    copy(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2 seconds
  };

  return (
    <div className={styles["code-block"]}>
      <pre>
        <code>{children}</code>
      </pre>
      <button onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy Code'}
      </button>
    </div>
  );
};

export default CodeBlock;
