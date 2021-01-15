const initState = {
  sidebarCollapsed: 1,
  settingPanelVisible: 1,
};
export default function app(state = initState, action) {
  debugger
  switch (action.type) {
    case 'state':
      return {
        ...state,
        settingPanelVisible: state.settingPanelVisible ++
      };
    case 'text':
      return {
        ...state
      };
    default:
      return state;
  }
}
