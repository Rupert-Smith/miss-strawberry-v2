export type inputConfigType = {
  placeholder: string;
  type: string;
  error: { hasError: boolean; errorMessage: string };
  value: string;
  onBlur: Function;
  onChange: Function;
};

export type inputConfigTypeLabel = {
  labelText: string;
} & inputConfigType;
