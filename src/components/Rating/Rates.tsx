import React, { useState } from "react";

function Rate({
  active,
  onChange,
  rate,
}: {
  active?: boolean;
  onChange: (rate: number) => void;
  rate: number;
}) {
  return (
    <label
      className={`${
        active
          ? "bg-opacity-100"
          : "bg-opacity-20 text-opacity-50 hover:text-opacity-100"
      }
  bg-rating-500
  hover:bg-accent
text-rating-100
w-10 rounded-full aspect-square grid place-content-center
hover:cursor-pointer
`}
    >
      <input
        className="appearance-none"
        type="radio"
        name="rate"
        onChange={() => onChange(rate)}
        value={rate}
      />
      {rate}
    </label>
  );
}

export function Rates({ min, max }: { min: number; max: number }) {
  const [rate, setRate] = useState(0);
  const array = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  const handleSubmit = (evt: React.FormEvent<HTMLElement>) => {
    evt.preventDefault();
    console.log(rate);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        {array.map((value) => (
          <Rate
            rate={value}
            key={value}
            active={value === rate}
            onChange={setRate}
          />
        ))}
      </div>
      <button
        className="bg-accent hover:bg-white hover:text-accent text-sm w-full rounded-full uppercase p-3"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
