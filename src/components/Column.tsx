import React from 'react';
import Flex from './Flex';
import Row from './Row';

type ColumnProps = {
  loading?: boolean;
  loadingAmount?: number;
  heading?: string;
  children?: React.ReactNode;
};

const Column = ({ heading, loading, loadingAmount, children }: ColumnProps) => {
  // useEffect(() => {
  //   // TODO: refactor this to not use raw query calls
  //   Array.prototype.forEach.call(document.querySelectorAll('.column .active'), (activeRow) => {
  //     activeRow.scrollIntoView({
  //       block: 'center',
  //     });
  //   });
  // }, []);

  return (
    <Flex className="flex-1 break-words" column>
      {heading && (
        <Flex center className="min-h-[32px] w-full bg-relisten-100 text-white">
          {heading}
        </Flex>
      )}
      <Flex column className="flex-1 overflow-y-auto overflow-x-hidden">
        {loading
          ? new Array(loadingAmount).fill(null).map((i, idx) => <Row key={idx} loading />)
          : children}
      </Flex>
    </Flex>
  );
};

export default Column;
