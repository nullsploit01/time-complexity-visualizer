export enum TimeComplexityLabels {
  operations = 'operations',
  constant = 'O(1)',
  logarithmic = 'O(logN)',
  linear = 'O(N)',
  linear_log = 'O(N * logN)',
  quadratic = 'O(N^2)',
  cubic = 'O(N^3)',
  exponential = 'O(2^N)',
  factorial = 'O(N!)',
}

export type ITimeComplexity = {
  operations: string;
  [TimeComplexityLabels.constant]: number;
  [TimeComplexityLabels.logarithmic]: number;
  [TimeComplexityLabels.linear]: number;
  [TimeComplexityLabels.linear_log]: number;
  [TimeComplexityLabels.quadratic]: number;
  [TimeComplexityLabels.cubic]: number;
  [TimeComplexityLabels.exponential]: number;
  [TimeComplexityLabels.factorial]: number;
};

export type ITimeComplexities =
  | 'constant'
  | 'logarithmic'
  | 'linear'
  | 'linear_log'
  | 'quadratic'
  | 'cubic'
  | 'exponential'
  | 'factorial';
