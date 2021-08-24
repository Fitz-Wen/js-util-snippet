/**
 * 获取文件后缀名
 * @param {String} filename
 */
export function getExt(filename) {
  if (typeof filename == 'string') {
      return filename
          .split('.')
          .pop()
          .toLowerCase()
  } else {
      throw new Error('filename must be a string type')
  }
}

```
getExt("1.mp4") //->mp4
getExt("1.2.mp4") //->mp4
```


/**
 * Copy text to clipboard
 *
 * 复制字符串文档至剪贴板
 */
export function copy(value) {
  return new Promise((resolve) => {
    let copyTextArea = null;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = value;
      copyTextArea.select();
      document.execCommand('copy');
      resolve(value);
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}