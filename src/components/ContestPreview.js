import React from 'react';

const ContestPreview = ({contest}) => {
  return (
    <div className="ContestPreview">
      <div className="category-name">Category Name: {contest.categoryName}</div>
      <div className="contest-name">Contest Name: {contest.contestName}</div>
    </div>
  );
};

ContestPreview.propTypes = {
  contest: React.PropTypes.object
};

export default ContestPreview;
