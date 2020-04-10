import React from "react";

import MCQ from 'components/mcq';

export default function App() {
  return (
    <div>
      <MCQ
        qs="Question"
        op1="option1"
        op2="option2"
        op3="option3"
        op4="option4"
        desc="Solution: description of the answer"
      />

      <MCQ
        qs="Question2"
        op1="option1"
        op2="option2"
        op3="option3"
        op4="option4"
        desc="Solution2: description of the answer"
      />
    </div>

  );
}
