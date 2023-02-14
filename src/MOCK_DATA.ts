/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2023-02-14 16:48:21
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2023-02-14 16:59:02
 * @FilePath: \src\MOCK_DATA.ts
 * @Description:
 */

import { BlockId, IBlock } from './types/Block';

const MOCK_DATA: Record<BlockId, IBlock> = {
  bla: {
    id: 'bla',
    type: 'text',
    content: {
      title: 'This is text',
    },
    subNodes: [],
  },
  blb: {
    id: 'blb',
    type: 'heading1',
    content: {
      title: 'This is heading1',
    },
    subNodes: [],
  },
  blc: {
    id: 'blc',
    type: 'heading2',
    content: {
      title: 'This is heading2',
    },
    subNodes: [],
  },
  bld: {
    id: 'bld',
    type: 'heading3',
    content: {
      title: 'This is heading3',
    },
    subNodes: [],
  },
  ble: {
    id: 'ble',
    type: 'callout',
    content: {
      title: 'This is callout',
    },
    subNodes: [],
  },
  blf: {
    id: 'blf',
    type: 'quote',
    content: {
      title: 'This is quote',
    },
    subNodes: [],
  },
};

export default MOCK_DATA;
