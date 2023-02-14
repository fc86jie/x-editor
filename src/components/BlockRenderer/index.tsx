/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:31:02
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 16:05:35
 * @FilePath: \src\components\BlockRenderer\index.tsx
 * @Description: 渲染器
 */

import React from 'react';
import { BlockType, IBaseBlock } from '../../types/Block';
import CalloutBlock from '../Blocks/CalloutBlock';
import Heading1Block from '../Blocks/Heading1Block';
import Heading2Block from '../Blocks/Heading2Block';
import Heading3Block from '../Blocks/Heading3Block';
import QuoteBlock from '../Blocks/QuoteBlock';
import TextBlock from '../Blocks/TextBlock';

export interface IBlockRendererProps extends IBaseBlock {
  type: BlockType;
}

const BlockRenderer: React.FC<IBlockRendererProps> = ({ type, ...rest }) => {
  switch (type) {
    case 'text':
      return <TextBlock {...rest}></TextBlock>;
    case 'heading1':
      return <Heading1Block {...rest}></Heading1Block>;
    case 'heading2':
      return <Heading2Block {...rest}></Heading2Block>;
    case 'heading3':
      return <Heading3Block {...rest}></Heading3Block>;
    case 'callout':
      return <CalloutBlock {...rest}></CalloutBlock>;
    case 'quote':
      return <QuoteBlock {...rest}></QuoteBlock>;
    default:
      return <div>暂不支持的类型：{type}</div>;
  }
};
export default BlockRenderer;
