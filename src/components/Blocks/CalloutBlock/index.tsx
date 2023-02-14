/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:51:08
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 21:11:04
 * @FilePath: \src\components\Blocks\CalloutBlock\index.tsx
 * @Description:
 */

import React from 'react';
import { ICalloutBlock } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface ICalloutBlockProps extends Omit<ICalloutBlock, 'type'> {}

const CalloutBlock: React.FC<ICalloutBlockProps> = ({ content }) => {
  return (
    <div className="callout">
      <TextEditor content={content.title}></TextEditor>
    </div>
  );
};
export default CalloutBlock;
