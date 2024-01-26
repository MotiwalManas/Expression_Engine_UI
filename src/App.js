
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpressionForm from './ExpressionForm';;

function App() {
  const handleAddExpression = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <ExpressionForm onAddExpression={handleAddExpression} />
    </div>
  );
}

export default App;
