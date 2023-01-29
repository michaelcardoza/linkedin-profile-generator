import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

type TokenFieldProps = {
  onChange: (items: string[]) => void;
};

type TokenFieldEvent = React.ChangeEvent<HTMLInputElement> &
  React.KeyboardEvent<HTMLInputElement>;

export const TokenField: React.FC<TokenFieldProps> = (props) => {
  const { onChange } = props;
  const [items, setItems] = useState<string[]>([]);
  const [focus, setFocus] = useState(false);

  const handleAddItem = (event: TokenFieldEvent) => {
    const value = event.target.value;

    if (
      /(,$)/.test(value) &&
      !/(^,)/.test(value.trim()) &&
      /[A-Za-z0-9]/.test(value.trim().replace(',', '')) &&
      value.trim() !== ''
    ) {
      const item = value.trim().replace(',', '');
      const newItems = [...items, item];

      setItems(newItems);
      onChange(newItems);

      event.target.value = '';
    }

    if (event.key === 'Backspace' && value === '') {
      const newItems = [...items.slice(0, -1)];

      setItems(newItems);
      onChange(newItems);
    }
  };

  const handleRemoveItem = (index: number) => (event: React.FormEvent) => {
    event.preventDefault();

    const newItems = items.filter((_, i) => i !== index);

    setItems(newItems);
    onChange(newItems);
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      <div
        className={`mx-auto flex h-fit w-full max-w-xl flex-wrap items-center gap-2 overflow-hidden rounded-2xl border-2 bg-cslate-700 py-3 px-6 text-center font-light text-white ${
          focus ? 'border-cblue ring ring-cblue/20' : 'border-cslate-600'
        }`}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-1 rounded-full bg-cblack py-1 pl-3 pr-2 text-sm font-light"
          >
            <span>{item}</span>
            <button onClick={handleRemoveItem(index)}>
              <XMarkIcon className="h-5 w-5 text-slate-300" />
            </button>
          </div>
        ))}
        <input
          type="text"
          className="inline-block w-full min-w-[50px] max-w-full flex-1 bg-transparent outline-none"
          onChange={handleAddItem}
          onKeyDown={handleAddItem}
          placeholder={`${items.length ? '' : 'Comma separated ...,'}`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      </div>
    </div>
  );
};
