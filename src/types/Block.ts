/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 15:34:32
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 15:47:25
 * @FilePath: \src\types\Block.ts
 * @Description:
 */

/**
 * @description 块ID
 */
export type BlockId = string;

/**
 * @description 块类型
 */
export type BlockType = 'text' | 'heading1' | 'heading2' | 'heading3' | 'callout' | 'quote';

/**
 * @description 基础块内容
 */
export interface BaseBlockContent {
  title: string;
}

export type SubNodes = BlockId[];

/**
 * @description 基础块，所有块的基类
 */
export interface IBaseBlock {
  id: BlockId;
  type: BlockType;
  content: BaseBlockContent;
  subNodes: SubNodes;
}

export interface ITextBlock extends IBaseBlock {
  type: 'text';
}

export interface IHeading1Block extends IBaseBlock {
  type: 'heading1';
}

export interface IHeading2Block extends IBaseBlock {
  type: 'heading2';
}

export interface IHeading3Block extends IBaseBlock {
  type: 'heading3';
}

export interface ICalloutBlock extends IBaseBlock {
  type: 'callout';
}

export interface IQuoteBlock extends IBaseBlock {
  type: 'quote';
}

export type IBlock = ITextBlock | IHeading1Block | IHeading2Block | IHeading3Block | ICalloutBlock | IQuoteBlock;
