// Command types
export interface ISuggestion {
  inputValue?: string;
  value: string;
  description?: string;
  cursorTarget: number;
}

export interface IArg {
  name?: string;
  description?: string;
  options?: Array<string>;
  type?: any;
  required?: true;
}

export interface IRunOptions<O = any> {
  commands: Array<string>;
  args?: Record<string, boolean | string | number>;
  options?: O;
}

export interface ICommand<O = any, R = any> {
  name?: string;
  description?: string;
  args?: Record<string, IArg>;
  commands?: Record<string, ICommand>;
  run?: (options?: O) => R;
}

// AST Types
type NodeType = 'ROOT' | 'COMMAND' | 'ARG_KEY' | 'ARG_VALUE' | 'ARG_VALUE_QUOTED' | 'WHITESPACE';

export interface IData {
  index: number;
}

export interface ILocation {
  start: number;
  end: number;
}

export interface INode extends ILocation {
  type: NodeType;
  value: Array<INode> | string;
}

export interface IResult {
  isError: boolean;
  index: number;
  result: {
    type: 'ROOT';
    value: Array<INode>;
    start: number;
    end: number;
    source: string;
  };
}

export type Args = Record<string, string | boolean>;