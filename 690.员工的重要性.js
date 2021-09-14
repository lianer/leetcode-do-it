/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const employee = employees.find((v) => v.id === id);
  if (!employee) return -1;
  let importance = employee.importance;

  const subordinates = employee.subordinates;
  for (let i = 0; i < subordinates.length; i++) {
    importance += GetImportance(employees, subordinates[i]);
  }

  return importance;
};
// @lc code=end

console.log(
  GetImportance(
    [
      {
        id: 1,
        importance: 5,
        subordinates: [2, 3],
      },
      {
        id: 2,
        importance: 3,
        subordinates: [],
      },
      {
        id: 3,
        importance: 3,
        subordinates: [],
      },
    ],
    1
  ),
  11
);

console.log(
  GetImportance(
    [
      { id: 1, importance: 2, subordinates: [2] },
      { id: 2, importance: 3, subordinates: [] },
    ],
    2
  ),
  3
);
