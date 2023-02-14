/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:50:38
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 21:00:06
 * @FilePath: \src\components\Blocks\Heading2Block\index.tsx
 * @Description:
 */
import React from 'react';
import { IHeading2Block } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface IHeading2BlockProps extends Omit<IHeading2Block, 'type'> {}

const Heading2Block: React.FC<IHeading2BlockProps> = ({ content }) => {
  return (
    <div className="heading2">
      <TextEditor content={content.title} enableMenu={false}></TextEditor>
    </div>
  );
};
export default Heading2Block;
