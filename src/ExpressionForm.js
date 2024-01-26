import React, { useState } from 'react';

const ExpressionForm = ({ onAddExpression }) => {
    const [connectorType, setConnectorType] = useState('AND');
    const [expressions, setExpressions] = useState([
        { ruleType: 'Age', operator: '>', value: '', score: '' },
    ]);

    const handleConnectorTypeChange = (e) => {
        setConnectorType(e.target.value);
    };

    const handleExpressionChange = (index, field, value) => {
        const updatedExpressions = [...expressions];
        updatedExpressions[index][field] = value;
        setExpressions(updatedExpressions);
    };

    const handleAddExpression = () => {
        setExpressions([...expressions, { ruleType: 'Age', operator: '>', value: '', score: '' }]);
    };

    const handleDeleteExpression = (index) => {
        const updatedExpressions = [...expressions];
        updatedExpressions.splice(index, 1);
        setExpressions(updatedExpressions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { connectorType, expressions };
        onAddExpression(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 row">
                <label htmlFor="connectorType" className="col-sm-2 col-form-label">
                    Connector Type:
                </label>
                <div className="col-sm-10">
                    <select
                        id="connectorType"
                        className="form-select"
                        value={connectorType}
                        onChange={handleConnectorTypeChange}
                    >
                        <option value="AND">AND</option>
                        <option value="OR">OR</option>
                    </select>
                </div>
            </div>

            {expressions.map((expression, index) => (
                <div key={index} className="row mb-3">
                    <div className="col-sm-3">
                        <label htmlFor={`ruleType-${index}`} className="col-form-label">
                            Rule Type:
                        </label>
                        <select
                            id={`ruleType-${index}`}
                            className="form-select"
                            value={expression.ruleType}
                            onChange={(e) => handleExpressionChange(index, 'ruleType', e.target.value)}
                        >
                            <option value="Age">Age</option>
                            <option value="Credit Score">Credit Score</option>
                            <option value="Account Balance">Account Balance</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor={`operator-${index}`} className="col-form-label">
                            Operator:
                        </label>
                        <select
                            id={`operator-${index}`}
                            className="form-select"
                            value={expression.operator}
                            onChange={(e) => handleExpressionChange(index, 'operator', e.target.value)}
                        >
                            <option value=">">{'>'}</option>
                            <option value="<">{'<'}</option>
                            <option value="≥">{'≥'}</option>
                            <option value="≤">{'≤'}</option>
                            <option value="=">{'='}</option>
                        </select>
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor={`value-${index}`} className="col-form-label">
                            Value:
                        </label>
                        <input
                            type="text"
                            id={`value-${index}`}
                            className="form-control"
                            value={expression.value}
                            onChange={(e) => handleExpressionChange(index, 'value', e.target.value)}
                        />
                    </div>

                    <div className="col-sm-3">
                        <label htmlFor={`score-${index}`} className="col-form-label">
                            Score:
                        </label>
                        <input
                            type="text"
                            id={`score-${index}`}
                            className="form-control"
                            value={expression.score}
                            onChange={(e) => handleExpressionChange(index, 'score', e.target.value)}
                        />
                    </div>

                    <div className="col-sm-12 mt-2">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => handleDeleteExpression(index)}
                        >
                            Delete Expression
                        </button>
                    </div>
                </div>
            ))}

            <div className="col-sm-12">
                <button type="button" className="btn btn-primary" onClick={handleAddExpression}>
                    Add Expression
                </button>
            </div>

            <div className="col-sm-12 mt-3">
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
            </div>

            <div className="col-sm-12 mt-3">
                <pre>{JSON.stringify({ connectorType, expressions }, null, 2)}</pre>
            </div>
        </form>
    );
};

export default ExpressionForm;
