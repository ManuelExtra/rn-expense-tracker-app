import { FlatList, StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-02-02'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2024-02-05'),
  },
  {
    id: 'e3',
    description: 'Some bananas',
    amount: 2.99,
    date: new Date('2024-03-05'),
  },
  {
    id: 'e4',
    description: 'A book',
    amount: 20.99,
    date: new Date('2024-01-05'),
  },
  {
    id: 'e5',
    description: 'Another book',
    amount: 18.99,
    date: new Date('2024-04-01'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-02-02'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 89.99,
    date: new Date('2024-02-05'),
  },
  {
    id: 'e8',
    description: 'Some bananas',
    amount: 2.99,
    date: new Date('2024-03-05'),
  },
  {
    id: 'e9',
    description: 'A book',
    amount: 20.99,
    date: new Date('2024-01-05'),
  },
  {
    id: 'e10',
    description: 'Another book',
    amount: 18.99,
    date: new Date('2024-04-01'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
