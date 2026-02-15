import { useState } from "react";

export default function UserInput() {
    const [userInput, setUserInputs] = useState({
        initialInvestment: "",
        annualContribution: "",
        expectedReturn: "",
        years: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log({ "name": name, "value": value });
        setUserInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
    };

    return (
        <section id="user-input" className="row">
            <div className="col-6 mb-3">
                <label className="form-label" htmlFor="initial-investment">Initial Investment</label>
                <input type="number" onChange={handleInputChange} value={userInput.initialInvestment} required name="initialInvestment" className="form-control" placeholder="Initial Investment Amount" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label" htmlFor="annual-contribution">Annual Contribution</label>
                <input type="number" onChange={handleInputChange} value={userInput.annualContribution} required name="annualContribution" className="form-control" placeholder="Annual Contribution Amount" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label" htmlFor="expected-return">Expected Return</label>
                <input type="number" onChange={handleInputChange} value={userInput.expectedReturn} required name="expectedReturn" className="form-control" placeholder="Expected Return Percentage" />
            </div>
            <div className="col-6 mb-3">
                <label className="form-label" htmlFor="years">Duration (Years)</label>
                <input type="number" onChange={handleInputChange} value={userInput.years} required name="years" className="form-control" placeholder="Number of Years" />
            </div>
        </section>
    )
}