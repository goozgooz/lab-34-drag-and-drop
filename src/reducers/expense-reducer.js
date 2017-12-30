import initialState from '../lib/initialState';

const expenseReducer = (state = initialState, action) => {
    let {type, expense, categoryID} = action;
    let oldState = {...state};

    switch(action.type) {
        case 'EXPENSE_CREATE':
            oldState[expense.id] = expense;
            return oldState;

        case 'EXPENSE_TOGGLE':
            oldState[expense.id].updating = !oldState[expense.id].updating;
            return oldState;

        case 'EXPENSE_DESTROY':

            delete oldState[expense.id];
            return oldState;

        case 'EXPENSE_UPDATE':
            oldState[expense.id].expense = expense.updatedContent;
            return oldState;
            
        case 'EXPENSE_MOVE':
            let expenseID = action.payload.expense.id;
            let oldCategory = action.payload.expense.categoryID;
            let newCategory = action.payload.categoryID;
            oldState[expenseID].categoryID = newCategory;
            return oldState;
        
        default:
            return state;
    }
}

export default expenseReducer;