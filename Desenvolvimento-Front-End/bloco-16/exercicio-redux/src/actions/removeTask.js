export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = (task) => {
  return { type: REMOVE_TASK, task };
};
