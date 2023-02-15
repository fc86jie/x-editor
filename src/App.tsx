import SelectionArea, { SelectionEvent } from '@viselect/react';
import React, { useState } from 'react';
import './App.scss';
import BlockRenderer from './components/BlockRenderer';
import { SortableList } from './components/SortableList';
import MOCK_DATA from './MOCK_DATA';

function App() {
  const [selected, setSelected] = useState<Set<string>>(() => new Set());

  // @ts-ignore
  const extractIds = (els: Element[]): string[] => els.map(v => v.getAttribute('data-key'));
  const onStart = ({ event, selection }: SelectionEvent) => {
    if (!event?.ctrlKey && !event?.metaKey) {
      selection.clearSelection();
      setSelected(() => new Set());
    }
  };

  const onMove = ({
    store: {
      changed: { added, removed },
    },
  }: SelectionEvent) => {
    setSelected(prev => {
      const next = new Set(prev);
      extractIds(added).forEach(id => next.add(id));
      extractIds(removed).forEach(id => next.delete(id));
      return next;
    });
  };

  const [blocks, setBlocks] = useState(Object.values(MOCK_DATA));

  return (
    <div className="App">
      <SelectionArea className="container" onStart={onStart} onMove={onMove} selectables=".selectable">
        <SortableList
          items={blocks}
          onChange={setBlocks}
          renderItem={block => (
            <SortableList.Item id={block.id}>
              <div
                className={selected.has(block.id) ? 'selected selectable' : 'selectable'}
                data-key={block.id}
                key={block.id}>
                <BlockRenderer {...block}></BlockRenderer>
              </div>
              <SortableList.DragHandle />
            </SortableList.Item>
          )}
        />
        {/* {Object.values(MOCK_DATA).map(block => {
          return (
            <div
              className={selected.has(block.id) ? 'selected selectable' : 'selectable'}
              data-key={block.id}
              key={block.id}>
              <BlockRenderer {...block}></BlockRenderer>
            </div>
          );
        })} */}
      </SelectionArea>
    </div>
  );
}

export default App;
