import { useCallback, useRef } from 'react';

// useLockFn 可以对 Promise 任务进行锁定
// 当 Promise 任务进入的时候，上锁
// 当 Promise 任务完成的时候，解锁

// useLockFn 可以实现逻辑层的 lock 功能，通过 useRef 储存 lock 状态，避免 lock 状态变更导致无用的组件渲染
function useLockFn<P extends any[] = any[], V extends any = any>(fn: (...args: P) => Promise<V>) {
  const lockRef = useRef(false);

  return useCallback(
    async (...args: P) => {
      if (lockRef.current) return;

      lockRef.current = true;

      try {
        const ret = await fn(...args);
      } catch (e) {
        throw e;
      } finally {
        lockRef.current = false;
      }
    },
    [fn],
  );
}

export default useLockFn;
