import { 
  DashboardOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  PictureOutlined,
  GiftOutlined,
  TeamOutlined,
  MailOutlined,
  MobileOutlined,
  SettingOutlined,
  FileTextOutlined,
  ShopOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
const dashBoardNavTree = [{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard',
      path: `${APP_PREFIX_PATH}/dashboard`,
      title: 'dashboard',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'catalog',
      path: `${APP_PREFIX_PATH}/catalog`,
      title: 'catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'orders',
      path: `${APP_PREFIX_PATH}/orders`,
      title: 'orders',
      icon: ShoppingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'clients',
      path: `${APP_PREFIX_PATH}/clients`,
      title: 'clients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'clientList',
          path: `${APP_PREFIX_PATH}/clients/client-list`,
          title: 'clientList',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'clientGroup',
          path: `${APP_PREFIX_PATH}/clients/client-group`,
          title: 'clientGroup',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'banners',
      path: `${APP_PREFIX_PATH}/banners`,
      title: 'banners',
      icon: PictureOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'promoCodes',
      path: `${APP_PREFIX_PATH}/promo-codes`,
      title: 'promoCodes',
      icon: GiftOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'offlinePlaces',
      path: `${APP_PREFIX_PATH}/offline-places`,
      title: 'offlinePlaces',
      icon: ShopOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'employee',
      path: `${APP_PREFIX_PATH}/employee`,
      title: 'employee',
      icon: TeamOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'mailing',
      path: `${APP_PREFIX_PATH}/mailing`,
      title: 'mailing',
      icon: MailOutlined,
      breadcrumb: true,
      submenu: []
    },
  ],
},
{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'system',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'settings',
      path: `${APP_PREFIX_PATH}/settings`,
      title: 'settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'mobile',
      path: `${APP_PREFIX_PATH}/mobile`,
      title: 'mobile',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'logs',
      path: `${APP_PREFIX_PATH}/logs`,
      title: 'logs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
    
  ]
}

]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
