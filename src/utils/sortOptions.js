export const SORT_ALPHABETICAL = "alphabeticalOrder"
export const SORT_ASC_SALARY = "ascendingSalary"
export const SORT_DESC_SALARY = "descendingSalary"
export const SORT_ASC_AGE = "ascendingAge"
export const SORT_DESC_AGE = "descendingAge"

export const mapping = {
  [SORT_ALPHABETICAL]: {
    field: 'employee_name',
    direction: 'asc'
  },
  [SORT_ASC_SALARY]: {
    field: 'employee_salary',
    direction: 'asc'
  },
  [SORT_DESC_SALARY]: {
    field: 'employee_salary',
    direction: 'desc'
  },
  [SORT_ASC_AGE]: {
    field: 'employee_age',
    direction: 'asc'
  },
  [SORT_DESC_AGE]: {
    field: 'employee_age',
    direction: 'desc'
  }
}