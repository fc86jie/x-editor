/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:52:13
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 21:11:27
 * @FilePath: \src\components\Blocks\TextBlock\index.tsx
 * @Description:
 */

import React from 'react';
import { ITextBlock } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface ITextBlockProps extends Omit<ITextBlock, 'type'> {}

const TextBlock: React.FC<ITextBlockProps> = ({ content }) => {
  return <TextEditor content={content.title}></TextEditor>;
};
export default TextBlock;
