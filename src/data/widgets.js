const TestnetDomains = {
  'test.near.social': true,
  '127.0.0.1': true,
};

export const NetworkId = window.location.hostname in TestnetDomains ? 'testnet' : 'mainnet';
const TestnetWidgets = {
  image: 'eugenethedream/widget/Image',
  default: 'one.testnet/widget/ActivityPage',
  viewSource: 'eugenethedream/widget/WidgetSource',
  widgetMetadataEditor: 'eugenethedream/widget/WidgetMetadataEditor',
  widgetMetadata: 'eugenethedream/widget/WidgetMetadata',
  profileImage: 'eugenethedream/widget/ProfileImage',
  profilePage: 'eugenethedream/widget/Profile',
  profileName: 'eugenethedream/widget/ProfileName',
  componentsPage: 'one.testnet/widget/ComponentsPage',
  peoplePage: 'one.testnet/widget/PeoplePage',
  globalSearchPage: 'one.testnet/widget/GlobalSearchPage',
  notificationButton: 'one.testnet/widget/NotificationButton',
  profilePage: 'one.testnet/widget/ProfilePage',
  componentSummary: 'one.testnet/widget/ComponentSummary',
  notificationsPage: 'one.testnet/widget/NotificationsPage',
  tosCheck: 'one.testnet/widget/TosCheck',
  tosContent: 'one.testnet/widget/TosContent',
};

const MainnetWidgets = {
  image: 'mob.near/widget/Image',
  default: 'ref-admin.near/widget/ref-shanshan-list',
  viewSource: 'mob.near/widget/WidgetSource',
  widgetMetadataEditor: 'ref-admin.near/widget/WidgetMetadataEditor',
  widgetMetadata: 'ref-admin.near/widget/WidgetMetadata',
  profileImage: 'mob.near/widget/ProfileImage',
  profileName: 'patrick.near/widget/ProfileName',
  editorComponentSearch: 'ref-admin.near/widget/Editor.ComponentSearch',
  profileInlineBlock: 'mob.near/widget/Profile.InlineBlock',
  componentsPage: 'ref-admin.near/widget/ref-shanshan-list',
  peoplePage: 'adminalpha.near/widget/PeoplePage',
  globalSearchPage: 'adminalpha.near/widget/GlobalSearchPage',
  notificationButton: 'ref-admin.near/widget/NotificationButton',
  profilePage: 'ref-admin.near/widget/ProfilePage',
  componentSummary: 'ref-admin.near/widget/ComponentSummary',
  notificationsPage: 'ref-admin.near/widget/NotificationsPage',
  tosCheck: 'ref-admin.near/widget/TosCheck',
  tosContent: 'adminalpha.near/widget/TosContent',
  userBuilder: 'ref-admin.near/widget/user-builder',
  refMode: 'ref-admin.near/widget/ref-current-mode',
};

export const Widgets = NetworkId === 'testnet' ? TestnetWidgets : MainnetWidgets;
