import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import { ENETRESET } from 'constants';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should no remove expense if id no found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'Mortgage',
    note: '',
    amount: 203,
    createdAt: -8500
  };
  
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
  // expect(state[3]).toEqual(expense)
});

test('should edit expense given by id', () => {
  const description = 'new desc';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description
    }
  };
  
  const state = expensesReducer(expenses, action);
  
  expect(state[1].description).toBe(description);
})

test('shouldnt edit expense if wrong id', () => {
  const description = 'new desc';
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description
    }
  };
  
  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual(expenses);
})