/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:50:55
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 21:00:21
 * @FilePath: \src\components\Blocks\Heading3Block\index.tsx
 * @Description:
 */
import React from 'react';
import { IHeading3Block } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface IHeading2BlockProps extends Omit<IHeading3Block, 'type'> {}

const Heading3Block: React.FC<IHeading2BlockProps> = ({ content }) => {
  return (
    <div className="heading3">
      <TextEditor content={content.title} enableMenu={false}></TextEditor>
    </div>
  );
};
export default Heading3Block;
