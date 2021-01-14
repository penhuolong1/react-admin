const initState = {
  sidebarCollapsed: 1,
  settingPanelVisible: 1,
};
export default function app(state = initState, action) {
  switch (action.type) {
    case 'state':
      return {
        ...state
      };
    case 'text':
      return {
        ...state
      };
    default:
      return state;
  }
}
