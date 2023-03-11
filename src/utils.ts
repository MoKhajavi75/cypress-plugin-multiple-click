export const getSnapshotMessage = (times: number, index: number): string => {
  if (times === 1) return 'after';
  if (index === times - 1) return `after [#${index + 1}]`;
  return `click #${index + 1}`;
};
