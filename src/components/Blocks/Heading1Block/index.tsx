/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:50:20
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 20:59:56
 * @FilePath: \src\components\Blocks\Heading1Block\index.tsx
 * @Description:
 */

import React from 'react';
import { IHeading1Block } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface IHeading1BlockProps extends Omit<IHeading1Block, 'type'> {}

const Heading1Block: React.FC<IHeading1BlockProps> = ({ content }) => {
  return (
    <div className="heading1">
      <TextEditor content={content.title} enableMenu={false}></TextEditor>
    </div>
  );
};
export default Heading1Block;
