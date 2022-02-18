import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const submitNewExpenseHandler = (newExpense) => {
    props.onAddExpense(newExpense);
    switchShowForm();
  };
  let [showForm, setShowForm] = useState(false);
  let newExpenseContent;

  const switchShowForm = () => {
    setShowForm((showForm) => {
      return !showForm;
    });
  };

  if (showForm) {
    newExpenseContent = (
      <div className="new-expense">
        <ExpenseForm
          onSubmitNewExpense={submitNewExpenseHandler}
          onCancel={switchShowForm}
        />
      </div>
    );
  } else {
    newExpenseContent = (
      <div className="new-expense">
        <button onClick={switchShowForm}>
          Add New Expense
        </button>
      </div>
    );
  }

  return newExpenseContent;
};
export default NewExpense;
