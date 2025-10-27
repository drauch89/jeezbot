import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('jeezbot', {
  openRepo: () => {
    // noop - actions handled in main
  }
});
