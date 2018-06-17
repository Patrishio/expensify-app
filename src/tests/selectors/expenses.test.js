import moment from 'moment';
import selectExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    stardDate: moment(0),
    endDate: undefined
  }
});