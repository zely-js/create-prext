export interface Options {
  appName: string;
  template: 'javascript' | 'typescript';
  dir: string;
}

export function cloneTemplate(opts: Options): void;

export function createZely(opts: Options): void;
