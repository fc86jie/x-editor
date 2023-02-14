/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:51:57
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 21:11:17
 * @FilePath: \src\components\Blocks\QuoteBlock\index.tsx
 * @Description:
 */
import React from 'react';
import { IQuoteBlock } from '../../../types/Block';
import TextEditor from '../../TextEditor';
import './index.scss';

export interface IQuoteBlockProps extends Omit<IQuoteBlock, 'type'> {}

const QuoteBlock: React.FC<IQuoteBlockProps> = ({ content }) => {
  return (
    <div className="quote">
      <TextEditor content={content.title}></TextEditor>
    </div>
  );
};
export default QuoteBlock;
