export interface TypeActions {
  actionId: string;
  actionText?: string;
  actionTask?: Function;
  closeAfterExecution?: Boolean;
  actionFunction?: Function;
  triggerLoading?: Boolean;
}
