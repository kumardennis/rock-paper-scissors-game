import React, { useState, useEffect } from 'react';
import './SlotMachineTextEffect.styles.css';
import { BetItemConstantType } from 'shared/types/BetItem.types';
import { betTypeConstants } from 'shared/utils/constants';

const defaultOptions = Object.values(betTypeConstants);

type Props = {
  options?: BetItemConstantType[];
};

export const SlotMachineTextEffect = ({
  options = defaultOptions,
}: Props): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % options.length);
    }, 500); // Change text every 1 second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slot">
      <span style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
        {options.map((option, index) => (
          <span key={index}>{option.type}</span>
        ))}
      </span>
    </div>
  );
};
